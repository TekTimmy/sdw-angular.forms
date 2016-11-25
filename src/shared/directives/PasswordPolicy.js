/**
 * Created by tschweer on 25.11.16.
 */

module.exports = function() {
    return {
        scope: false,
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, element, attrs, ngModelCtrl) {
            console.log('got ngModelCtrl:', ngModelCtrl);

            ngModelCtrl.$validators.length = function(password) {
                return password && password.trim().length >= 6;
            };

            ngModelCtrl.$validators.lowercase = function(password) {
                return password && password.match(/[a-z]+/) !== null;
            };

            ngModelCtrl.$validators.uppercase = function(password) {
                return password && password.match(/[A-Z]+/) !== null;
            };

            ngModelCtrl.$validators.number = function(password) {
                return password && password.match(/[0-9]+/) !== null;
            };

        }
    };
};
