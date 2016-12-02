var moviesApp = angular.module('moviesApp',[]);

moviesApp.controller('AppCtrl', function ($http) {
    var app = this;
    var url = 'http://localhost:3000';

    app.saveMovie = function (newMovie) {
      $http.post(url + '/add', {name:newMovie}).success(function () {
          loadProducts();
      })
    };

    function loadProducts() {
        $http.get('http://localhost:3000').success(function (movies) {
            app.movies = movies;
        })
    }

    loadProducts();
});