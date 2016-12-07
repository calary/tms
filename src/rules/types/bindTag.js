require('./bindTag.css');
var tagIndex = 0;
module.exports = {
  name: 'bindTag',
  template: require('./bindTag.html'),
  defaultOptions: {
    noFormControl: false
  },
  controller: ['$scope', '$timeout', function($scope, $timeout) {
    var options;
    var model = $scope.model;
    var key = $scope.options.key;
    var status = 0;

    $scope.selectTag = selectTag;
    $scope.removeTag = removeTag;
    $scope.copyItemOptions = copyItemOptions;

    // 独立表单
    var hideFieldKey = 'bindTagSearch-' + (tagIndex++);
    var hideFieldCtrl = null;
    var hasAdded = false;
    $scope.hideModel = {}; // 存放search
    $scope.hideFields = [{
      key: hideFieldKey,
      type: 'uiSelectAsync2',
      templateOptions: {
        labelClass: 'col-sm-2',
        valueClass: 'col-sm-10',
        // angular 1.4+ 只允许select使用ng-options
        // 所以必须显示设定替代的bs-options
        optionsAttr: 'bs-options',
        label: '关联标签',
        options: [],
        valueProp: 'id',
        labelProp: 'title',
        refresh: search,
        refreshDelay: 100
      },
      // 重点：为这个field添加require验证
      // 在表单提交时显示提示信息
      validators: {
        required: function(viewValue, modelValue) {
          console.log('custom validators');
          if(viewValue) {
            selectTag(viewValue);
          }
          $timeout(function(){
            delete $scope.hideModel[hideFieldKey];
          }, 100);
          var value = model[key];
          return (value instanceof Array) && value.length > 0;
        }
      },
      controller: ['$scope', function($scope){
        var unwatch = $scope.$watch('fc', function(newVal){
          if(newVal) {
            hideFieldCtrl = newVal;
            unwatch();
          }
        });
      }]
    }];

    function copyItemOptions(index) {
      return { 
        // model.key[0].weight
        key: key + '[' + index + '].weight', 
        type: 'input2',
        templateOptions: {
          labelClass: 'hide',
          valueClass: '__',
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
      $scope.hideModel[hideFieldKey] = undefined;
    }


    function removeTag($index){
      model[key].splice($index, 1);
      if(hideFieldCtrl) {
        hideFieldCtrl.$validate();
      }
    }
  }]
};