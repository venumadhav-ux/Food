const WHATSAPP_NUMBER = "919603696669";
const PARCEL_FEE_PER_ITEM = 10;
let orderType = "dining";
let cart = {};

const D = [
  ['Burgers', [
    ['Veg Burger', 80, 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=500&q=80'],
    ['Paneer Burger', 110, 'https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=500&q=80'],
    ['Egg Burger', 85, 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=500&q=80'],
    ['Egg Chicken Burger', 119, 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=500&q=80'],
    ['Classic Chicken Burger', 105, 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80'],
    ['Chicken Crispy Burger', 120, 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=500&q=80'],
    ['Popcorn Chicken Burger', 110, 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=500&q=80'],
    ['Crispy No Bun Chicken Burger', 189, 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=500&q=80']
  ]],
  ['Rolls', [
    ['Veg Roll', 80, 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=500&q=80'],
    ['Paneer Roll', 110, 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=500&q=80'],
    ['Egg Roll', 85, 'https://images.unsplash.com/photo-1648896650464-1d61bb66ca07?auto=format&fit=crop&w=500&q=80'],
    ['Egg Chicken Roll', 110, 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=500&q=80'],
    ['Crispy Chicken Roll', 120, 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=500&q=80'],
    ['Popcorn Chicken Roll', 110, 'https://images.unsplash.com/photo-1648896650464-1d61bb66ca07?auto=format&fit=crop&w=500&q=80']
  ]],
  ['French Fries', [
    ['Salted Fries', 80, 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=500&q=80'],
    ['Peri Peri Fries', 85, 'https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=500&q=80'],
    ['Salted Cheesy Fries', 100, 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=500&q=80'],
    ['Peri Peri Cheesy Fries', 109, 'https://images.unsplash.com/photo-1518013431117-eb1465fa5752?auto=format&fit=crop&w=500&q=80'],
    ['Paneer Loaded', 150, 'https://images.unsplash.com/photo-1586816001966-79b736744398?auto=format&fit=crop&w=500&q=80'],
    ['Paneer Loaded with Cheese', 160, 'https://images.unsplash.com/photo-1586816001966-79b736744398?auto=format&fit=crop&w=500&q=80'],
    ['Chicken Loaded', 150, 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=500&q=80'],
    ['Chicken Loaded Bowl Fries with Cheese', 160, 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=500&q=80']
  ]],
  ['Bread Omelette', [
    ['Bread Omelette', 80, 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=500&q=80'],
    ['Bread Omelette with Cheese', 99, 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=500&q=80'],
    ['Egg Chicken Bread Omelette', 120, 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=500&q=80'],
    ['Egg Chicken Bread Omelette with Cheese', 139, 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=500&q=80']
  ]],
  ['Starters', [
    ['Veg Fingers (6)', 89, 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=500&q=80'],
    ['Paneer Popcorn (100gms)', 129, 'https://images.unsplash.com/photo-1562967916-eb82221dfb36?auto=format&fit=crop&w=500&q=80'],
    ['Paneer Fingers (6)', 129, 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=500&q=80'],
    ['Cheese Corn Nuggets (6)', 109, 'https://images.unsplash.com/photo-1562967916-eb82221dfb36?auto=format&fit=crop&w=500&q=80'],
    ['Chicken Nuggets (6)', 99, 'https://images.unsplash.com/photo-1585325701165-351af916e581?auto=format&fit=crop&w=500&q=80'],
    ['Chicken Fingers (6)', 109, 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=500&q=80'],
    ['Chicken Cheese Balls (6)', 120, 'https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=500&q=80'],
    ['Chicken Popcorn (130gms)', 130, 'https://images.unsplash.com/photo-1562967916-eb82221dfb36?auto=format&fit=crop&w=500&q=80'],
    ['Crispy Chicken Lollipop (5)', 120, 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=500&q=80'],
    ['Crispy Chicken Chips', 149, 'https://images.unsplash.com/photo-1562967916-eb82221dfb36?auto=format&fit=crop&w=500&q=80'],
    ['Crispy Chicken Fries', 149, 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=500&q=80'],
    ['Crispy Prawns (120gms)', 140, 'https://images.unsplash.com/photo-1559742811-822873691df8?auto=format&fit=crop&w=500&q=80'],
    ['Pudina Chicken Kabab', 130, 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=500&q=80'],
    ['Lemon Chicken Kabab', 130, 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=500&q=80'],
    ['Garlic Chicken Kabab', 130, 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80'],
    ['Mushroom Kabab', 100, 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=500&q=80'],
    ['Crispy Mushrooms', 120, 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=500&q=80']
  ]],
  ['Pizzas', [
    ['Cheese Blast', 109, 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=500&q=80'],
    ['Cheese & Corn Pizza', 130, 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=500&q=80'],
    ['Paneer Pizza', 140, 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=500&q=80'],
    ['Paneer Corn Pizza', 150, 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=500&q=80'],
    ['Chicken Pizza', 150, 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=500&q=80'],
    ['Chicken Keema Pizza', 170, 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=500&q=80'],
    ['Chicken Corn Pizza', 160, 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=500&q=80']
  ]],
  ['Sandwich Menu', [
    ['Cheese & Corn Sandwich', 100, 'https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=500&q=80'],
    ['Paneer Sandwich', 110, 'https://images.unsplash.com/photo-1528736235302-52922df5c122?auto=format&fit=crop&w=500&q=80'],
    ['Paneer Cheese Sandwich', 130, 'https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=500&q=80'],
    ['Chicken Sandwich', 130, 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=500&q=80'],
    ['Chicken & Cheese Sandwich', 150, 'https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=500&q=80']
  ]],
  ['Desserts', [
    ['Brownie', 85, 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=500&q=80'],
    ['Lava Cake', 85, 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&w=500&q=80']
  ]],
  ["Mojito's", [
    ['Lemon Sprite', 69, 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=500&q=80'],
    ['Lemon Mint', 79, 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=500&q=80'],
    ['Blue Coraco', 79, 'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=500&q=80'],
    ['Pinacola', 79, 'https://images.unsplash.com/photo-1546171753-97d7676e4602?auto=format&fit=crop&w=500&q=80'],
    ['Raspberry', 79, 'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=500&q=80'],
    ['Passion Fruit', 79, 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=500&q=80']
  ]],
  ['Burger Combo', [
    ['Veg Burger + Fries + Mojito', 120, 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=500&q=80'],
    ['Veg Burger + Fries + Mojito + 2 Fingers', 180, 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=500&q=80'],
    ['Paneer Burger + Mojito', 170, 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80'],
    ['Egg Burger + Fries + Mojito', 160, 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=500&q=80'],
    ['Classic Chicken Burger + Fries + Mojito', 180, 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=500&q=80'],
    ['Crispy Chicken Burger + Mojito or Fries', 170, 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=500&q=80'],
    ['Crispy Chicken Burger + Fries + Mojito', 190, 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=500&q=80']
  ]],
  ['Rolls Combo', [
    ['Veg Roll + Fries + Mojito + 2 Fingers', 180, 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=500&q=80'],
    ['Paneer Roll + Mojito or Fries', 170, 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=500&q=80'],
    ['Egg Roll + Fries + Mojito', 180, 'https://images.unsplash.com/photo-1648896650464-1d61bb66ca07?auto=format&fit=crop&w=500&q=80'],
    ['Crispy Chicken Roll + Fries or Mojito', 170, 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=500&q=80'],
    ['Crispy Chicken Roll + Fries + Mojito + 2pcs Chicken Lollipop', 220, 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=500&q=80'],
    ['Popcorn Chicken Roll + Mojito', 210, 'https://images.unsplash.com/photo-1648896650464-1d61bb66ca07?auto=format&fit=crop&w=500&q=80']
  ]],
  ['Sandwich Combo', [
    ['Corn & Cheese Sandwich + Fries + Mojito', 180, 'https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=500&q=80'],
    ['Chicken Sandwich + Fries + Mojito + 2 Fingers + 2 Lollipops', 250, 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=500&q=80'],
    ['Chicken Cheese Sandwich + Fries + Mojito + 2 Lollipops', 280, 'https://images.unsplash.com/photo-1628191010210-a59de33e5941?auto=format&fit=crop&w=500&q=80']
  ]]
];

const fallbackPlaceholder = 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=500&q=80';
const slug = s => s.toLowerCase().replace(/[^a-z0-9]+/g, '-');
const money = n => Number(n).toLocaleString('en-IN');

const menu = D.map(c => ({
  name: c[0],
  items: c[1].map(x => ({
    id: slug(c[0] + '-' + x[0]),
    name: x[0],
    price: x[1],
    diningOnly: c[0].includes('Combo'),
    image: x[2] || fallbackPlaceholder
  }))
}));

const all = () => menu.flatMap(c => c.items);
const get = id => all().find(i => i.id === id);

function toggleCategory(catId) {
  const el = document.getElementById(catId);
  if (el) el.classList.toggle('open');
}

function action(id) {
  let e = document.querySelector(`[data-a="${id}"]`);
  let q = cart[id] || 0;
  if (e) {
    e.innerHTML = q
      ? `<div class="qty"><button onclick="change('${id}',-1)">−</button><b>${q}</b><button onclick="change('${id}',1)">+</button></div>`
      : `<button class="add" onclick="change('${id}',1)">ADD</button>`;
  }
}

function render() {
  let menuEl = '';
  menu.forEach((c) => {
    const catId = `c-${slug(c.name)}`;
    menuEl += `
      <div class="category-dropdown" id="${catId}">
        <button class="category-header" onclick="toggleCategory('${catId}')">
          <div class="category-header-title">
            <span>${c.name}</span>
            <span class="category-count">${c.items.length} items</span>
          </div>
          <span class="category-icon">▼</span>
        </button>
        <div class="category-items">
          ${c.items.map(i => `
            <div class="item">
              <img class="food-img" src="${i.image}" alt="${i.name}" loading="lazy" onerror="this.src='${fallbackPlaceholder}'">
              <div class="info">
                <h3>${i.name}${i.diningOnly ? '<span class="tag">DINING ONLY</span>' : ''}</h3>
                <div class="price">₹${money(i.price)}</div>
              </div>
              <div data-a="${i.id}"></div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  });

  document.getElementById('menu').innerHTML = menuEl;
  all().forEach(i => action(i.id));
}

function totals() {
  let count = 0, food = 0;
  Object.entries(cart).forEach(([id, q]) => {
    let i = get(id);
    count += q;
    food += q * i.price;
  });
  let parcel = orderType === 'parcel' ? count * PARCEL_FEE_PER_ITEM : 0;
  return { count, food, parcel, total: food + parcel };
}

function update() {
  let t = totals();
  const cartBar = document.getElementById('cartBar');
  const cartCount = document.getElementById('cartCount');
  const cartTotal = document.getElementById('cartTotal');
  const foodTotal = document.getElementById('foodTotal');
  const parcelTotal = document.getElementById('parcelTotal');
  const modalTotal = document.getElementById('modalTotal');
  const parcelLine = document.getElementById('parcelLine');

  cartBar.hidden = !t.count;
  cartCount.textContent = t.count;
  cartTotal.textContent = money(t.total);
  foodTotal.textContent = money(t.food);
  parcelTotal.textContent = money(t.parcel);
  modalTotal.textContent = money(t.total);
  parcelLine.hidden = !t.parcel;
}

function change(id, x) {
  let i = get(id);
  if (orderType === 'parcel' && i.diningOnly && x > 0) {
    return alert('This combo is available for dining only.');
  }
  cart[id] = Math.max(0, (cart[id] || 0) + x);
  if (!cart[id]) delete cart[id];
  action(id);
  update();
  cartRender();
}

function cartRender() {
  const cartItems = document.getElementById('cartItems');
  cartItems.innerHTML = Object.entries(cart).map(([id, q]) => {
    let i = get(id);
    return `<div class="cartrow">
      <div>
        <b>${i.name}</b>
        <small>₹${money(i.price)} × ${q}</small>
      </div>
      <div class="row">
        <button onclick="change('${id}',-1)">−</button>
        <b>${q}</b>
        <button onclick="change('${id}',1)">+</button>
      </div>
    </div>`;
  }).join('') || '<p style="color:#777;padding:15px 0;">Your cart is empty.</p>';
}

function openCart() {
  const cartModal = document.getElementById('cartModal');
  cartRender();
  cartModal.hidden = false;
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  const cartModal = document.getElementById('cartModal');
  cartModal.hidden = true;
  document.body.style.overflow = '';
}

document.querySelectorAll('.type').forEach(b => {
  b.onclick = () => {
    orderType = b.dataset.type;
    document.querySelectorAll('.type').forEach(x => x.classList.toggle('active', x === b));
    all().forEach(i => action(i.id));
    update();
    cartRender();
  };
});

async function getOrderNumber(items) {
  let orderNum = null;
  try {
    const res = await fetch("/api/order-number", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        items,
        orderType: orderType === "dining" ? "Dining" : "Parcel"
      })
    });
    if (res.ok) {
      const data = await res.json();
      orderNum = data.orderNumber;
    }
  } catch (err) {
    console.error("API error, using local daily counter:", err);
  }

  if (!orderNum) {
    const today = new Date().toISOString().split("T")[0];
    const lastDate = localStorage.getItem("last_order_date");
    let count = parseInt(localStorage.getItem("daily_order_count") || "0", 10);
    if (lastDate !== today) {
      count = 1;
      localStorage.setItem("last_order_date", today);
    } else {
      count += 1;
    }
    localStorage.setItem("daily_order_count", count.toString());
    orderNum = count;
  }
  return orderNum;
}

const whatsappButton = document.getElementById('whatsappButton');
const notesInput = document.getElementById('notesInput');

whatsappButton.onclick = async () => {
  const t = totals();
  if (!t.count) return alert("Please add at least one item.");

  const items = Object.entries(cart).map(([id, q]) => {
    const item = get(id);
    return { name: item.name, quantity: q, lineTotal: item.price * q };
  });

  whatsappButton.disabled = true;
  whatsappButton.textContent = "Generating Order...";

  const orderNum = await getOrderNumber(items);

  whatsappButton.disabled = false;
  whatsappButton.textContent = "Send Order on WhatsApp →";

  let msg = `🍽️ *CHEF TEJA'S FOOD ON WHEELS*\n\n🔢 *ORDER #${orderNum}*\n📦 *Type:* ${orderType === 'dining' ? 'Dining' : 'Parcel'}\n\n`;
  items.forEach(i => {
    msg += `• ${i.name} × ${i.quantity} = ₹${i.lineTotal}\n`;
  });
  msg += `\n💰 *Food total:* ₹${t.food}`;
  if (t.parcel) {
    msg += `\n📦 *Parcel charge:* ₹${t.parcel} (₹${PARCEL_FEE_PER_ITEM} × ${t.count} items)`;
  }
  msg += `\n💵 *TOTAL: ₹${t.total}*`;
  if (notesInput.value.trim()) {
    msg += `\n\n📝 *Special instructions:* ${notesInput.value.trim()}`;
  }
  msg += `\n\nPlease prepare the order.`;

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
};

function printCustomerBill(assignedNum = null) {
  const t = totals();
  if (!t.count) return alert("Please add at least one item to generate a bill.");

  const receipt = document.getElementById("receipt");
  if (!receipt) return;

  const now = new Date();
  const timeStr = now.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" });
  const dateStr = now.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
  const displayOrderNum = assignedNum || (localStorage.getItem("daily_order_count") || "1");

  let itemsHtml = "";
  Object.entries(cart).forEach(([id, q]) => {
    const item = get(id);
    const lineTotal = item.price * q;
    itemsHtml += `
      <div class="r-item">
        <div class="r-item-name">${item.name}</div>
        <div class="r-row">
          <span>${q} x ₹${money(item.price)}</span>
          <span>₹${money(lineTotal)}</span>
        </div>
      </div>
    `;
  });

  const notes = notesInput ? notesInput.value.trim() : "";

  receipt.innerHTML = `
    <div class="r-center r-bold r-large">CHEF TEJA'S</div>
    <div class="r-center r-title">FOOD ON WHEELS</div>
    <div class="r-center">Ph: +91 96036 96669</div>
    <div class="r-dash"></div>
    <div class="r-row">
      <span class="r-bold">ORDER #${displayOrderNum}</span>
      <span class="r-bold">${orderType.toUpperCase()}</span>
    </div>
    <div class="r-row">
      <span>Date: ${dateStr}</span>
      <span>${timeStr}</span>
    </div>
    <div class="r-dash"></div>
    ${itemsHtml}
    <div class="r-dash"></div>
    <div class="r-row">
      <span>Subtotal</span>
      <span>₹${money(t.food)}</span>
    </div>
    ${t.parcel ? `
      <div class="r-row">
        <span>Parcel Fee (${t.count} items)</span>
        <span>₹${money(t.parcel)}</span>
      </div>
    ` : ""}
    <div class="r-dash"></div>
    <div class="r-row r-bold r-large">
      <span>TOTAL</span>
      <span>₹${money(t.total)}</span>
    </div>
    ${notes ? `
      <div class="r-dash"></div>
      <div><strong>Note:</strong> ${notes}</div>
    ` : ""}
    <div class="r-dash"></div>
    <div class="r-footer">
      Thank You! Visit Again 😊<br>
      Instagram: @cheftejas369
    </div>
  `;

  window.print();
}

const 
