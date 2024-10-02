

//testing - candle array -> local storage, delete later
let premade = [{"cost": 420, "quantity": 2, "description": "skeletal spine, smells like pomegranates"},
    {"cost":666, "quantity": 1, "description": "blue votive candle, smells of blueberries and bergamot"},
    {"cost": 1999, "quantity": 45, "description": "tea candle, unscented"} 
];

const storeLocalStorage = function() {
localStorage.setItem('premade', JSON.stringify(premade))};

storeLocalStorage(premade);

let custom = [{"cost":3333, "baseScent": "Vanilla", "quantity": 4, "choice1": "coconut", "choice2": "lavender"},
  {"cost":3.14, "baseScent": "Lavender", "quantity": 2, "choice1": "grass", "choice2": "cedarwood", "choice3": "moss"}


];

const customLocalStorage = function() {
  localStorage.setItem('custom', JSON.stringify(custom))};
  
  customLocalStorage(custom);


//pull candle array(s?) from localstorage, JSON parse into something useful

cart = JSON.parse(localStorage.getItem("premade"));

custom = JSON.parse(localStorage.getItem("custom"));



//deal with custom candle array here



//create table of candle description and cost
const createCart = function(candleArray) {

    const cartTable = document.querySelector('#cart-table');

    for (let i = 0; i < candleArray.length; i++) {
        const currentCandle = candleArray[i];
    
        const newTableRow = document.createElement("tr");

        const quantityCell = document.createElement("td");
        quantityCell.textContent = currentCandle.quantity;
        newTableRow.append(quantityCell);
    
        const descriptionCell = document.createElement("td");

            description = ""
            
            if (currentCandle.name != null) {
              description = currentCandle.name
             };
             if (currentCandle.description != null) {
             description = " " + currentCandle.description
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


createCart(cart);
createCart(custom);

// append summarized total as final row in table

const cartTotal = function(array1, array2){
  for (let i = 0; i < array1.length; i++) {
    const currentCandle = array1[i];

    total = total + array1[i].cost

  }
}

//checkout button does something