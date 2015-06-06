var API_URL = 'http://api.wunderground.com/api/459997bb99f562c6/conditions/geolookup/q/';



  var weatherz = angular.module('weatherz', []);

weatherz.controller('WeatherCtrl', function($http) {
  var vm = this;
  navigator.geolocation.getCurrentPosition(function(location) { //creating the location function; to be determined by lat and long; coord.latitude are in the json, but we're shortening it so that it can be appended to getJSON's data function; we'll use data to display weather by geoposition
  var lat = location.coords.latitude;
  var long = location.coords.longitude;
  $http
    .get(API_URL + lat + ',' + long + '.json')
    .success(function(data) {
    console.log('do you see me?');
    vm.temp_f = data.current_observation.temp_f;

});
  });
});
/*
 //difference from codepen is I need the window.onlead because the scripts are executing before the elements are loaded.
var btnZipCode = document.querySelector('#btnZipCode'); //creates the button element using the id from the button input

  btnZipCode.onclick = function() { //watches for the button click

  var input = document.querySelector('#zipCode'); //takes the user's zip code input
  var zipcode = input.value; //takes the value of the user imput, forms it so can be used in the json

  getJSON(API_URL + zipcode + '.json', function(data) {
    var span = document.querySelector('#temp'); //puts the formed data from var zipcode as a string, putting it in the span, which is at the end of the var API_URL
    span.innerHTML = data.current_observation.temp_f; //HERE'S THE  WEATHER. SWEET JESUS.
  });
};*/

