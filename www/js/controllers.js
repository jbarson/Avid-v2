angular.module('avid.controllers', [])

  .controller('DashCtrl', function ($scope, Ships) {
    $scope.ships = Ships.all();
    $scope.noseClass = function (band) {
      var params = "badge";
      //if (band < 0) {
      //  params += " nose-down"
      //}
      params += band<0?" nose-down":" nose-up";
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
    $scope.displayCompleted= function(done){
      return done?"Done":"Pend";
    };
    $scope.completedClass = function(done){
      return done?"badge badge-dark":"badge badge-stable";
    };
  })

  .controller('ChatsCtrl', function ($scope, Chats) {
    $scope.chats = Chats.all();
    $scope.remove = function (chat) {
      Chats.remove(chat);
    };
  })

  .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
  })

  .controller('AccountCtrl', function () {
    var vm = this;
    vm.settings = {
      enableFriends: true
    };

  });


