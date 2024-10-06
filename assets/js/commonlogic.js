
//  Select increment and decrement button elements
const pumpkinincrement = document.querySelector('#pumpkinincrement');
const pumpkindecrement = document.querySelector('#pumpkindecrement');
const pumpkinquantity = document.querySelector('#pumpkinqty');

 const diwaliincrement = document.querySelector('#diwaliincrement');
 const diwalidecrement = document.querySelector('#diwalidecrement');
 const diwaliquantity = document.querySelector('#diwaliqty');

const vanillaincrement = document.querySelector('#vanillaincrement');
const vanilladecrement = document.querySelector('#vanilladecrement');
const vanillaquantity = document.querySelector('#vanillaqty');

const birthdayincrement = document.querySelector('#birthdayincrement');
const birthdaydecrement = document.querySelector('#birthdaydecrement');
const birthdayquantity = document.querySelector('#birthdayqty');

const lavenderincrement = document.querySelector('#lavenderincrement');
const lavenderdecrement = document.querySelector('#lavenderdecrement');
const lavenderquantity = document.querySelector('#lavenderqty');

const candlesetincrement = document.querySelector('#candlesetincrement');
const candlesetdecrement = document.querySelector('#candlesetdecrement');
const candlesetquantity = document.querySelector('#candlesetqty');



//saveToLocalStorage function
function updateIncrementQuantity(event){
    event.preventDefault();
    const clickedbutton = event.target;

    switch(clickedbutton.id){
        case "pumpkinincrement":{
            if (Number(pumpkinquantity.value)<99) {
                pumpkinquantity.value =  Number(pumpkinquantity.value) + 1;
            }
            break;
        }
        case "diwaliincrement":{
            if (Number(diwaliquantity.value)<99) {
                diwaliquantity.value =  Number(diwaliquantity.value) + 1;
            }
            break;
        }
        case "vanillaincrement":{
            if (Number(vanillaquantity.value)<99) {
                vanillaquantity.value =  Number(vanillaquantity.value) + 1;
            }
            break;
        }
        case "birthdayincrement":{
            if (Number(birthdayquantity.value)<99) {
                birthdayquantity.value =  Number(birthdayquantity.value) + 1;
            }
            break;
        }
        case "lavenderincrement":{
            if (Number(lavenderquantity.value)<99) {
                lavenderquantity.value =  Number(lavenderquantity.value) + 1;
            }
            break;
        }
        case "candlesetincrement":{
            if (Number(candlesetquantity.value)<99) {
                candlesetquantity.value =  Number(candlesetquantity.value) + 1;
            }
            break;
        }
    }
}

//saveToLocalStorage function
function updateDecrementQuantity(event){
    event.preventDefault();
    const clickedbutton = event.target;

    switch(clickedbutton.id){
        case "pumpkindecrement":{
            if (Number(pumpkinquantity.value)>=2) {
                pumpkinquantity.value =  Number(pumpkinquantity.value) - 1;
            }
            break;
        }
        case "diwalidecrement":{
            if (Number(diwaliquantity.value)>=2) {
                diwaliquantity.value =  Number(diwaliquantity.value) - 1;
            }
            break;
        }
        case "vanilladecrement":{
            if (Number(vanillaquantity.value)>=2) {
                vanillaquantity.value =  Number(vanillaquantity.value) - 1;
            }
            break;
        }
        case "birthdaydecrement":{
            if (Number(birthdayquantity.value)>=2) {
                birthdayquantity.value =  Number(birthdayquantity.value) - 1;
            }
            break;
        }
        case "lavenderdecrement":{
            if (Number(lavenderquantity.value)>=2) {
                lavenderquantity.value =  Number(lavenderquantity.value) - 1;
            }
            break;
        }
        case "candlesetdecrement":{
            if (Number(candlesetquantity.value)>=2) {
                candlesetquantity.value =  Number(candlesetquantity.value) - 1;
            }
            break;
        }
    }
}


//Tie buttons to Click Event
pumpkinincrement.addEventListener('click', updateIncrementQuantity);
pumpkindecrement.addEventListener('click', updateDecrementQuantity);

diwaliincrement.addEventListener('click', updateIncrementQuantity);
diwalidecrement.addEventListener('click', updateDecrementQuantity);

vanillaincrement.addEventListener('click', updateIncrementQuantity);
vanilladecrement.addEventListener('click', updateDecrementQuantity);

birthdayincrement.addEventListener('click', updateIncrementQuantity);
birthdaydecrement.addEventListener('click', updateDecrementQuantity);

lavenderincrement.addEventListener('click', updateIncrementQuantity);
lavenderdecrement.addEventListener('click', updateDecrementQuantity);

candlesetincrement.addEventListener('click', updateIncrementQuantity);
candlesetdecrement.addEventListener('click', updateDecrementQuantity);
