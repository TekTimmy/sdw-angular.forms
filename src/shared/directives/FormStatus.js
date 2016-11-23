
module.exports = function() {
    return {
        scope: {
            form: '='
        },
        link: function(scope) {
            let names = [],
                formCtrl = scope.form;
            while(formCtrl) {
                if(formCtrl.$name) {
                    names.push(formCtrl.$name);
                }
                formCtrl = formCtrl.$$parentForm;
            }
            scope.name = names.reverse().join('.');
        },
        template: `
        <table class="table">
            <thead>
                <tr>
                    <td>form tree</td>
                    <td>$pristine</td>
                    <td>$dirty</td>
                    <td>$valid</td>
                    <td>$submitted</td>
                    <td>$error</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{{name}}</td>
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
};
