/**
 * Created by tschweer on 23.11.16.
 */

require('./style.css');

let sharedApp = angular.module('shared', ['ngAnimate']);

sharedApp.directive('booleanBox', require('./directives/BooleanBox'));
sharedApp.directive('childForm', require('./directives/ChildForm'));
sharedApp.directive('formViewer', require('./directives/FormViewer'));
sharedApp.directive('passwordPolicy', require('./directives/PasswordPolicy'));

module.exports = sharedApp;
