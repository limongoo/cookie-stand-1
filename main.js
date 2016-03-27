//five objects representing each store
var pioneerSq = {
  minCust: 17,
  maxCust: 88,
  avgCookieSale: 5.2,
  cookies: [],
  totalCookies: 0,
  storeID: "pioneerSq",
  custPerHour: function() {
    return Math.random() * (this.maxCust - this.minCust) + this.minCust;
  }
};
var pdxAirport = {
  minCust: 6,
  maxCust: 24,
  avgCookieSale: 1.2,
  cookies: [],
  totalCookies: 0,
  storeID: "pdxAirport",
  custPerHour: function() {
    return Math.random() * (this.maxCust - this.minCust) + this.minCust;
  }
};
var washSq = {
  minCust: 11,
  maxCust: 38,
  avgCookieSale: 1.9,
  cookies: [],
  totalCookies: 0,
  storeID: "washSq",
  custPerHour: function() {
    return Math.random() * (this.maxCust - this.minCust) + this.minCust;
  }
};
var sellwood = {
  minCust: 20,
  maxCust: 48,
  avgCookieSale: 3.3,
  cookies: [],
  totalCookies: 0,
  storeID: "sellwood",
  custPerHour: function() {
    return Math.random() * (this.maxCust - this.minCust) + this.minCust;
  }
};
var pearl = {
  minCust: 3,
  maxCust: 24,
  avgCookieSale: 2.6,
  cookies: [],
  totalCookies: 0,
  storeID: "pearl",
  custPerHour: function() {
    return Math.random() * (this.maxCust - this.minCust) + this.minCust;
  }
};

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
    document.getElementById(store.storeID).innerHTML += "<li>" + hours[hoursIndex] + ": " + cookies + " cookies sold. </li>" //prints the hour and cookies sold in that hr

  }
  document.getElementById(store.storeID).innerHTML += "<li>Total: " + store.totalCookies + " sold today!" //prints total cookies sold daily
}
