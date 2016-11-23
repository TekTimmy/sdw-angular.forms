/**
 * Created by tschweer on 23.11.16.
 */

require('./style.css');

let sharedApp = angular.module('shared', ['ngAnimate']);

sharedApp.directive('sharedBooleanBox', require('./directives/BooleanBox'));
sharedApp.directive('sharedChildForm', require('./directives/ChildForm'));
sharedApp.directive('sharedFormStatus', require('./directives/FormStatus'));
sharedApp.directive('sharedFormViewer', require('./directives/FormViewer'));

module.exports = sharedApp;
