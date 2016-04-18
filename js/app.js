var PikePlace = {
  //properties of the object
  minCustomer: 17,
  maxCustomer: 88,
  avgCookiesPerCustomer: 5.2,
  arrayOfCustomersPerHour: [],
  arrayOfHourlySales: [],
  dailyTotal: 0,
  timeArray: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '],

  //first method takes in min and max number of customers, and returns an array with a random number of customers for each hour of the day
  calculateHourlyCustomers: function(min, max) {
    for (var i = 6; i < 21; i++) {
      this.arrayOfCustomersPerHour.push(Math.floor(Math.random() * (max - min + 1) + min));
    }
  },

  //second method takes in the array from the first method, and multiplies it by the average cookies per customer, and returns another array that has cookies per hour consumed.
  calculateHourlySales: function() {
    this.calculateHourlyCustomers(this.minCustomer, this.maxCustomer);
    for (var i = 0; i < this.arrayOfCustomersPerHour.length; i++) {
      this.arrayOfHourlySales.push(Math.floor(this.arrayOfCustomersPerHour[i] * this.avgCookiesPerCustomer));
      this.dailyTotal += this.arrayOfHourlySales[i];
    }
    console.log(this.dailyTotal);
  },

  renderToPage: function(arraySales) {
    this.calculateHourlySales();
    var parentEl = document.getElementById('pikeplace'); //could have outside of for loop
    for (var i = 0; i < this.arrayOfHourlySales.length; i++) {
      var listEl = document.createElement('li');
      listEl.textContent = this.timeArray[i] + this.arrayOfHourlySales[i] + ' Cookies';
      parentEl.appendChild(listEl);

    } //end of for loop
    var totalEl = document.createElement('li');
    totalEl.textContent = 'Total: ' + this.dailyTotal + ' cookiess';
    parentEl.appendChild(totalEl);
  } //end of rendertoPage method
};
