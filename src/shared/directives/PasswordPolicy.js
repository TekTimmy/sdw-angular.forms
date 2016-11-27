module.exports = function() {
    return {
        scope: false,
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, element, attrs, ngModelCtrl) {
            console.log('got ngModelCtrl:', ngModelCtrl);
        }
    };
};
