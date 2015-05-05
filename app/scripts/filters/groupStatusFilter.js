'use strict';

angular.module('nucleusApp')
.filter('groupStatusFilter', [
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
