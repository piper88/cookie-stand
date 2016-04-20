var timeArray = ['Location ', '6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '];
var allStores = [];

function Store(name, min, max, averageCookies) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.averageCookies = averageCookies;
  this.arrayOfCustomersPerHour = [];
  this.arrayOfHourlySales = [];
  this.dailyTotal = 0;
  this.calculateHourlyCustomer = function (min, max) {
    for (var i = 0; i < timeArray.length - 1; i++) {
      this.arrayOfCustomersPerHour.push(Math.floor(Math.random() * (max - min + 1) + min));
    };
  };
  this.calculateHourlySales = function () {
    this.calculateHourlyCustomer(this.min, this.max);
    for (var i = 0; i < this.arrayOfCustomersPerHour.length; i++) {
      this.arrayOfHourlySales.push(Math.floor(this.arrayOfCustomersPerHour[i] * this.averageCookies));
      this.dailyTotal += this.arrayOfHourlySales[i];
    };
  };
  console.log(this.dailyTotal);

  this.calculateHourlySales();
  allStores.push(this);

  this.renderStore = function () {
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    tr.appendChild(td);
    td.textContent = this.name;
    var parentEl = document.getElementById('dataTable');
    for (i = 0; i < this.arrayOfHourlySales.length; i++){
      var td = document.createElement('td');
      td.textContent = this.arrayOfHourlySales[i];
      tr.appendChild(td);
    };
    td.textContent = this.dailyTotal;
    parentEl.appendChild(tr);
  };
  this.renderStore();
};
function headerRow () {
  // var tr = document.createElement('tr');
  var parentEl = document.getElementById('dataTable');
  for (i = 0; i < timeArray.length; i++ ){
    var th = document.createElement('th');
    th.textContent = timeArray[i];
    parentEl.appendChild(th);
  }
  var totalEl = document.createElement('th');
  th.textContent = (' Total ');
  parentEl.appendChild(th);
};

headerRow ();
var pike = new Store('PikePlace',17,88,5.2);
var seaTac = new Store('SeaTac',6,24,1.2);
var southCenter = new Store('SountCenter',11 ,38,1.9);
var bellSquare = new Store ('BellSquare',20,48,3.3);
var alki = new Store ('Alki',3,24,2.6);

//second method takes in the array from the first method, and multiplies it by the average cookies per customer, and returns another array that has cookies per hour consumed.

// function renderToPage (arraySales) {
// this.calculateHourlySales();
//   var parentEl = document.getElementById('alki'); //could have outside of for loop
//   for (var i = 0; i < this.arrayOfHourlySales.length; i++) {
//     var listEl = document.createElement('li');
//     listEl.textContent = this.timeArray[i] + this.arrayOfHourlySales[i] + ' cookies';
//     parentEl.appendChild(listEl);
//   }; //end of for loop
//   var totalEl = document.createElement('li');
//   totalEl.textContent = 'Total: ' + this.dailyTotal + ' cookies';
//   parentEl.appendChild(totalEl);
// } //end of rendertoPage method
