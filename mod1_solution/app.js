angular.module('mod1', [])
   .controller('mod1Controller', mod1Controller);

mod1Controller.$inject = ['$scope'];
function mod1Controller($scope) {
   'use strict';
   const vm = $scope;
   vm.warningMsg = '';
   vm.enjoyMsg = '';

   vm.process = () => {
      let numberOfDishes = calcNumberOfDishes(vm.text);
      if (numberOfDishes === 0) {
         vm.warningMsg = 'Please enter data first!';
         vm.enjoyMsg = '';
      }
      else {
         vm.warningMsg = '';
         vm.enjoyMsg = numberOfDishes < 4
            ? 'Enjoy!'
            : 'Too much!'
      }
   }

   function calcNumberOfDishes (text = '') {
      return text.split(',').map(String.trim).filter(Boolean).length;
   }
}