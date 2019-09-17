//variables

const cartBtn = document.querySelector(".cart-btn");
const closeCartBtn = document.querySelector(".close-cart");
const clearCartBtn = document.querySelector(".clear-cart");
const cartDOM = document.querySelector(".cart");
const cartOverlay = document.querySelector(".cart-overlay");
const cartItems = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total");
const cartContent = document.querySelector(".cart-content");
const productsDOM = document.querySelector(".products-center");

//cart
let cart =[];
//buttons
let buttonsDOM = [];

//getting the products
class Products{
  async  getProducts(){
      try {
       let result = await fetch("products.json");
       let data = await result.json();
       let products = data.items;
        products = products.map(item =>{
         const{title,price} = item.fields;
         const {id} = item.sys
         const imsge = item.fields.image.fields.file.url;
         return {title,price,id,imsge}
        })
        return products
      } catch (error) {
          console.log(error);
  
}
}
}


//dispalay products
class UI{
displayProducts(products){ 
 let result = "";
 products.forEach(product =>{
  result +='
            <article class="product">
                <div class="img-container">
                    <img src=${product.image} alt="product" classs="product-img">
                    <button class="bag-btn" data-id=${product.id}>
                <i class="fas fa-shopping-cart"></i>
                Add to bag
                </button>
                </div>
                <h3>${product.title}</h3>
                <h4>$10</h4>
            </article>
            
  ';
 });

 productsDOM.innerHTML = result;

}
getbagButtons(){ 
 const buttons = {...document.querySelectorAll(".bag-btn")
 ];
 buttonsDOM = buttons;
 buttons.forEach(button) =>{
  let id =button.dataset.id;
 let inCart = cart.find(item => item.id ===id);
 if(inCart){
  button.innerText ="In Cart";
  button.disabled =true;
  
 }
  button.addEventListener("click",event =>{
   event.target.innerText = "in Cart";
   event.target.disabled = true;
   
   //get product from products
   let cartItem = Storage.getProduct(id);
   console.log(cartItem)
   //add product to the car
   cart = [...cart, cartItem];
  
   //save cart in local storage
   Storage.saveCart(cart)
   //set cart values
   this.setCartValues(cart);
   //display cart items
   
   //show the cart
   
  });
 
 });
 }
}
setCartValues(cart){
 let tempTotal =0;
 let itemsTotal -0;
}
}
//local storage
class Storage{
static saveProducts(products){
localStorage.setItem("products",Json.stringify(produsts));
}
static getProduct(id){

document.addEventListener("DOMContentLoaded",()=>{

const ui = new UI();
const products = new Products(id){
 let products = JSON.parse(localStoage.getItem("products"));
 return products.find(product => product.id ===id)
}
}
//get all products
products.getProducts().then(products=> ui.logdisplayProducts(products));
Storage.saveProducts(products)
});
