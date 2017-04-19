
app.controller('HomeController', function ($scope, Spotify) {

    var self = this;

    self.login = function () {
        Spotify.login().then(function (data) {
            console.log(data);
            alert("You are now logged in");
        }).catch(function(error) {
            console.log('didn\'t log in');
        });
    };

    (function main() {

    })();

});