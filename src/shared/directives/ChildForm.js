
module.exports = function() {
    return {
        transclude: true,
        scope: {
            name: '@',
            model: '=',
            fields: '='
        },
        template: `
        <ng-form name="{{name}}">
            <div ng-repeat="field in fields track by $index">
                <div class="form-group">
                    <label for="{{field}}">{{field}}:</label>
                    <input name="{{field}}" class="form-control"
                           id="{{field}}" type="text" ng-model="model[field]">
                </div>
            </div>
            <ng-transclude></ng-transclude>
        </ng-form>
        `
    };
};
