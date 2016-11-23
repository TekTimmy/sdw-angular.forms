
module.exports = function() {
    return {
        transclude: true,
        scope: {
            model: '=',
            text: '=',
            name: '@'
        },
        template: `
        <div>
            <label class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input" ng-model="model" name="{{name}}">
              <span class="custom-control-indicator"></span>
              <span class="custom-control-description">{{text}}</span>
            </label>
            <div ng-show="model" class="animate">
                <ng-transclude></ng-transclude>
            </div>
        </div>
        `
    };
};
