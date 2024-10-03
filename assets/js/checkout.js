

//testing - candle array -> local storage, delete later

/*
let premade = [{"name": "spooky", "cost": 420, "quantity": 2, "description": "skeletal spine, smells like pomegranates"},
    {"name": "bloo", "cost":666.66, "quantity": 1, "description": "blue votive candle, smells of blueberries and bergamot"},
    {"name": "candle", "cost": 1999, "quantity": 45, "description": "tea candle, unscented"} 
];

const storeLocalStorage = function() {
localStorage.setItem('premade', JSON.stringify(premade))};

storeLocalStorage(premade);

/*
let custom = [{"cost":3333, "baseScent": "Vanilla", "quantity": 4, "choice1": "coconut", "choice2": "lavender"},
  {"cost":3.14, "baseScent": "Lavender", "quantity": 2, "choice1": "grass", "choice2": "cedarwood", "choice3": "moss"}


];


const customLocalStorage = function() {
  localStorage.setItem('custom', JSON.stringify(custom))};
  
  customLocalStorage(custom);
*/
  

//no items in cart, just provides error message, should provide link to home - maybe auto redirect?

//Yes I turned this whole page into a giant if else statement for an empty cart
// to get rid of a console error that only showed up when the cart was empty.
//the close bracket for the else statement is all the way down at the bottom.

const cartTable = document.querySelector('#cart-table');

function noCandles () {
  const noCandles = document.createElement('p');
  noCandles.textContent = `Your cart is empty!`;
 cartTable.appendChild(noCandles);

};


if (localStorage.getItem("premade") === null && localStorage.getItem("custom") === null){
noCandles();
} else {




//pull candle array(s?) from localstorage, JSON parse into something useful

cart = JSON.parse(localStorage.getItem("premade"));

custom = JSON.parse(localStorage.getItem("custom"));



//create table of candle description and cost
const createCart = function(candleArray) {

   // const cartTable = document.querySelector('#cart-table');

    for (let i = 0; i < candleArray.length; i++) {
        const currentCandle = candleArray[i];
    
        const newTableRow = document.createElement("tr");

        const quantityCell = document.createElement("td");
        quantityCell.textContent = currentCandle.quantity;
        newTableRow.append(quantityCell);
    
        const descriptionCell = document.createElement("td");

            description = ""
            

             if (currentCandle.name != null) {
              description = currentCandle.name + ": "
             };
             if (currentCandle.description != null) {
             description = description + " " + currentCandle.description
            };
             if(currentCandle.baseScent != null){
              description = description + "Base Scent: " + currentCandle.baseScent
             };
             if(currentCandle.choice1 != null){
              description = description + " Additional Scents: " + currentCandle.choice1
             };
             if(currentCandle.choice2 != null){
              description = description + ", " + currentCandle.choice2
             };
             if(currentCandle.choice3 != null){
              description = description + ", " + currentCandle.choice3
             };
          
             descriptionCell.textContent = description
            
          
            
        newTableRow.append(descriptionCell);
    
        const costCell = document.createElement("td");
        
        // Format the salary as currency
        costCell.textContent = currentCandle.cost.toLocaleString("en-US",{
          style:"currency",
          currency:"USD"
        });
    
        newTableRow.append(costCell);
    
        cartTable.append(newTableRow);
      }
}  

if (localStorage.getItem("premade") != null){
createCart(cart) };

if (localStorage.getItem("custom") != null){
createCart(custom) };

//finalCartTotal is a global variable that cartTotal function will write into
// will be reused later for checkout modal, declared here to store into
let finalCartTotal = 0


// append summarized total as final row in table

const cartTotal = function(array1, array2){
  const cartTable = document.querySelector('#cart-table')
  const newTableRow = document.createElement("tr");
  let total = 0

  for (let i = 0; i < array1.length; i++) {
    const currentCandle = array1[i];

    total = total + array1[i].cost

    

  };

  for (let i = 0; i < array2.length; i++) {
    const currentCandle = array1[i];

    total = total + array2[i].cost


  };


  
  // fills quantity and description table cells with "", would like to remove if time,
  // a quick google search didn't help - note to self ask Matteo

   const quantityCell = document.createElement("td");
   quantityCell.textContent = "";
   newTableRow.append(quantityCell);

  
   const descriptionCell = document.createElement("td");
            description = ""
            newTableRow.append(descriptionCell);

// end total line array fill

 const totalCell = document.createElement("td");

  newTableRow.append(totalCell);
  totalCell.textContent = finalCartTotal = total.toLocaleString("en-US",{
    style:"currency",
    currency:"USD"
  });


  newTableRow.append(totalCell);  
  cartTable.append(newTableRow);

};

//cartTotal expects two arrays, broke this into cases in case one of them DNE
//In hindsight there's definitely a more elegant way of handling this mess
//but I started writing with the plan of doing one array so sorry to anyone else reading this :(

if (localStorage.getItem("premade") === null){
  cartTotal(custom, 0) 
  } else if (localStorage.getItem("custom") === null){
    cartTotal(cart, 0)
  }else{
  cartTotal(cart, custom)};

//checkout button does something

const table = document.querySelector("#checkout");
const checkoutPopup = document.getElementById('checkoutPopup');
const totalDialog = document.getElementById('total');

  //function for what checkout button does
  function checkoutConfirm(event){

    totalDialog.innerText = finalCartTotal;
    
 
// checkout button modal functionality
// I should implement a choice in popup where one choice doesn't delete arrays,
//and doesn't redirect to index.html, didn't do it yet

 function closeModal(){
  localStorage.removeItem('premade');
  localStorage.removeItem('custom');
  window.location.href = 'index.html';
};


  checkoutPopup.showModal();
    const closeButton = document.getElementById("completeCheckout");
    closeButton.addEventListener("click", closeModal);
  };

table.addEventListener('click', checkoutConfirm);

//lol ending giant if else for empty cart, yolo
};