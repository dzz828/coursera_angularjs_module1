(function () {
    'use strict'

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);


    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController ($scope) {
        $scope.checkIfTooMuch = function () {
            $scope.messageStyle = "text-success";
            $scope.dishesInputBoxBorderColor = "green";
            var result = "Too much!";
            if (!$scope.dishes) {
                result = "Please enter data first";
                $scope.messageStyle = "text-danger";
                $scope.dishesInputBoxBorderColor = "red";
            } else if ($scope.dishes.split(',').filter(function(n){ return n !== '' }).length <= 3) {
                result = "Enjoy!";
            }
            $scope.message = result;
        }
    }

})();