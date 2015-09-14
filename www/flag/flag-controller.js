"use strict";

angular
  .module('avid.controllers', [])
  .controller('FlagCtrl', FlagCtrl)


function FlagCtrl($scope, Ships) {

  var vm = this;
  vm.ships = Ships.all();


  vm.update = function () {
    vm.moveMode = vm.moveModeSelected;

  };
  var rotations=[0,180,-90,90];
  vm.changeHeading = function(dir){
    var snap = Snap('#avidWrapper');
    var nose = snap.select('#iconNose');
    var tail = snap.select('#iconTail');
    var port = snap.select('#iconLeft');
    var stbd = snap.select('#iconRight');

    var markers = [nose,tail,port,stbd];
    var rotationVal = dir==='p'?-30:30;

    markers.forEach(function(element,index){
      rotations[index] += rotationVal;


      element.animate({transform:'t0,-116 r'+rotations[index]+',0,116'},500);
      //ele[ind].animate({{transform:'t0,-116 r'+rotationVal+',0,116'},500});
    });


  };

  vm.pitchUpDown = function(dir){

  };

  vm.changeMode = function (mode) {
    var snap = Snap('#avidWrapper');
    var arrows = snap.select('#vectorArrows');
    var mode1 = snap.select('#mode1DataDisplay');
    var plusLabel = snap.select('#iconAvidLabelPlusText');
    var minusLabel =snap.select('#iconAvidLabelMinusText');
    if (mode === 0) {
      arrows.animate({'fill-opacity': '0', 'stroke-opacity': '0'}, 500, function () {
        arrows.attr({visibility: 'hidden', 'fill-opacity': 1, 'stroke-opacity': '1'});
      });
      mode1.animate({'fill-opacity': '0', 'stroke-opacity': '0'}, 500, function () {
        mode1.attr({visibility: 'hidden', 'fill-opacity': 1, 'stroke-opacity': '1'});
      });
      plusLabel.attr({visibility: 'hidden'});
      minusLabel.attr({visibility: 'hidden'});
    } else if (mode === 1) {
      if (mode1.attr('visibility') === 'visible') {
        return;
      }
      mode1.attr({visibility: 'visible', 'fill-opacity': 0, 'stroke-opacity': '0'});
      arrows.animate({'fill-opacity': '0', 'stroke-opacity': '0'}, 500, function () {
        arrows.attr({visibility: 'hidden', 'fill-opacity': 1, 'stroke-opacity': '1'});
      });
      mode1.animate({'fill-opacity': '1', 'stroke-opacity': '1'}, 500, function () {
        mode1.attr({visibility: 'visible', 'fill-opacity': 1, 'stroke-opacity': '1'});
      });
      plusLabel.attr({visibility: 'hidden'});
      minusLabel.attr({visibility: 'hidden'});
    } else if (mode === 2) {
      if (arrows.attr('visibility') === 'visible') {
        return;
      }
      arrows.attr({visibility: 'visible', 'fill-opacity': 0, 'stroke-opacity': '0'});
      arrows.animate({'fill-opacity': '1', 'stroke-opacity': '1'}, 500, function () {
        arrows.attr({visibility: 'visible', 'fill-opacity': 1, 'stroke-opacity': '1'});
      });
      mode1.animate({'fill-opacity': '0', 'stroke-opacity': '0'}, 500, function () {
        mode1.attr({visibility: 'hidden', 'fill-opacity': 1, 'stroke-opacity': '1'});
      });
      plusLabel.attr({visibility: 'visible'});
      minusLabel.attr({visibility: 'visible'});


    }

  };

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
