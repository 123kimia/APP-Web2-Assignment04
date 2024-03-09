// Creating an array with ten Hex colors as a list of strings
let bgColors = ["#FFFFFF", "#000000", "#FF5733", "#F08080", "#6495ED", "#40E0D0", "#DFFF00", "#DE3163", "#008000", "#800080"]
// An array of objects indicating six type of meals
let meals = [
    {
        name: "Pizza",
        src: "pizza.jpeg",
        price: 15
    },
    {
        name: "Pasta",
        src: "pasta.jpeg",
        price: 14
    },
    {
        name: "Kebab",
        src: "kebab.jpeg",
        price: 30

    },
    {
        name: "Hot dog",
        src: "hot dog.jpeg",
        price: 12
       
    },
    {
        name: "Salad",
        src: "salad.jpeg",
        price: 10
    },
    {
        name: "Spaghetti",
        src: "spaghetti.jpeg",
        price: 23
    },
    {
        name: "Mushroom",
        src: "mushroom.jpeg",
        price: 28
    }

];

let wallet = 100;


function generateRandomNumber(max) {
    console.log("Running generateRandomNumber function");

    const randomFinalNum = Math.floor(Math.random() * max);
    console.log(randomFinalNum);

    return randomFinalNum;
}


// Declaring generateBackgroundColor function
function generateBackgroundColor() {
  console.log("Running generateBackgroundColor function");
  const randomNumber = generateRandomNumber(bgColors.length);
  const randomColor = bgColors[randomNumber];
  document.body.style.backgroundColor = randomColor;

}
generateBackgroundColor();
generateMeals();

// Declaring generateMeals function
function generateMeals() {
  console.log("Running generateMeals function");
  const meal1Index = generateRandomNumber(meals.length);
  const meal1 = meals[meal1Index];

  // Populate the first meal using the first randomly generated number and Change the first meal's image, name, and price. 
  document.querySelector("#meal1 img").src = meal1.src;
  document.querySelector(".card-body .card-title").textContent = meal1.name;
  document.querySelector(".card-body .price").textContent = meal1.price;

  const meal2Index = generateRandomNumber(meals.length);
  const meal2 = meals[meal2Index];

  // Populate the second meal using the same method above
  document.querySelector("#meal2 img").src = meal2.src;
  document.querySelector("#meal2 .card-title").textContent = meal2.name;
  document.querySelector("#meal2 .price").textContent = meal2.price;

  const meal3Index = generateRandomNumber(meals.length);
  const meal3 = meals[meal3Index];

  // Populate and change the image, name and price of the third meal the same as the first and second meal
  document.querySelector("#meal3 img").src = meal3.src;
  document.querySelector("#meal3 .card-title").textContent = meal3.name;
  document.querySelector("#meal3 .price").textContent = meal3.price;


  

  // call the function calculateBill
  calculateBill();

}

// Declaring calculateBill function with parameter none
function calculateBill() {
  console.log("Running calculateBill function");
  const price1 = parseInt(document.querySelector("#meal1 .price").textContent);
  const price2 = parseInt(document.querySelector("#meal2 .price").textContent);
  const price3 = parseInt(document.querySelector("#meal3 .price").textContent);
  
  // Calculating the total of the prices
  const total = price1 + price2 + price3;
  document.querySelector("#total").textContent = total;

}

// Adding EventListener for the Generate Meals button
document.querySelector("#generate-button").addEventListener("click", generateMeals);

// Declaring purchase function with the parameter total
function purchase(total) {
    console.log("Running purchase function!");
    // Checking the funds in the user's wallet if they are enough or not
    if( total > wallet ) {
        alert("Sorry, you cannot purchase the meals!");
        document.querySelector("#message").classList.add("invisible");
    }
    else {
      wallet = wallet - total;
      document.querySelector("#wallet").textContent = wallet;
      generateMeals();
      generateBackgroundColor();
      document.querySelector("#message").classList.remove("invisible");
      document.querySelector("#purchase-cost").textContent = total;
     
    }
}

// Adding EventListener for the Purchase all meals button
document.querySelector("#purchase-button").addEventListener("click", function() {
    const total = parseInt(document.querySelector("#total").textContent); 
    purchase(total);
});

document.querySelector("#add-funds-button").onclick = function() {
    let response = prompt("How much funds would you like to put in?");
    addFunds(response);
}


// Declaring addFunds function with the parameter funds
function addFunds(funds) {
    funds = parseInt(funds);
    wallet = wallet + funds;
    document.querySelector("#wallet").textContent = wallet;

}

document.querySelector("#wallet").textContent = wallet;








