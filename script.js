const WHATSAPP_NUMBER="919999999999"; // CHANGE THIS to your WhatsApp number, country code included

const menuData=[
 {name:"Starters",items:[
  {id:"paneer-tikka",name:"Paneer Tikka",desc:"Smoky grilled cottage cheese with spices",price:220},
  {id:"chicken-65",name:"Chicken 65",desc:"Crispy spicy chicken bites",price:240},
  {id:"gobi-65",name:"Gobi 65",desc:"Crispy cauliflower tossed with spices",price:160}
 ]},
 {name:"Main Course",items:[
  {id:"chicken-biryani",name:"Chicken Biryani",desc:"Aromatic basmati rice with tender chicken",price:250},
  {id:"veg-biryani",name:"Veg Biryani",desc:"Fragrant rice with vegetables and herbs",price:190},
  {id:"paneer-butter",name:"Paneer Butter Masala",desc:"Paneer in rich tomato-butter gravy",price:220}
 ]},
 {name:"Breads",items:[
  {id:"butter-naan",name:"Butter Naan",desc:"Soft tandoori naan with butter",price:50},
  {id:"roti",name:"Tandoori Roti",desc:"Classic whole-wheat tandoor roti",price:35}
 ]},
 {name:"Drinks",items:[
  {id:"lime-soda",name:"Fresh Lime Soda",desc:"Refreshing sweet & salty lime soda",price:70},
  {id:"lassi",name:"Sweet Lassi",desc:"Chilled creamy yoghurt drink",price:90}
 ]}
];

const params=new URLSearchParams(location.search);
const table=params.get("table")||"";
document.querySelector("#tableBadge").textContent=table?`Table ${table}`:"Table not selected";
document.querySelector("#tableInput").value=table;

const cart={};
const money=n=>n.toLocaleString("en-IN");

function renderMenu(){
 document.querySelector("#menu").innerHTML=menuData.map(cat=>`
 <section class="category"><h2>${cat.name}</h2>${cat.items.map(item=>`
  <div class="item">
   <div><h3>${item.name}</h3><p>${item.desc}</p><div class="price">₹${money(item.price)}</div></div>
   <div id="action-${item.id}"></div>
  </div>`).join("")}</section>`).join("");
 menuData.flatMap(x=>x.items).forEach(renderAction);
}
function findItem(id){return menuData.flatMap(x=>x.items).find(x=>x.id===id)}
function renderAction(id){
 const el=document.querySelector("#action-"+id),q=cart[id]||0;
 el.innerHTML=q?`<div class="qty"><button onclick="change('${id}',-1)">−</button><b>${q}</b><button onclick="change('${id}',1)">+</button></div>`:`<button class="add" onclick="change('${id}',1)">ADD</button>`;
}
function change(id,n){cart[id]=Math.max(0,(cart[id]||0)+n);if(!cart[id])delete cart[id];renderAction(id);updateCart()}
function totals(){let count=0,total=0;Object.entries(cart).forEach(([id,q])=>{const i=findItem(id);count+=q;total+=q*i.price});return{count,total}}
function updateCart(){const t=totals();document.querySelector("#cartButton").hidden=!t.count;document.querySelector("#cartCount").textContent=t.count;document.querySelector("#cartTotal").textContent=money(t.total);document.querySelector("#modalTotal").textContent=money(t.total)}
function openCart(){
 const box=document.querySelector("#cartItems");
 box.innerHTML=Object.entries(cart).map(([id,q])=>{const i=findItem(id);return `<div class="cart-row"><div><b>${i.name}</b><small>₹${money(i.price)} × ${q}</small></div><strong>₹${money(i.price*q)}</strong></div>`}).join("");
 document.querySelector("#cartModal").hidden=false;
}
function closeCart(){document.querySelector("#cartModal").hidden=true}
function sendWhatsApp(){
 const t=totals(); if(!t.count)return;
 const table=document.querySelector("#tableInput").value.trim()||"Not provided";
 let msg=`🍽️ *NEW ORDER*%0A%0A🪑 Table: ${table}%0A%0A`;
 Object.entries(cart).forEach(([id,q])=>{const i=findItem(id);msg+=`• ${i.name} × ${q} = ₹${i.price*q}%0A`});
 msg+=`%0A💰 *Total: ₹${t.total}*%0A%0APlease prepare the order.`;
 window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`,"_blank");
}
document.querySelector("#cartButton").onclick=openCart;
document.querySelector("#closeCart").onclick=closeCart;
document.querySelector("#whatsappButton").onclick=sendWhatsApp;
renderMenu();updateCart();
