/*
About the Little Lemon receipt maker exercise
In this exercise, you will work with some data provided as an array of objects, listing information about dishes available in the Little Lemon restaurant.

You will need to write a function declaration which will be able to do two things:

If the function is called with the argument true, it will output the names of the dishes and calculate their final price (including 20% tax)

If the function is called with the argument false, it will output the names of the dishes and give their prices without the additional tax

The expected outcome is that all the dishes' names and prices will be shown in the console output.

The text below shows the output that your code should produce:

Prices with 20% tax:
Dish: Italian pasta Price (incl.tax): $ 11.46
Dish: Rice with veggies Price (incl.tax): $ 10.38
Dish: Chicken with potatoes Price (incl.tax): $ 18.66
Dish: Vegetarian Pizza Price (incl.tax): $ 7.74

Prices without tax:
Dish: Italian pasta Price (incl.tax): $ 9.55
Dish: Rice with veggies Price (incl.tax): $ 8.65
Dish: Chicken with potatoes Price (incl.tax): $ 15.55
Dish: Vegetarian Pizza Price (incl.tax): $ 6.45



*/

// Data: Array of objects representing dishes with their prices
const dishes = [
    { name: 'Italian pasta', price: 9.55 },
    { name: 'Rice with veggies', price: 8.65 },
    { name: 'Chicken with potatoes', price: 15.55 },
    { name: 'Vegetarian Pizza', price: 6.45 }
  ];
  
  // Function to generate receipt based on whether tax is included or not
  function generateReceipt(includeTax) {
    console.log(includeTax ? "Prices with 20% tax:" : "Prices without tax:");
    
    dishes.forEach(dish => {
      if (includeTax) {
        // Calculate price including 20% tax
        const priceWithTax = dish.price * 1.20;
        console.log(`Dish: ${dish.name} Price (incl. tax): $ ${priceWithTax.toFixed(2)}`);
      } else {
        // Display price without tax
        console.log(`Dish: ${dish.name} Price (excl. tax): $ ${dish.price.toFixed(2)}`);
      }
    });
  }
  
  // Test the function
  generateReceipt(true);  // Output with tax
  console.log()
  generateReceipt(false); // Output without tax
  