var timeArray = ['Location ', '6am ', '7am ', '8am ', '9am ', '10am ', '11am ', '12pm ', '1pm ', '2pm ', '3pm ', '4pm ', '5pm ', '6pm ', '7pm ', '8pm '];
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
    };//calculateHourlyCustomer
    console.log(this.arrayOfCustomersPerHour);
  };
  this.calculateHourlySales = function () {
    this.calculateHourlyCustomer(this.min, this.max);
    for (var i = 0; i < this.arrayOfCustomersPerHour.length; i++) {
      this.arrayOfHourlySales.push(Math.floor(this.arrayOfCustomersPerHour[i] * this.averageCookies));
      this.dailyTotal += this.arrayOfHourlySales[i];
    };
  };
  console.log('dailyTotal' + this.dailyTotal);

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
};// End of store construct.

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

function handleFormSubmit (event) {
  console.log(event);
  event.preventDefault();
  var location = event.target.location.value;
  var minimum = event.target.min.value;
  var maximum = event.target.max.value;
  var averageCookies = event.target.average.value;
  var newStore = new Store (location,minimum,maximum,averageCookies);
  event.target.location.value = null;
  event.target.min.value = null;
  event.target.max.value = null;
  event.target.average.value = null;
}

var newform = document.getElementById('newform');
newform.addEventListener('submit', handleFormSubmit);
headerRow ();
console.log(newform);
var pike = new Store('PikePlace',17,88,5.2);
var seaTac = new Store('SeaTac',6,24,1.2);
var southCenter = new Store('SouthCenter',11 ,38,1.9);
var bellSquare = new Store ('BellSquare',20,48,3.3);
var alki = new Store ('Alki',3,24,2.6);
