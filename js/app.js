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
      listEl.textContent = this.timeArray[i] + this.arrayOfHourlySales[i] + ' cookies';
      parentEl.appendChild(listEl);

    } //end of for loop
    var totalEl = document.createElement('li');
    totalEl.textContent = 'Total: ' + this.dailyTotal + ' cookies';
    parentEl.appendChild(totalEl);
  } //end of rendertoPage method
};

var Seatac = {
  //properties of the object
  minCustomer: 6,
  maxCustomer: 24,
  avgCookiesPerCustomer: 1.2,
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
    var parentEl = document.getElementById('seatac'); //could have outside of for loop
    for (var i = 0; i < this.arrayOfHourlySales.length; i++) {
      var listEl = document.createElement('li');
      listEl.textContent = this.timeArray[i] + this.arrayOfHourlySales[i] + ' cookies';
      parentEl.appendChild(listEl);

    } //end of for loop
    var totalEl = document.createElement('li');
    totalEl.textContent = 'Total: ' + this.dailyTotal + ' cookies';
    parentEl.appendChild(totalEl);
  } //end of rendertoPage method
};

var Southcenter = {
  //properties of the object
  minCustomer: 11,
  maxCustomer: 38,
  avgCookiesPerCustomer: 1.9,
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
    var parentEl = document.getElementById('southcenter'); //could have outside of for loop
    for (var i = 0; i < this.arrayOfHourlySales.length; i++) {
      var listEl = document.createElement('li');
      listEl.textContent = this.timeArray[i] + this.arrayOfHourlySales[i] + ' cookies';
      parentEl.appendChild(listEl);

    } //end of for loop
    var totalEl = document.createElement('li');
    totalEl.textContent = 'Total: ' + this.dailyTotal + ' cookies';
    parentEl.appendChild(totalEl);
  } //end of rendertoPage method
};

var BellevueSquare = {
  //properties of the object
  minCustomer: 20,
  maxCustomer: 48,
  avgCookiesPerCustomer: 3.3,
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
    var parentEl = document.getElementById('bellevue'); //could have outside of for loop
    for (var i = 0; i < this.arrayOfHourlySales.length; i++) {
      var listEl = document.createElement('li');
      listEl.textContent = this.timeArray[i] + this.arrayOfHourlySales[i] + ' cookies';
      parentEl.appendChild(listEl);

    } //end of for loop
    var totalEl = document.createElement('li');
    totalEl.textContent = 'Total: ' + this.dailyTotal + ' cookies';
    parentEl.appendChild(totalEl);
  } //end of rendertoPage method
};

var Alki = {
  //properties of the object
  minCustomer: 3,
  maxCustomer: 24,
  avgCookiesPerCustomer: 2.6,
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
    var parentEl = document.getElementById('alki'); //could have outside of for loop
    for (var i = 0; i < this.arrayOfHourlySales.length; i++) {
      var listEl = document.createElement('li');
      listEl.textContent = this.timeArray[i] + this.arrayOfHourlySales[i] + ' cookies';
      parentEl.appendChild(listEl);

    } //end of for loop
    var totalEl = document.createElement('li');
    totalEl.textContent = 'Total: ' + this.dailyTotal + ' cookies';
    parentEl.appendChild(totalEl);
  } //end of rendertoPage method
};

PikePlace.renderToPage();
Seatac.renderToPage();
Southcenter.renderToPage();
BellevueSquare.renderToPage();
Alki.renderToPage();
