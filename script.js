const WHATSAPP_NUMBER="919010185837";
const RESTAURANT_NAME="Food On Wheels";

const menuData=[
{name:"Burger Combo",items:[
["Veg Burger + Fries + Mojito",110],["Veg Burger + Fries + Mojito + 2 Fingers",170],["Paneer Burger + Mojito",160],["Egg Burger + Fries + Mojito",150],["Classic Chicken Burger + Fries + Mojito",170],["Crispy Chicken Burger + Mojito or Fries",160],["Crispy Chicken Burger + Fries + Mojito",180],["SPL Chicken Burger + Fries + Mojito",230]]},
{name:"Rolls Combo",items:[
["Veg Roll + Fries + Mojito + 2 Fingers",170],["Paneer Roll + Mojito or Fries",160],["Egg Roll + Fries + Mojito",170],["Crispy Chicken Roll + Fries or Mojito",160],["Crispy Chicken Roll + Fries + Mojito + 2pcs Chicken Lollipop",210],["Popcorn Chicken Roll + Mojito",200]]},
{name:"Sandwich Combo",items:[
["Mix Veg Sandwich + Fries + Mojito + Cheese & Corn Nuggets (3pcs)",190],["Corn & Cheese Sandwich + Fries + Mojito",170],["Chicken Sandwich + Fries + Mojito + 2 Fingers + 2 Lollipops",240],["Chicken Cheese Sandwich + Fries + Mojito + 2 Lollipops",270]]},
{name:"French Fries",items:[
["Mini Fries",49],["Salted Fries",70],["Peri Peri Fries",75],["Salted Cheesy Fries",90],["Peri Peri Cheesy Fries",99],["Paneer Loaded Fries",129],["Chicken Loaded Fries",139],["Cheesy Chicken Loaded Fries",149]]},
{name:"Burgers",items:[
["Veg Burger",70],["Paneer Burger",100],["Egg Burger",75],["Egg Chicken Burger",109],["Classic Chicken Burger",95],["Chicken Crispy Burger",110],["Popcorn Chicken Burger",100],["SPL Chicken Burger",120],["SPL Chicken Burger with Cheese",140],["Crispy No Bun Chicken Burger",179]]},
{name:"Rolls",items:[
["Veg Roll",70],["Paneer Roll",100],["Egg Roll",75],["Egg Chicken Roll",100],["Crispy Chicken Roll",110],["Popcorn Chicken Roll",100],["SPL Chicken Roll",120]]},
{name:"Bread Omelette",items:[
["Bread Omelette",70],["Bread Omelette with Cheese",89],["Egg Chicken Bread Omelette",110],["Egg Chicken Bread Omelette with Cheese",129]]},
{name:"Pav Bajji",items:[
["Mushroom Pav Bajji",110],["Paneer Pav Bajji",129],["Egg Pav Bajji",110],["Chicken Pav Bajji",129],["Egg Chicken Pav Bajji",149]]},
{name:"Starters",items:[
["Veg Fingers (6)",79],["Paneer Popcorn (100gms)",119],["Paneer Fingers (6)",119],["Cheese Corn Nuggets (6)",99],["Chicken Nuggets (6)",89],["Chicken Fingers (6)",99],["Chicken Cheese Balls (6)",110],["Chicken Popcorn (130gms)",120],["Crispy Chicken Lollipop (5)",110],["Chicken Lollipop (Kabab Style)",110],["Crispy Chicken Chips",139],["Crispy Chicken Fries",139]]},
{name:"Pizzas",items:[
["Cheese Blast",99],["Cheese & Corn Pizza",120],["Mushroom Pizza",120],["Paneer Pizza",130],["Paneer Corn Pizza",140],["Chicken Pizza",140],["Chicken Keema Pizza",160],["Chicken Corn Pizza",150]]},
{name:"Sandwich Menu",items:[
["Mix Veg Sandwich",80],["Corn & Cheese Sandwich",90],["Mushroom Sandwich",100],["Paneer Sandwich",100],["Paneer Cheese Sandwich",120],["Chicken Sandwich",120],["Chicken & Cheese Sandwich",140],["Crispy Chicken Sandwich",120]]},
{name:"Devil Eggs",items:[
["Crispy Devil Eggs - Green Masala (6)",120],["Crispy Devil Eggs - Thadoori Masala (6)",120]]},
{name:"Mojito's",items:[
["Lemon Sprite",59],["Lemon Mint",69],["Blue Coraco",69],["Strawberry",69],["Pinacola",69]]}
];

let cart={},orderType="dining";

const $=s=>document.querySelector(s);
const money=n=>Number(n).toLocaleString("en-IN");
const slug=s=>s.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");

function hashCode(str){
  let h=0;
  for(let i=0;i<str.length;i++) h=((h<<5)-h)+str.charCodeAt(i)|0;
  return Math.abs(h);
}

function imageKeyword(category,name){
  const n=name.toLowerCase();
  if(category.includes("pizza")) return n.includes("chicken")?"chicken pizza":n.includes("paneer")?"paneer pizza":n.includes("mushroom")?"mushroom pizza":"cheese pizza";
  if(category.includes("burger")) return n.includes("chicken")?"crispy chicken burger":n.includes("paneer")?"paneer burger":n.includes("egg")?"egg burger":"veg burger";
  if(category.includes("fries")) return n.includes("chicken")?"chicken loaded fries":n.includes("paneer")?"loaded fries":"french fries";
  if(category.includes("mojito")) return n.includes("lemon")?"lemon soda":n.includes("strawberry")?"strawberry mojito":n.includes("blue")?"blue cocktail":"fruit mojito";
  if(category.includes("lollipop")||n.includes("lollipop")) return "chicken lollipop";
  if(n.includes("roll")) return n.includes("chicken")?"chicken roll":n.includes("paneer")?"paneer roll":"veg roll";
  if(n.includes("sandwich")) return n.includes("chicken")?"chicken sandwich":n.includes("paneer")?"paneer sandwich":"sandwich";
  if(n.includes("omelette")||n.includes("egg")) return "omelette";
  if(n.includes("pav bajji")) return "pav bhaji";
  if(n.includes("nugget")||n.includes("finger")||n.includes("popcorn")||n.includes("chicken")) return "crispy chicken starter";
  return "indian street food";
}

function imageUrl(category,name){
  const keyword=encodeURIComponent(imageKeyword(category,name));
  const lock=1000+(hashCode(category+"|"+name)%9000);
  return `https://loremflickr.com/900/700/${keyword}?lock=${lock}`;
}

function fallbackEmoji(category,name){
  const n=name.toLowerCase();
  if(category==="Pizzas")return"🍕";
  if(category==="Mojito's")return"🥤";
  if(category==="French Fries")return"🍟";
  if(n.includes("burger"))return"🍔";
  if(n.includes("roll"))return"🌯";
  if(n.includes("sandwich"))return"🥪";
  if(n.includes("egg")||n.includes("omelette"))return"🍳";
  if(n.includes("pizza"))return"🍕";
  if(n.includes("lollipop"))return"🍗";
  if(n.includes("chicken"))return"🍗";
  return"🍽️";
}

function normalize(){
  return menuData.map(cat=>({...cat,items:cat.items.map(([name,price])=>({
    id:slug(cat.name+"-"+name),name,price,category:cat.name,
    diningOnly:cat.name.includes("Combo"),image:imageUrl(cat.name,name)
  }))}));
}
const menu=normalize();
function allItems(){return menu.flatMap(c=>c.items)}
function item(id){return allItems().find(i=>i.id===id)}

function renderAction(id){
  const el=document.querySelector(`[data-action="${id}"]`);
  if(!el)return;
  const q=cart[id]||0;
  el.innerHTML=q
    ?`<div class="qty"><button onclick="changeQty('${id}',-1)">−</button><b>${q}</b><button onclick="changeQty('${id}',1)">+</button></div>`
    :`<button class="add" onclick="changeQty('${id}',1)">ADD</button>`;
}

function renderMenu(){
  $("#categories").innerHTML=menu.map((c,i)=>`<button class="chip${i===0?" active":""}" data-chip="${slug(c.name)}" onclick="jump('${slug(c.name)}')">${c.name}</button>`).join("");
  $("#menu").innerHTML=menu.map(c=>`
    <section class="category" id="cat-${slug(c.name)}">
      <h2>${c.name}</h2>
      ${c.items.map(i=>`
        <div class="item">
          <img class="food-image" loading="lazy" src="${i.image}" alt="${i.name}" onerror="this.onerror=null;this.src='${fallbackDataUri(fallbackEmoji(c.name,i.name))}'">
          <div class="info"><h3>${i.name}${i.diningOnly?'<span class="tag">DINING ONLY</span>':''}</h3><div class="price">₹${money(i.price)}</div></div>
          <div class="action" data-action="${i.id}"></div>
        </div>`).join("")}
    </section>`).join("");
  allItems().forEach(i=>renderAction(i.id));
}

function fallbackDataUri(emoji){
  const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300"><rect width="100%" height="100%" fill="#f3eee8"/><text x="50%" y="55%" text-anchor="middle" font-size="105">${emoji}</text></svg>`;
  return "data:image/svg+xml;charset=UTF-8,"+encodeURIComponent(svg);
}

function jump(id){
  document.getElementById("cat-"+id)?.scrollIntoView({behavior:"smooth",block:"start"});
  document.querySelectorAll(".chip").forEach(c=>c.classList.toggle("active",c.dataset.chip===id));
}

function changeQty(id,n){
  const i=item(id);
  if(!i)return;
  if(orderType==="parcel"&&i.diningOnly&&n>0){
    showToast("That combo is available for dining only.");
    return;
  }
  cart[id]=Math.max(0,(cart[id]||0)+n);
  if(!cart[id])delete cart[id];
  renderAction(id);
  updateCart();
}

function totals(){
  let count=0,food=0;
  Object.entries(cart).forEach(([id,q])=>{
    const i=item(id);
    if(i){count+=q;food+=q*i.price}
  });
  const parcel=orderType==="parcel"&&count>0?10:0;
  return{count,food,parcel,total:food+parcel};
}

function updateCart(){
  const t=totals();
  $("#cartButton").hidden=!t.count;
  $("#cartCount").textContent=t.count;
  $("#cartItemsLabel").textContent=`${t.count} item${t.count===1?"":"s"}`;
  $("#cartTotal").textContent=money(t.total);
  $("#foodTotal").textContent=money(t.food);
  $("#modalTotal").textContent=money(t.total);
  $("#parcelLine").hidden=!t.parcel;
}

function renderCart(){
  const rows=Object.entries(cart);
  $("#cartItems").innerHTML=rows.length?rows.map(([id,q])=>{
    const i=item(id);
    return `<div class="cart-row">
      <div><b>${i.name}</b><small>₹${money(i.price)} × ${q}</small></div>
      <div class="row-actions"><button onclick="changeQty('${id}',-1)">−</button><b>${q}</b><button onclick="changeQty('${id}',1)">+</button></div>
    </div>`;
  }).join(""):`<div class="empty">Your cart is empty.</div>`;
}

function openCart(){renderCart();$("#cartModal").hidden=false;document.body.classList.add("locked")}
function closeCart(){$("#cartModal").hidden=true;document.body.classList.remove("locked")}

function setType(type){
  orderType=type;
  document.querySelectorAll(".type").forEach(b=>b.classList.toggle("active",b.dataset.type===type));
  $("#parcelNote").hidden=type!=="parcel";
  if(type==="parcel"){
    Object.keys(cart).forEach(id=>{if(item(id)?.diningOnly)delete cart[id]});
    allItems().forEach(i=>renderAction(i.id));
    if(Object.keys(cart).length===0)showToast("Parcel mode selected");
  }
  updateCart();renderCart();
}

async function sendWhatsApp(){
  const t=totals();
  if(!t.count){showToast("Add at least one item first.");return}

  const notes=$("#notesInput").value.trim();
  const items=Object.entries(cart).map(([id,q])=>{
    const i=item(id);
    return{name:i.name,quantity:q,unitPrice:i.price,lineTotal:i.price*q};
  });

  const button=$("#whatsappButton"),old=button.innerHTML;
  button.disabled=true;
  button.innerHTML="<span>Generating order…</span><span>⏳</span>";

  try{
    const response=await fetch("/api/order",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({
        orderType:orderType==="dining"?"Dining":"Parcel",
        items,foodTotal:t.food,parcelCharge:t.parcel,total:t.total,notes
      })
    });
    let data={};
    try{data=await response.json()}catch{}
    if(!response.ok||!data.orderNumber)throw new Error(data.error||"Could not create order");

    let msg=`🍽️ *FOOD ON WHEELS*\\n\\n🔢 *ORDER #${data.orderNumber}*\\n📦 Type: ${orderType==="dining"?"Dining":"Parcel"}\\n\\n`;
    items.forEach(i=>{msg+=`• ${i.name} × ${i.quantity} = ₹${i.lineTotal}\\n`});
    msg+=`\\n💰 Food total: ₹${t.food}`;
    if(t.parcel)msg+=`\\n📦 Parcel charge: ₹10`;
    msg+=`\\n💵 *TOTAL: ₹${t.total}*`;
    if(notes)msg+=`\\n\\n📝 *Special instructions:* ${notes}`;
    msg+=`\\n\\nPlease prepare the order.`;

    window.location.href=`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  }catch(err){
    console.error(err);
    showToast("Couldn't create order number. Please try again.");
    button.disabled=false;
    button.innerHTML=old;
  }
}

function showToast(text){
  const t=$("#toast");t.textContent=text;t.classList.add("show");
  clearTimeout(window.__toastTimer);
  window.__toastTimer=setTimeout(()=>t.classList.remove("show"),2200);
}

document.querySelectorAll(".type").forEach(b=>b.onclick=()=>setType(b.dataset.type));
$("#cartButton").onclick=openCart;
$("#closeCart").onclick=closeCart;
$("#whatsappButton").onclick=sendWhatsApp;
$("#startOrdering").onclick=()=>document.querySelector(".explore").scrollIntoView({behavior:"smooth"});
$("#cartModal").addEventListener("click",e=>{if(e.target.id==="cartModal")closeCart()});
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!$("#cartModal").hidden)closeCart()});

renderMenu();
updateCart();
