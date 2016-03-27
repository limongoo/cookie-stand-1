//five objects representing each store
var pioneerSq = {
  minCust: 17,
  maxCust: 88,
  avgCookieSale: 5.2,
  custPerHour: function() {
    return Math.floor(Math.random() * 10) + 1;
  }
};
var pdxAirport = {
  minCust: 6,
  maxCust: 24,
  avgCookieSale: 1.2,
  custPerHour: function() {
    return Math.floor(Math.random() * 10) + 1;
  }
};
var washSq = {
  minCust: 11,
  maxCust: 38,
  avgCookieSale: 1.9,
  custPerHour: function() {
    return Math.floor(Math.random() * 10) + 1;
  }
};
var sellwood = {
  minCust: 20,
  maxCust: 48,
  avgCookieSale: 3.3,
  custPerHour: function() {
    return Math.floor(Math.random() * 10) + 1;
  }
};
var pearl = {
  minCust: 3,
  maxCust: 24,
  avgCookieSale: 2.6,
  custPerHour: function() {
    return Math.floor(Math.random() * 10) + 1;
  }
};
var stores = [pioneerSq, pdxAirport, washSq, sellwood, pearl];
var pearlCookiesPerHour = [];
var pioneerSqCookiesPerHour = [];
var pdxAirportCookiesPerHour = [];
var washSqCookiesPerHour = [];
var sellwoodCookiesPerHour = [];

//calculates cookies purchased per hour for pearl
for(i=0;i<8;i++) {
  var pearlCookies = Math.round(pearl.avgCookieSale * pearl.custPerHour());
  pearlCookiesPerHour.push(pearlCookies);
  document.getElementById("pearl").innerHTML += "<li>" + i + "am: " + pearlCookies + "</li>";
}

//calculates cookies purchased per hour for pioneerSq
for(i=0;i<8;i++) {
  var pioneerSqCookies = Math.round(pioneerSq.avgCookieSale * pioneerSq.custPerHour());
  pioneerSqCookiesPerHour.push(pioneerSqCookies);
  document.getElementById("pioneerSq").innerHTML += "<li>" + i + "am: " + pioneerSqCookies + "</li>";
}

//calculates cookies purchased per hour for sellwood
for(i=0;i<8;i++) {
  var sellwoodCookies = Math.round(sellwood.avgCookieSale * sellwood.custPerHour());
  sellwoodCookiesPerHour.push(sellwoodCookies);
  document.getElementById("sellwood").innerHTML += "<li>" + i + "am: " + sellwoodCookies + "</li>";
}

//calculates cookies purchased per hour for pdxAirport
for(i=0;i<8;i++) {
  var pdxAirportCookies = Math.round(pdxAirport.avgCookieSale * pdxAirport.custPerHour());
  pdxAirportCookiesPerHour.push(pdxAirportCookies);
  document.getElementById("pdxAirport").innerHTML += "<li>" + i + "am: " + pdxAirportCookies + "</li>";
}

//calculates cookies purchased per hour for washSq
for(i=0;i<8;i++) {
  var washSqCookies = Math.round(washSq.avgCookieSale * washSq.custPerHour());
  washSqCookiesPerHour.push(washSqCookies);
  document.getElementById("washSq").innerHTML += "<li>" + i + "am: " + washSqCookies + "</li>";
}
