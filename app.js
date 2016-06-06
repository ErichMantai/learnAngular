angular
    .module('App',['ngRoute'])
    .config(function($routeProvider){
        $routeProvider
        .when('/', {
          templateUrl: 'home.html',
          controller: 'HomeController'
        })
          .when('/cervejaria',{
            templateUrl: 'cervejaria/index.html',
            controller: 'CervejariaController'
          })
    })
    .controller('AppController', function($scope) {
       $scope.categorias = [
           { nome: "Categoria 1" },
           { nome: "Categoria 2" },
           { nome: "Categoria 3" },
           { nome: "Categoria 4" },
           { nome: "Categoria 5" }
       ];
    });