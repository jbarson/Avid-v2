/// <reference path="../../typings/cordova/cordova.d.ts"/>
/// <reference path="../../typings/angularjs/angular.d.ts"/>
angular.module('avid.services', [])
  .factory('Ships', function () {
   

    // Some fake testing data
    var ships = [
      {id: "001", name: "Krasniy Oktyabr", nose: '000.000.+', top: '090.pol.+', complete: true}
      //{id: "002", name: "Bonaventure", nose: {dir:"A/B", band: -30}, top: {dir:"A/B", band: 60}, complete: true},
      //{id: "003", name: "Majestic", nose: {dir:"B  ", band: 90}, top: {dir:"E  ", band: 0}, complete: false},
      //{id: "004", name: "Haida", nose: {dir:"A  ", band: -60}, top: {dir:"F  ", band: 30}, complete: false}
    ];

    return {
      all   : function () {
        return ships;
      },
      remove: function (ship) {
        ships.splice(ships.indexOf(ship), 1);
      },
      get   : function (shipId) {
        for (var ship in ships) {
          if (ship.id === parseInt(shipId)) {
            return ship;
          }
        }
        return null;
      },
      add: function (ship) {
        ships.push(ship);
      }
    };
  });
  
angular.module('avid.services')
  .factory('Targets',function () {
    var targets=[

    ];
    
    return {
      add: function (target) {
        targets.push(target);
      },
      remove: function (target){
        targets.splice(targets.indexOf(target),1);
      }
      
    };
  });


