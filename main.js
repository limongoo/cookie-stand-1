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
//stores each object into one array
var stores = [pioneerSq, pdxAirport, washSq, sellwood, pearl];
//stores the simulted amounts of cookies sold an hour for each store
var pearlCookiesPerHour = [];
var pioneerSqCookiesPerHour = [];
var pdxAirportCookiesPerHour = [];
var washSqCookiesPerHour = [];
var sellwoodCookiesPerHour = [];
//total number of cookies sold a day
var pearlCookiesTotal = 0;
var pioneerSqCookiesTotal = 0;
var pdxAirportCookiesTotal = 0;
var washSqCookiesTotal = 0;
var sellwoodCookiesTotal = 0;
//each of the store is open
var hours = ["8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "Total"];

//calculates cookies purchased per hour for each location and prints it to the //page in an unordered list
for(i=0;i<10;i++) {
  var pearlCookies = Math.round(pearl.avgCookieSale * pearl.custPerHour());
  var pioneerSqCookies = Math.round(pioneerSq.avgCookieSale * pioneerSq.custPerHour());
  var sellwoodCookies = Math.round(sellwood.avgCookieSale * sellwood.custPerHour());
  var pdxAirportCookies = Math.round(pdxAirport.avgCookieSale * pdxAirport.custPerHour());
  var washSqCookies = Math.round(washSq.avgCookieSale * washSq.custPerHour());


  pearlCookiesPerHour.push(pearlCookies);
  pioneerSqCookiesPerHour.push(pioneerSqCookies);
  sellwoodCookiesPerHour.push(sellwoodCookies);
  pdxAirportCookiesPerHour.push(pdxAirportCookies);
  washSqCookiesPerHour.push(washSqCookies);

  pearlCookiesTotal = pearlCookiesTotal + pearlCookiesPerHour[i];
  pioneerSqCookiesTotal = pioneerSqCookiesTotal + pioneerSqCookiesPerHour[i];
  sellwoodCookiesTotal = sellwoodCookiesTotal + sellwoodCookiesPerHour[i];
  pdxAirportCookiesTotal = pdxAirportCookiesTotal + pdxAirportCookiesPerHour[i];
  washSqCookiesTotal = washSqCookiesTotal + washSqCookiesPerHour[i];

  document.getElementById("pearl").innerHTML += "<li>" + hours[i] + ": " + pearlCookiesPerHour[i] + " cookies sold."
  document.getElementById("pioneerSq").innerHTML += "<li>" + hours[i] + ": " + pioneerSqCookiesPerHour[i] + " cookies sold."
  document.getElementById("sellwood").innerHTML += "<li>" + hours[i] + ": " + sellwoodCookiesPerHour[i] + " cookies sold."
  document.getElementById("pdxAirport").innerHTML += "<li>" + hours[i] + ": " + pdxAirportCookiesPerHour[i] + " cookies sold."
  document.getElementById("washSq").innerHTML += "<li>" + hours[i] + ": " + washSqCookiesPerHour[i] + " cookies sold."
}

document.getElementById("pearl").innerHTML += "<li>Total: " + pearlCookiesTotal + " sold today!"
document.getElementById("pioneerSq").innerHTML += "<li>Total: " + pioneerSqCookiesTotal + " sold today!"
document.getElementById("sellwood").innerHTML += "<li>Total: " + sellwoodCookiesTotal + " sold today!"
document.getElementById("pdxAirport").innerHTML += "<li>Total: " + pdxAirportCookiesTotal + " sold today!"
document.getElementById("washSq").innerHTML += "<li>Total: " + washSqCookiesTotal + " sold today!" 
