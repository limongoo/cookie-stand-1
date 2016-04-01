
var Store = function(minCust, maxCust, avgCookieSale, cookies, totalCookies, storeID) {
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.cookies = cookies;
  this.totalCookies = totalCookies;
  this.storeID = storeID;
  this.custPerHour = function() {
  return Math.random() * (this.maxCust - this.minCust) + this.minCust;
  }
};
//five objects representing each store
var pioneerSq = new Store(17, 88, 5.2, new Array(), 0, "pioneerSq");
var pdxAirport = new Store(6, 24, 2.2, new Array(), 0, "pdxAirport");
var washSq = new Store(11, 38, 1.9, new Array(), 0, "washSq");
var sellwood = new Store(20, 48, 3.3, new Array(), 0, "sellwood");
var pearl = new Store(3, 24, 2.6, new Array(), 0, "pearl");

//stores each object into one array
var stores = [pioneerSq, pdxAirport, washSq, sellwood, pearl];

//each hour the store is open
var hours = ["8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
var table = document.getElementById('tableBody');



//calculates # of cookies per hour sold per store
for(storeIndex = 0; storeIndex < stores.length; storeIndex++) {
  var store = stores[storeIndex];
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  cell1.innerHTML = store.storeID;

  for(hoursIndex = 0; hoursIndex < hours.length; hoursIndex++) {

    var cookiesSold = Math.round(store.avgCookieSale * store.custPerHour());
    store.cookies.push(cookiesSold); //calculates a random # of cookies sold/hr
    store.totalCookies += cookiesSold;
    cell2 = row.insertCell(1);
    cell2.innerHTML = cookiesSold;

  }
  cell11 = row.insertCell(11);
  cell11.innerHTML = store.totalCookies;
  // document.getElementById(store.storeID).innerHTML += "<li>Total: " + store.totalCookies + " sold today!";
} //prints total cookies sold daily
