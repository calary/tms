module.exports = {
  name: 'bindTag',
  template: require('./bindTag.html'),
  wrapper: ['validation', 'bootstrapLabel', 'bootstrapHasError'],
  defaultOptions: {
    noFormControl: false,
    ngModelAttrs: {
      required: {
        attribute: '',
        bound: ''
      }
    },
    validators: {
      requiredhhhh: {
        expression: function(viewValue, modelValue) {
          var value = modelValue || viewValue;
          console.log('custom validators');
          return (value instanceof Array) && value.length > 1;
        },
        message: '啊生大法上帝发誓地方' 
      }
    }
  },
  controller: ['$scope', '$timeout', function($scope, $timeout) {
    $scope.copyItemOptions = copyItemOptions;
    $scope.selectTag = selectTag;

    console.log($scope);
    $scope.$watch('fc', function(){
      console.log($scope.fc);
    });

    // 独立表单
    $scope.hideModel = {}; // 存放search
    $scope.hideFields = [{
      key: 'search',
      type: 'uiSelectAsync2',
      templateOptions: {
        // angular 1.4+ 只允许select使用ng-options
        // 所以必须显示设定替代的bs-options
        optionsAttr: 'bs-options',
        label: '关联标签',
        options: [],
        valueProp: 'id',
        labelProp: 'title',
        refresh: search,
        refreshDelay: 100
      }
    }];
    var options;

    var model = $scope.model;
    var key = $scope.options.key;

    $scope.$watch('hideModel.search', function(val){
      if(!options) {
        return;
      }
      options.forEach(function(option, index){
        if(option.id === val) {
          selectTag(option);
        }
      });
    });


    function copyItemOptions(index) {
      return { 
        // model.key[0].weight
        key: key + '[' + index + '].weight', 
        type: 'input2',
        className: 'no-label',
        templateOptions: {
          hideLabel: true,
          required: true
        } 
      };
    }

    function search(keyword, field){
      return $timeout(function(){
        options = field.templateOptions.options = [
          { id: 1, title: 'aaa' },
          { id: 2, title: 'bbb' },
          { id: 3, title: 'ccc' },
          { id: 4, title: 'ddd' },
          { id: 5, title: 'eee' },
          { id: 6, title: 'fff' }
        ];
      }, 1000);
    }

    function selectTag(tag){
      model[key] = model[key] || [];
      model[key].push({
        weight: '',
        tagId: tag.id,
        tagTitle: tag.title
      });
    }
  }]
};