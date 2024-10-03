//declare array to store premade cart data
let premadecandlesDataArray =[];

//Declare and retrieve values from premadecandles page
const pumpkinname = document.querySelector('#pumpkinname');
const pumpkindesc = document.querySelector('#pumpkindesc');
const pumpkinprice = document.querySelector('#pumpkinprice');
const pumpkinqty = document.querySelector('#pumpkinqty');

//Declare and retrieve values from premadecandles page
const diwaliname = document.querySelector('#diwaliname');
const diwalidesc = document.querySelector('#diwalidesc');
const diwaliprice = document.querySelector('#diwaliprice');
const diwaliqty = document.querySelector('#diwaliqty');

//Declare and retrieve values from premadecandles page
const vanillaname = document.querySelector('#vanillaname');
const vanilladesc = document.querySelector('#vanilladesc');
const vanillaprice = document.querySelector('#vanillaprice');
const vanillaqty = document.querySelector('#vanillaqty');

//Declare and retrieve values from premadecandles page
const birthdayname = document.querySelector('#birthdayname');
const birthdaydesc = document.querySelector('#birthdaydesc');
const birthdayprice = document.querySelector('#birthdayprice');
const birthdayqty = document.querySelector('#birthdayqty');

//Declare and retrieve values from premadecandles page
const lavendername = document.querySelector('#lavendername');
const lavenderdesc = document.querySelector('#lavenderdesc');
const lavenderprice = document.querySelector('#lavenderprice');
const lavenderqty = document.querySelector('#lavenderqty');

//Declare and retrieve values from premadecandles page
const candlesetname = document.querySelector('#candlesetname');
const candlesetdesc = document.querySelector('#candlesetdesc');
const candlesetprice = document.querySelector('#candlesetprice');
const candlesetqty = document.querySelector('#candlesetqty');


const pumpkinButton = document.querySelector('#pumpkinadd');
const diwaliButton = document.querySelector('#diwaliadd');
const vanillaButton = document.querySelector('#vanillaadd');
const birthdayButton = document.querySelector('#birthdayadd');
const lavenderButton = document.querySelector('#lavenderadd');
const candlesetButton = document.querySelector('#candlesetadd');

function storeLocalStorage(premadecandlesObject) {
    premadecandlesDataArray.push({
         name: premadecandlesObject.name,
         description: premadecandlesObject.description,
         cost:premadecandlesObject.cost,
         quantity:premadecandlesObject.quantity
         }
     );
     //Store in Local Storage
     localStorage.setItem('premade',JSON.stringify(premadecandlesDataArray));
     return;
   }
 

//saveToLocalStorage function
function saveToLocalStorage(event){

    event.preventDefault();
    const clickedbutton = event.target;

    //local variables to store data temporarily
    let name="";
    let description="";
    let cost=0;
    let qty=0;

    switch(clickedbutton.id){
        case "pumpkinadd":{
            name = pumpkinname.textContent;
            description = pumpkindesc.textContent;
            cost = pumpkinprice.textContent;
            qty = pumpkinqty.value;
            break;
        }
        case "diwaliadd":{
            name = diwaliname.textContent;
            description = diwalidesc.textContent;
            cost = diwaliprice.textContent;
            qty = diwaliqty.value;
            break;
        }
        case "vanillaadd":{
            name = vanillaname.textContent;
            description = vanilladesc.textContent;
            cost = vanillaprice.textContent;
            qty = vanillaqty.value;
            break;
        }
        case "birthdayadd":{
            name = birthdayname.textContent;
            description = birthdaydesc.textContent;
            cost = birthdayprice.textContent;
            qty = birthdayqty.value;
            break;
        }
        case "lavenderadd":{
            name = lavendername.textContent;
            description = lavenderdesc.textContent;
            cost = lavenderprice.textContent;
            qty = lavenderqty.value;
            break;
        }
        case "candlesetadd":{
            name = candlesetname.textContent;
            description = candlesetdesc.textContent;
            cost = candlesetprice.textContent;
            qty = candlesetqty.value;
            break;
        }
    }
    
    const premadecandlesObject = {
        name: name,
        description: description,
        cost: Number(cost.slice(1)),
        quantity: Number(qty)
    };
    

    //Call function to add the blog object data into array in Local Storage
    storeLocalStorage(premadecandlesObject);

}

//Tie buttons to Click Event
pumpkinButton.addEventListener('click', saveToLocalStorage);
diwaliButton.addEventListener('click', saveToLocalStorage);
vanillaButton.addEventListener('click', saveToLocalStorage);
birthdayButton.addEventListener('click', saveToLocalStorage);
lavenderButton.addEventListener('click', saveToLocalStorage);
candlesetButton.addEventListener('click', saveToLocalStorage);


