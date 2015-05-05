'use strict';

angular.module('nucleusApp')
.filter('userStatusFilter', [
  function() {
    return function(active) {
      if (active === true) {
        return 'ACTIVE';
      } else if (active === false) {
        return 'INACTIVE';
      }
    };
  }
]);
