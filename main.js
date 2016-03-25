function cookiesPerstore () {
    for (i=0;i<stores.length;i++){
     var cstore = stores[i].aveCookieSale * stores[i].custPerHour;
     for (i=0;i<"8";i++){
      document.write(cstore[i]);
    }
  }
}

var pioneerSq = {
  minCust: 17,
  maxCust: 88,
  aveCookieSale: 5.2,
  custPerHour: function() {
    Math.floor(Math.random() * 10) + 1;
  }
};
var pdxAirport = {
  minCust: 6,
  maxCust: 24,
  aveCookieSale: 1.2,
  custPerHour: function() {
    Math.floor(Math.random() * 10) + 1;
  }
};
var washSq = {
  minCust: 11,
  maxCust: 38,
  aveCookieSale: 1.9,
  custPerHour: function() {
    Math.floor(Math.random() * 10) + 1;
  }
};
var sellwood = {
  minCust: 20,
  maxCust: 48,
  aveCookieSale: 33,
  custPerHour: function() {
    Math.floor(Math.random() * 10) + 1;
  }
};
var pearl = {
  minCust: 3,
  maxCust: 24,
  aveCookieSale: 2.6,
  custPerHour: function() {
    Math.floor(Math.random() * 10) + 1;
  }
};

var stores = [pioneerSq, pdxAirport, washSq, sellwood, pearl];
