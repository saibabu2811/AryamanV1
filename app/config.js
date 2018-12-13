'use strict';

angular.module('config', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'partials/home.html',
    controller: 'homecontroller'
  });
  $routeProvider.when('/data_binding', {
    templateUrl: 'partials/data_binding.html',
    controller: 'homecontroller'
  });
}])

.controller('homecontroller', ['$scope','currencyConverter', function($scope,currencyConverter) {
this.k = 1;
this.qty = 1;
this.cost = 2;
this.version = 1.0;
this.lt_version = 7.0;
this.inCurr = 'EUR';
this.currencies = ['USD', 'EUR', 'CNY'];
this.usdToForeignRates = {
  USD : 1,
  EUR : 0.74,
  CNY : 6.09
}
this.currenciesList = currencyConverter.currencies;

this.total = function total(outCurr){
return this.convertCurrency(this.qty * this.cost, this.inCurr, outCurr );
}

this.convertCurrency = function convertCurrency(amount, inCurr, outCurr){
return amount * this.usdToForeignRates[outCurr] / this.usdToForeignRates[inCurr];
}

this.convert = function(outCurr){
return currencyConverter.convert(this.qty * this.cost, this.inCurr, outCurr);
}

this.pay = function pay(){
  window.alert('Thanks!')
}


}]);
