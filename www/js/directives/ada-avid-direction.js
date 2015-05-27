(function () {
  "use strict";

  angular
    .module('avid')
    .directive('adaAvidDirection', adaAvidDirection);

  adaAvidDirection.$inject = [];
  /* @ngInject */

  function adaAvidDirection() {
    return {
      templateNamespace: 'svg',
      replace          : true,
      restrict         : "E",
      templateUrl      : 'templates/base-avid.html',
      scope            : {
        mode           : '@'
      },
      link             : function (scope, element, attrs) {

        var snap = Snap(element[0]);
        snap.select('#iconNose').attr({visibility: 'visible'}).transform('t0,-116 r0,0,116');
        snap.select('#iconTail').attr({visibility: 'visible'}).transform('t0,-116 r180,0,116');
        snap.select('#iconTop').attr({visibility: 'visible'}).transform("t-8,-10 s0.85");
        snap.select('#iconBottom').attr({visibility: 'visible'}).transform("t8,10 s0.85");
        snap.select('#iconLeft').attr({visibility: 'visible'}).transform('t0,-116 r-90,0,116');
        snap.select('#iconRight').attr({visibility: 'visible'}).transform('t0,-116 r90,0,116');
        //var noseAftCircle = snap.select('#noseAftCircle');
        var topBottomCircle = snap.select('#topBottomCircle').attr({visibility: 'visible'}).transform("t8,10 s0.85");;
        //var portStbCircle = snap.select('#portStbCircle');
        //var noseDir = attrs.nose.split('.');
        //var topDir = attrs.top.split('.');
        //var portDir = portDirCalc(noseDir, topDir);

        //  firstIcon.attr({visibility: 'visible'}).transform(firstTransform);
        //  secondIcon.attr({visibility: 'visible'}).transform(secondTransform);
        //  firstDirection[0] !== '000' ? firstIcon.after(circleIcon) : circleIcon.remove();


        //placeAxes(noseDir, nose, tail, noseAftCircle);
        //placeAxes(topDir, top, bottom, topBottomCircle);
        //placeAxes(portDir, port, starboard, portStbCircle);
        //var vectorArrows = snap.select('#vectorArrows');
        //var posLabel = snap.select('#iconAvidLabel+Text');
        //var negLabel = snap.select('#iconAvidLabel-Text');
        //var mode1Label = snap.select('#mode1DataDisplay');
        //switch (attrs.mode) {
        //  case 0:
        //    var elementList = [[mode1Label, 'hidden'], [posLabel, 'hidden'], [negLabel, 'hidden'], [vectorArrows, 'hidden']];
        //    console.log(elementList);
        //    elementList.forEach(function (i) {
        //      i[0].attr({visibility: i[1]})
        //    });
        //    break;
        //  case 1:
        //    var elementList = [[mode1Label, 'visible'], [posLabel, 'hidden'], [negLabel, 'hidden'], [vectorArrows, 'hidden']];
        //    console.log(elementList);
        //    elementList.forEach(function (i) {
        //      i[0].attr({visibility: i[1]})
        //    });
        //    break;
        //  case 2:
        //    var elementList = [[mode1Label, 'visible'], [posLabel, 'hidden'], [negLabel, 'hidden'], [vectorArrows, 'hidden']];
        //    console.log(elementList);
        //    elementList.forEach(function (i) {
        //      i[0].attr({visibility: i[1]})
        //    });
        //    break;
        //  default:
        //    throw 'error';
        //    break;
        //}
      }


    };
    //function portDirCalc(dir1, dir2) {
    //  console.log(dir1, dir2);
    //  var portDir = ["000", "270", "+"];
    //  if (dir2[0] === '090') {
    //    portDir[0] = '000';
    //    portDir[1] = dir2[2] === '+' ? (parseInt(dir1[1], 10) - 90).toString() : (parseInt(dir1[1], 10) + 90).toString();
    //  }
    //  //console.log(portDir);
    //  return portDir;
    //}
    //
    //function placeAxes(firstDirection, firstIcon, secondIcon, circleIcon) {
    //  var firstTransform, secondTransform, circleTransform;
    //  //var bands = {"000": -116, "030": -78, "060": -42, "90": 0};
    //  if (firstDirection[0] === '090') {
    //    firstTransform = "t-8,-10 s0.85";
    //    secondTransform = "t8,10 s0.85";
    //    circleTransform = firstDirection[2] === '-' ? firstTransform : secondTransform
    //  } else {
    //    firstTransform  = 't0,-116 r' + firstDirection[1] + ',0,116';
    //    secondTransform = 't0,-116 r' + parseInt(firstDirection[1],10)-180 + ',0,116';
    //    circleTransform = firstDirection[2] === '-' ? firstTransform : secondTransform;
    //  }
    //  console.log(firstDirection[1]);
    //  circleIcon.attr({visibility: 'visible'}).transform(circleTransform);
    //  firstIcon.attr({visibility: 'visible'}).transform(firstTransform);
    //  secondIcon.attr({visibility: 'visible'}).transform(secondTransform);
    //  firstDirection[0] !== '000' ? firstIcon.after(circleIcon) : circleIcon.remove();
    //
    //}
  }
})();