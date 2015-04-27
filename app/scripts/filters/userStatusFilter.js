'use strict';

angular.module('nucleusApp')
.filter('userStatusFilter', [
  function() {
    return function(archived) {
      if (archived === false) {
        return 'ACTIVE';
      } else if (archived === true) {
        return 'INACTIVE';
      }
    };
  }
]);
