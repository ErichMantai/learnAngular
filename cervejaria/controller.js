angular
	.module('App')
	.controller('CervejariaController',function($scope,$http){
    var API = 'http://www.munif.com.br/bereja/api/cervejaria';

	     $scope.listarCervejarias = function(){
          $scope.loading = true;        
          $http.get('http://www.munif.com.br/bereja/api/cervejaria')
          .then(function(response){
            $scope.cervejarias = response.data;
             $scope.loading = false; 
          })
       }
        $scope.listarCervejarias();

       $scope.salvarCervejaria = function(cervejaria) {
            var novaCervejaria = angular.copy(cervejaria);
             $scope.loading = true; 
            if (cervejaria.id) {
              $http.put(API +'/' + cervejaria.id, novaCervejaria)
              .then(function(response){
                $scope.listarCervejarias();
              })

            } else {  

              $http.post(API, novaCervejaria)
              .then(function(response){
                $scope.listarCervejarias();
              })
            }
           $scope.cervejaria = {};
       }
       $scope.popularForm = function(cervejaria){
          $scope.cervejaria = angular.copy(cervejaria);
       }
       $scope.deletarCervejaria = function(cervejaria){
          if (confirm("Tem certeza que deseja remover a cerveja: " +cervejaria.nome +"?")){
              $http.delete(API+ '/' + cervejaria.id)
              .then(function(response){
                $scope.listarCervejarias()
                 $scope.loading = true; 
              })
          }
       }
	});