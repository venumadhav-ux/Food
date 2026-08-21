const WHATSAPP_NUMBER = "919010185837";
const PARCEL_FEE_PER_ITEM = 10;
let orderType = "dining";
let cart = {};

const D = [
  ['Burgers', [['Veg Burger', 70], ['Paneer Burger', 100], ['Egg Burger', 75], ['Egg Chicken Burger', 109], ['Classic Chicken Burger', 95], ['Chicken Crispy Burger', 110], ['Popcorn Chicken Burger', 100], ['SPL Chicken Burger', 120], ['SPL Chicken Burger with Cheese', 140], ['Crispy No Bun Chicken Burger', 179]]],
  ['Rolls', [['Veg Roll', 70], ['Paneer Roll', 100], ['Egg Roll', 75], ['Egg Chicken Roll', 100], ['Crispy Chicken Roll', 110], ['Popcorn Chicken Roll', 100], ['SPL Chicken Roll', 120]]],
  ['French Fries', [['Mini Fries', 49], ['Salted Fries', 70], ['Peri Peri Fries', 75], ['Salted Cheesy Fries', 90], ['Peri Peri Cheesy Fries', 99], ['Paneer Loaded Fries', 129], ['Chicken Loaded Fries', 139], ['Cheesy Chicken Loaded Fries', 149]]],
  ['Bread Omelette', [['Bread Omelette', 70], ['Bread Omelette with Cheese', 89], ['Egg Chicken Bread Omelette', 110], ['Egg Chicken Bread Omelette with Cheese', 129]]],
  ['Pav Bajji', [['Mushroom Pav Bajji', 110], ['Paneer Pav Bajji', 129], ['Egg Pav Bajji', 110], ['Chicken Pav Bajji', 129], ['Egg Chicken Pav Bajji', 149]]],
  ['Starters', [['Veg Fingers (6)', 79], ['Paneer Popcorn (100gms)', 119], ['Paneer Fingers (6)', 119], ['Cheese Corn Nuggets (6)', 99], ['Chicken Nuggets (6)', 89], ['Chicken Fingers (6)', 99], ['Chicken Cheese Balls (6)', 110], ['Chicken Popcorn (130gms)', 120], ['Crispy Chicken Lollipop (5)', 110], ['Chicken Lollipop (Kabab Style)', 110], ['Crispy Chicken Chips', 139], ['Crispy Chicken Fries', 139]]],
  ['Pizzas', [['Cheese Blast', 99], ['Cheese & Corn Pizza', 120], ['Mushroom Pizza', 120], ['Paneer Pizza', 130], ['Paneer Corn Pizza', 140], ['Chicken Pizza', 140], ['Chicken Keema Pizza', 160], ['Chicken Corn Pizza', 150]]],
  ['Sandwich Menu', [['Mix Veg Sandwich', 80], ['Corn & Cheese Sandwich', 90], ['Mushroom Sandwich', 100], ['Paneer Sandwich', 100], ['Paneer Cheese Sandwich', 120], ['Chicken Sandwich', 120], ['Chicken & Cheese Sandwich', 140], ['Crispy Chicken Sandwich', 120]]],
  ['Devil Eggs', [['Crispy Devil Eggs - Green Masala (6)', 120], ['Crispy Devil Eggs - Thadoori Masala (6)', 120]]],
  ["Mojito's", [['Lemon Sprite', 59], ['Lemon Mint', 69], ['Blue Coraco', 69], ['Strawberry', 69], ['Pinacola', 69]]],
  ['Burger Combo', [['Veg Burger + Fries + Mojito', 110], ['Veg Burger + Fries + Mojito + 2 Fingers', 170], ['Paneer Burger + Mojito', 160], ['Egg Burger + Fries + Mojito', 150], ['Classic Chicken Burger + Fries + Mojito', 170], ['Crispy Chicken Burger + Mojito or Fries', 160], ['Crispy Chicken Burger + Fries + Mojito', 180], ['SPL Chicken Burger + Fries + Mojito', 230]]],
  ['Rolls Combo', [['Veg Roll + Fries + Mojito + 2 Fingers', 170], ['Paneer Roll + Mojito or Fries', 160], ['Egg Roll + Fries + Mojito', 170], ['Crispy Chicken Roll + Fries or Mojito', 160], ['Crispy Chicken Roll + Fries + Mojito + 2pcs Chicken Lollipop', 210], ['Popcorn Chicken Roll + Mojito', 200]]],
  ['Sandwich Combo', [['Mix Veg Sandwich + Fries + Mojito + Cheese & Corn Nuggets (3pcs)', 190], ['Corn & Cheese Sandwich + Fries + Mojito', 170], ['Chicken Sandwich + Fries + Mojito + 2 Fingers + 2 Lollipops', 240], ['Chicken Cheese Sandwich + Fries + Mojito + 2 Lollipops', 270]]]
];

const imgs = [
  'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1562967916-eb82221dfb36?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1543353071-10c8ba85a904?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=500&q=80'
];

let n = 0;
const slug = s => s.toLowerCase().replace(/[^a-z0-9]+/g, '-');
const money = n => Number(n).toLocaleString('en-IN');

const menu = D.map(c => ({
  name: c[0],
  items: c[1].map(x => ({
    id: slug(c[0] + '-' + x[0]),
    name: x[0],
    price: x[1],
    diningOnly: c[0].includes('Combo'),
    image: imgs[n++ % imgs.length]
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
          <img class="food-img" src="${i.image}" alt="${i.name}" loading="lazy">
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
