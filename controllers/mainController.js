(function(){
    angular.module('app')
    .controller('mainController',  mainController );

    function mainController($http, $stateParams){
        var vm = this;
        vm.dates= dates;
       console.log($stateParams.id);
        $http.get(`JSON/${$stateParams.id}.json`).
            then(function(detail){
                vm.info = detail.data.data;
                console.log(JSON.stringify(detail.data.data.business_info.name));
            }).
            catch(function(data){
                console.log("Error")
            })

        
    }

    var dates = [
        {
            id: "2017-09-17",
            date: "17th",
            
        },
        {
            id: "2017-09-18",
            date: "18th",
           
        }
    ]

})();