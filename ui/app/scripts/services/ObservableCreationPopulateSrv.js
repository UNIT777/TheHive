(function() {
    'use strict';
    angular.module('theHiveServices').service('ObservableCreationPopulateSrv', function() {
            var paramsData = '';

            this.setParamsData = function(data) {
                paramsData = data;
            };

            this.getParamsData = function(){
                return paramsData;
            };

            this.clearParamsData = function(){
                paramsData = '';
            };
    });
})();