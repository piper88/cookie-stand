//first method takes in min and max number of customers, and returns an array with a random number of customers for each hour of the day
function calculateHourlyCustomers(minCustomer, maxCustomer) {
  var arrayOfCustomersPerHour = [];
  for (var i = 6; i < 21; i++) {
    arrayOfCustomersPerHour.push(Math.floor(Math.random() * (maxCustomer - minCustomer + 1) + minCustomer));
  }
  return arrayOfCustomersPerHour;
};

//second method takes in the array from the first method, and multiplies it by the average cookies per customer, and returns another array that has cookies per hour consumed.
function calculateHourlySales(arrayOfCustomersPerHour, avgCookiesPerCustomer) {
  var arrayOfHourlySales = [];
  for (var i = 0; i < arrayOfCustomersPerHour.length; i++) {
    arrayOfHourlySales.push(Math.floor(arrayOfCustomersPerHour[i] * avgCookiesPerCustomer));
  }
  return arrayOfHourlySales;
}

//third method takes in array from second method, and adds up all elements from array
function calculateDailySales(arrayOfHourlySales) {
  var dailyTotal = 0;
  for (var i = 0; i < arrayOfHourlySales.length; i++) {
    dailyTotal += arrayOfHourlySales[i];
  }
  return dailyTotal;
};

var arrayOfCustomersPerHour = calculateHourlyCustomers(2,88);
console.log(arrayOfCustomersPerHour);

var arrayOfHourlySales = calculateHourlySales(arrayOfCustomersPerHour, 1.52);
console.log(arrayOfHourlySales);

var dailyTotal = calculateDailySales(arrayOfHourlySales);
console.log(dailyTotal);
