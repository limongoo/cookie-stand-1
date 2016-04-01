
var Store = function(minCust, maxCust, avgCookieSale, cookies, totalCookies, storeID) {
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.cookies = cookies;
  this.totalCookies = totalCookies;
  this.storeID = storeID;
  this.custPerHour = function() {
  return Math.random() * (this.maxCust - this.minCust) + this.minCust;
};
//five objects representing each store
var pioneerSq = new Store(17, 88, 5.2, [], 0, "pioneerSq");
var pdxAirport = new Store(6, 24, 2.2, [], 0, "pdxAirport");
var washSq = new Store(11, 38, 1.9, [], 0, "washSq");
var sellwood = new Store(20, 48, 3.3, [], 0, "sellwood");
var pearl = new Store(3, 24, 2.6, [], 0, "pearl");

//stores each object into one array
var stores = [pioneerSq, pdxAirport, washSq, sellwood, pearl];

//each hour the store is open
var hours = ["8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];

//calculates # of cookies per hour sold per store
for(storeIndex = 0; storeIndex < stores.length; storeIndex++) {
  for(hoursIndex = 0; hoursIndex < hours.length; hoursIndex++) {
    var store = stores[storeIndex];
    var cookies = Math.round(store.avgCookieSale * store.custPerHour());
    store.cookies.push(cookies); //calculates a random # of cookies sold/hr
    store.totalCookies += cookies;
    var cell = document.getElementById("tableCell");
    var list = document.createElement("ul");
    list.setAttribute("id", store.storeID);
    cell.appendChild(list);
    document.getElementById(store.storeID).innerHTML += "<li>" + hours[hoursIndex] + ": " + cookies + " cookies sold. </li>";//prints list of cookies sold
  }
  document.getElementById(store.storeID).innerHTML += "<li>Total: " + store.totalCookies + " sold today!";
} //prints total cookies sold daily
