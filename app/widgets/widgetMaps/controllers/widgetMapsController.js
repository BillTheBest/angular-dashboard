'use strict';
app.controller('widget5Controller', [ "$scope","$rootScope","$http","$compile","widget5Factory",
  function ($scope, $rootScope, $http, $compile, widget5Factory) {
    $scope.title="Grafico 5";
    $scope.desc="grafico descrizione 123456";


    widget5Factory.getInfo().success(function(data){
      console.log(data); 

      //main chart label
      $scope.customerLabels = ["Customers" + " - " + "Leads"];

      //data series
      $scope.series = widget5Factory.getLabels();

      //chart data
      $scope.customerData = [
        [data.customers.total],
        [data.leads.total]
      ];


    }).error(function(data){
      console.log("error loading windget 5");

    });




// {
//   "customers":{
//     label : "Customers",
//     value : 55
//   },
//   "leads":{
//     label : "Leads",
//     value : 100
//   }

// }

//
//               widget5Factory.getInfo().success(function(data){
//                alert(data);
//              }).error(function(data){
//
//              })



$scope.customerOptions = {
              //                    barValueSpacing: 150,
              //                    barDatasetSpacing: -10,
            };


          }]);






