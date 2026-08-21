export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    if (!body || !Array.isArray(body.items) || body.items.length === 0) {
      return res.status(400).json({ error: "Order must contain at least one item." });
    }

    const url = process.env.UPSTASH_REDIS_REST_URL;
    const token = process.env.UPSTASH_REDIS_REST_TOKEN;

    if (!url || !token) {
      return res.status(500).json({ error: "Order counter is not configured." });
    }

    // India calendar date (YYYY-MM-DD). Creates a unique key per day.
    const date = new Intl.DateTimeFormat("en-CA", {
      timeZone: "Asia/Kolkata",
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    }).format(new Date());

    const key = `fow:order-counter:${date}`;

    // Redis INCR is atomic; simultaneous customers will never get duplicate numbers.
    const response = await fetch(`${url}/incr/${encodeURIComponent(key)}`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` }
    });

    if (!response.ok) {
      throw new Error(`Redis returned ${response.status}`);
    }

    const result = await response.json();
    const orderNumber = Number(result.result);

    // Optional: Set key expiry to 48 hours to clean up old counters automatically
    await fetch(`${url}/expire/${encodeURIComponent(key)}/172800`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` }
    }).catch(() => {});

    return res.status(200).json({
      orderNumber,
      date,
      orderType: body.orderType || "Dining"
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Unable to create order number." });
  }
}
