(function(){
var app = angular.module('app', ['ionic']);

app.config(function($stateProvider, $urlRouterProvider){

  $stateProvider.state('home',{
    url:'/home',
    views:{
      'tab-home':{
            templateUrl:'templates/home.html'
      }
    }
  });

  $stateProvider.state('details',{
    url:'/details',
    views:{
      'tab-home':{
            templateUrl:'templates/details.html'
      }
    }
  });

  $stateProvider.state('settings',{
    url:'/settings',
    views: {
      'tab-settings':{
            templateUrl:'templates/settings.html'
      }
    }
  });

  $urlRouterProvider.otherwise('/home');

});


app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});
}());
