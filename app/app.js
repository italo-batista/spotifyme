
var app = angular.module('myApp', ['spotify', 'ui.router']);

app.config(function (SpotifyProvider) {
    SpotifyProvider.setClientId('I hide it');
    SpotifyProvider.setRedirectUri('http://localhost:8888/#/callback');
    SpotifyProvider.setScope('user-read-private playlist-read-private playlist-modify-private playlist-modify-public');
});

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    var home = {
        name: "home",
        url: '/home',
        templateUrl: 'app/views/home.html',
        controller: 'HomeController as homeCtrl'
    }

    var callback = {
        name: "callback",
        url: '/callback',
        templateUrl: 'app/views/callback.html'
    }

    $stateProvider.state(callback);
    $stateProvider.state(home);

});