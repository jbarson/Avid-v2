"use strict";

angular
  .module('avid.controllers', [])
  .controller('FlagCtrl', FlagCtrl)
  .controller('AttitudeCtrl', function () {
  })
  .controller('AccountCtrl', function () {
  })
  .controller('BearingCtrl', BearingCtrl);


function FlagCtrl($scope, Ships) {

  var vm = this;
  vm.ships = Ships.all();

  var rotations=[0,180,-90,90];
  vm.update = function () {
    vm.moveMode = vm.moveModeSelected;

  };

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


function BearingCtrl (){
  var vm = this;

  vm.test = "test";
  vm.horizontalDistance = 0;
  vm.verticalDistance = 0;
  // var arrows = document.querySelector('#horizontalBearingArrows');
  vm.flipAvid = function(){

   // console.log(arrows.getAttribute('visibility'));
    //if (arrows.getAttribute('visibility')==='visible'){arrows.setAttribute('visibility','hidden')}
    //console.log(arrows.getAttribute('visibility'));

    document.querySelector('#verticalSlider').classList.toggle('hide');
    document.querySelector('#verticalSlider').classList.toggle('distanceSlider');
    document.querySelector(".flipper").classList.toggle("flip");
    document.querySelector("#up-down-arrows").classList.toggle("ada-visible");
    document.querySelector("#up-down-arrows").classList.toggle("ada-invisible");
  };

  vm.shootBearingSetup = function(){
    //if (arrows.getAttribute('visibility')==='visible'){arrows.setAttribute('visibility','hidden')}else{arrows.setAttribute('visibility','visible')}
    document.querySelector('#horizontalBearingArrows').classList.toggle("ada-visible");
    document.querySelector('#horizontalBearingArrows').classList.toggle("ada-invisible");
  };

  vm.setDirection = function(direction){
    console.log(direction);
    document.querySelector('#horizontalBearingArrows').classList.toggle("ada-invisible");
  }


}