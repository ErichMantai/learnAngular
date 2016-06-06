angular
	.module('App')
	.controller('HomeControler',function($scope){
	$scope.cervejas = [
           { nome: "Eisenbahn", volume: 8 },
           { nome: "Gebenha", volume: 7 },
           { nome: "Brahma", volume: 5 }
       ];
       $scope.salvarCerveja = function(cerveja) {
            var novaCerveja = angular.copy(cerveja);
            if (cerveja.id) {
              $scope.cervejas[cerveja.id] = novaCerveja;
            } else {      
                $scope.cervejas.push(novaCerveja)
            }
           $scope.cerveja = {};
       }
       $scope.popularForm = function($index,cerveja){
          cerveja.id = $index;
          $scope.cerveja = angular.copy(cerveja);
       }
       $scope.deletarCerveja = function($index,cerveja){
          if (confirm("Tem certeza que deseja remover a cerveja: " +cerveja.nome +"?")){
            $scope.cervejas.splice($index, 1);
          }
       }
	});