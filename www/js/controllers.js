"use strict";

angular
  .module('avid.controllers', [])
  .controller('FlagCtrl', FlagCtrl )
  .controller('AttitudeCtrl', function () {})
  .controller('AccountCtrl', function () {});


function FlagCtrl($scope, Ships) {

  var vm = this;
  vm.ships = Ships.all();
  $scope.noseClass = function (band) {
    var params = "";
    params += band < 0 ? " nose-down" : " nose-up";
    switch (Math.abs(band)) {
      case 90:
        params += " avid-purple";
        break;
      case 60:
        params += " avid-green";
        break;
      case 30:
        params += " avid-blue";
        break;
      default:
        params += " avid-amber";
    }
    return params;
  };
  $scope.displayCompleted = function (done) {
    return done ? "Done" : "Pend";
  };
  $scope.completedClass = function (done) {
    return done ? "badge badge-dark" : "badge badge-stable";
  };
}