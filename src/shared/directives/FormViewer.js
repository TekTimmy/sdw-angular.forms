
module.exports = ['$timeout', '$window', function($timeout, $window) {
    return {
        scope: true,
        link: function(scope) {
            scope.formControllers = [];
            $timeout(function() {
                checkProperties(scope.$parent);
                for(let formController of scope.formControllers) {
                    buildName(formController);
                }
                console.log(`detected ${scope.formControllers.length} FormController:`, scope.formControllers);
            });

            function checkProperties(obj) {
                for(let propName in obj) {
                    let property = obj[propName];
                    // make sure to not run into loop by checking '$$parentForm'
                    if (!propName.startsWith('$$') && getConstructorName(property) === 'FormController') {
                        scope.formControllers.push(property);
                        checkProperties(property);
                    }
                }
            }

            function getConstructorName(obj) {
                let constructor;
                if(obj && typeof obj === 'object') {
                    let prototype = Object.getPrototypeOf(obj);
                    if(prototype.constructor && prototype.constructor.name) {
                        constructor = prototype.constructor.name;
                    }
                }
                return constructor;
            }

            function buildName(formController) {
                let names = [],
                    formCtrl = formController;
                while(formCtrl) {
                    if(formCtrl.$name) {
                        names.push(formCtrl.$name);
                    }
                    formCtrl = formCtrl.$$parentForm;
                }
                formController.treename = names.reverse().join('.');
            }
        },
        template: `
        <table class="table table-inverse table-sm">
            <thead>
                <tr>
                    <th>treename</th>
                    <th>$pristine</th>
                    <th>$dirty</th>
                    <th>$valid</th>
                    <th>$submitted</th>
                    <th>$error</th>
                </tr>
            </thead>
            <tbody>
                <tr ng-repeat="form in formControllers track by $index">
                    <td>{{form.treename}}</td>
                    <td>{{form.$pristine}}</td>
                    <td>{{form.$dirty}}</td>
                    <td>{{form.$valid}}</td>
                    <td>{{form.$submitted}}</td>
                    <td>{{form.$error}}</td>
                </tr>
            </tbody>
        </table>
        `
    };
}];
