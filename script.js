const WHATSAPP_NUMBER = "919010185837";
const PARCEL_FEE_PER_ITEM = 10;
let orderType = "dining";
let cart = {};

const D = [
  ['Burgers', [
    ['Veg Burger', 70, 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=500&q=80'],
    ['Paneer Burger', 100, 'https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=500&q=80'],
    ['Egg Burger', 75, 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=500&q=80'],
    ['Egg Chicken Burger', 109, 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=500&q=80'],
    ['Classic Chicken Burger', 95, 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80'],
    ['Chicken Crispy Burger', 110, 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=500&q=80'],
    ['Popcorn Chicken Burger', 100, 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=500&q=80'],
    ['SPL Chicken Burger', 120, 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=500&q=80'],
    ['SPL Chicken Burger with Cheese', 140, 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=500&q=80'],
    ['Crispy No Bun Chicken Burger', 179, 'https://images.unsplash.com/photo-1521305916504-4a1121188589?auto=format&fit=crop&w=500&q=80']
  ]],
  ['Rolls', [
    ['Veg Roll', 70, 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=500&q=80'],
    ['Paneer Roll', 100, 'https://images.unsplash.com/photo-1648896650464-1d61bb66ca07?auto=format&fit=crop&w=500&q=80'],
    ['Egg Roll', 75, 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=500&q=80'],
    ['Egg Chicken Roll', 100, 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=500&q=80'],
    ['Crispy Chicken Roll', 110, 'https://images.unsplash.com/photo-1648896650464-1d61bb66ca07?auto=format&fit=crop&w=500&q=80'],
    ['Popcorn Chicken Roll', 100, 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=500&q=80'],
    ['SPL Chicken Roll', 120, 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=500&q=80']
  ]],
  ['French Fries', [
    ['Mini Fries', 49, 'https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=500&q=80'],
    ['Salted Fries', 70, 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=500&q=80'],
    ['Peri Peri Fries', 75, 'https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=500&q=80'],
    ['Salted Cheesy Fries', 90, 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=500&q=80'],
    ['Peri Peri Cheesy Fries', 99, 'https://images.unsplash.com/photo-1518013431117-eb1465fa5752?auto=format&fit=crop&w=500&q=80'],
    ['Paneer Loaded Fries', 129, 'https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=500&q=80'],
    ['Chicken Loaded Fries', 139, 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=500&q=80'],
    ['Cheesy Chicken Loaded Fries', 149, 'https://images.unsplash.com/photo-1518013431117-eb1465fa5752?auto=format&fit=crop&w=500&q=80']
  ]],
  ['Bread Omelette', [
    ['Bread Omelette', 70, 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=500&q=80'],
    ['Bread Omelette with Cheese', 89, 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=500&q=80'],
    ['Egg Chicken Bread Omelette', 110, 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=500&q=80'],
    ['Egg Chicken Bread Omelette with Cheese', 129, 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=500&q=80']
  ]],
  ['Pav Bajji', [
    ['Mushroom Pav Bajji', 110, 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=500&q=80'],
    ['Paneer Pav Bajji', 129, 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=500&q=80'],
    ['Egg Pav Bajji', 110, 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=500&q=80'],
    ['Chicken Pav Bajji', 129, 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=500&q=80'],
    ['Egg Chicken Pav Bajji', 149, 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=500&q=80']
  ]],
  ['Starters', [
    ['Veg Fingers (6)', 79, 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=500&q=80'],
    ['Paneer Popcorn (100gms)', 119, 'https://images.unsplash.com/photo-1562967916-eb82221dfb36?auto=format&fit=crop&w=500&q=80'],
    ['Paneer Fingers (6)', 119, 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=500&q=80'],
    ['Cheese Corn Nuggets (6)', 99, 'https://images.unsplash.com/photo-1562967916-eb82221dfb36?auto=format&fit=crop&w=500&q=80'],
    ['Chicken Nuggets (6)', 89, 'https://images.unsplash.com/photo-1562967916-eb82221dfb36?auto=format&fit=crop&w=500&q=80'],
    ['Chicken Fingers (6)', 99, 'https://images.unsplash.com/photo-1562967916-eb82221dfb36?auto=format&fit=crop&w=500&q=80'],
    ['Chicken Cheese Balls (6)', 110, 'https://images.unsplash.com/photo-1562967916-eb82221dfb36?auto=format&fit=crop&w=500&q=80'],
    ['Chicken Popcorn (130gms)', 120, 'https://images.unsplash.com/photo-1562967916-eb82221dfb36?auto=format&fit=crop&w=500&q=80'],
    ['Crispy Chicken Lollipop (5)', 110, 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=500&q=80'],
    ['Chicken Lollipop (Kabab Style)', 110, 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=500&q=80'],
    ['Crispy Chicken Chips', 139, 'https://images.unsplash.com/photo-1562967916-eb82221dfb36?auto=format&fit=crop&w=500&q=80'],
    ['Crispy Chicken Fries', 139, 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=500&q=80']
  ]],
  ['Pizzas', [
    ['Cheese Blast', 99, 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=500&q=80'],
    ['Cheese & Corn Pizza', 120, 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=500&q=80'],
    ['Mushroom Pizza', 120, 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=500&q=80'],
    ['Paneer Pizza', 130, 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=500&q=80'],
    ['Paneer Corn Pizza', 140, 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=500&q=80'],
    ['Chicken Pizza', 140, 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=500&q=80'],
    ['Chicken Keema Pizza', 160, 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=500&q=80'],
    ['Chicken Corn Pizza', 150, 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=500&q=80']
  ]],
  ['Sandwich Menu', [
    ['Mix Veg Sandwich', 80, 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=500&q=80'],
    ['Corn & Cheese Sandwich', 90, 'https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=500&q=80'],
    ['Mushroom Sandwich', 100, 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=500&q=80'],
    ['Paneer Sandwich', 100, 'https://images.unsplash.com/photo-1528736235302-52922df5c122?auto=format&fit=crop&w=500&q=80'],
    ['Paneer Cheese Sandwich', 120, 'https://images.unsplash.com/photo-1481070414801-51fd732d7184?auto=format&fit=crop&w=500&q=80'],
    ['Chicken Sandwich', 120, 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=500&q=80'],
    ['Chicken & Cheese Sandwich', 140, 'https://images.unsplash.com/photo-1619096252214-ef06c45683e3?auto=format&fit=crop&w=500&q=80'],
    ['Crispy Chicken Sandwich', 120, 'https://images.unsplash.com/photo-1628191010210-a59de33e5941?auto=format&fit=crop&w=500&q=80']
  ]],
  ['Devil Eggs', [
    ['Crispy Devil Eggs - Green Masala (6)', 120, 'https://images.unsplash.com/photo-1582169296194-e4d644c48063?auto=format&fit=crop&w=500&q=80'],
    ['Crispy Devil Eggs - Thadoori Masala (6)', 120, 'https://images.unsplash.com/photo-1582169296194-e4d644c48063?auto=format&fit=crop&w=500&q=80']
  ]],
  ["Mojito's", [
    ['Lemon Sprite', 59, 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=500&q=80'],
    ['Lemon Mint', 69, 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=500&q=80'],
    ['Blue Coraco', 69, 'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=500&q=80'],
    ['Strawberry', 69, 'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=500&q=80'],
    ['Pinacola', 69, 'https://images.unsplash.com/photo-1546171753-97d7676e4602?auto=format&fit=crop&w=500&q=80']
  ]],
  ['Burger Combo', [
    ['Veg Burger + Fries + Mojito', 110, 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=500&q=80'],
    ['Veg Burger + Fries + Mojito + 2 Fingers', 170, 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=500&q=80'],
    ['Paneer Burger + Mojito', 160, 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80'],
    ['Egg Burger + Fries + Mojito', 150, 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=500&q=80'],
    ['Classic Chicken Burger + Fries + Mojito', 170, 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=500&q=80'],
    ['Crispy Chicken Burger + Mojito or Fries', 160, 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=500&q=80'],
    ['Crispy Chicken Burger + Fries + Mojito', 180, 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=500&q=80'],
    ['SPL Chicken Burger + Fries + Mojito', 230, 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=500&q=80']
  ]],
  ['Rolls Combo', [
    ['Veg Roll + Fries + Mojito + 2 Fingers', 170, 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=500&q=80'],
    ['Paneer Roll + Mojito or Fries', 160, 'https://images.unsplash.com/photo-1648896650464-1d61bb66ca07?auto=format&fit=crop&w=500&q=80'],
    ['Egg Roll + Fries + Mojito', 170, 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=500&q=80'],
    ['Crispy Chicken Roll + Fries or Mojito', 160, 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=500&q=80'],
    ['Crispy Chicken Roll + Fries + Mojito + 2pcs Chicken Lollipop', 210, 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=500&q=80'],
    ['Popcorn Chicken Roll + Mojito', 200, 'https://images.unsplash.com/photo-1648896650464-1d61bb66ca07?auto=format&fit=crop&w=500&q=80']
  ]],
  ['Sandwich Combo', [
    ['Mix Veg Sandwich + Fries + Mojito + Cheese & Corn Nuggets (3pcs)', 190, 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=500&q=80'],
    ['Corn & Cheese Sandwich + Fries + Mojito', 170, 'https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=500&q=80'],
    ['Chicken Sandwich + Fries + Mojito + 2 Fingers + 2 Lollipops', 240, 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=500&q=80'],
    ['Chicken Cheese Sandwich + Fries + Mojito + 2 Lollipops', 270, 'https://images.unsplash.com/photo-1628191010210-a59de33e5941?auto=format&fit=crop&w=500&q=80']
  ]]
];

const fallbackPlaceholder = 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=500&q=80';

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
  const categories = document.getElementById('categories');
  categories.innerHTML = menu.map(c => `<button class="chip" onclick="document.getElementById('c-${slug(c.name)}').scrollIntoView({behavior:'smooth'})">${c.name}</button>`).join('');

  let menuEl = '';
  menu.forEach(c => {
    menuEl += `<section class="category" id="c-${slug(c.name)}">
      <h2>${c.name}</h2>
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
    </section>`;
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

const whatsappButton = document.getElementById('whatsappButton');
const notesInput = document.getElementById('notesInput');

whatsappButton.onclick = async () => {
  let t = totals();
  if (!t.count) return alert('Please add at least one item.');
  
  let items = Object.entries(cart).map(([id, q]) => {
    let i = get(id);
    return { name: i.name, quantity: q, lineTotal: i.price * q };
  });

  let orderNum = Math.floor(1000 + Math.random() * 9000);
  let msg = `🍽️ *FOOD ON WHEELS*\n\n🔢 *ORDER #${orderNum}*\n📦 *Type:* ${orderType === 'dining' ? 'Dining' : 'Parcel'}\n\n`;
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

render();
update();
