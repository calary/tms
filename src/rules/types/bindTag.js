module.exports = {
  name: 'bindTag',
  template: require('./bindTag.html'),
  defaultOptions: {
    noFormControl: true,
    wrapper: ['bootstrapLabel', 'bootstrapHasError']
  },
  controller: ['$scope', '$timeout', function($scope, $timeout) {
    $scope.copyItemOptions = copyItemOptions;
    $scope.selectTag = selectTag;

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
    console.log($scope.hideFields);
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
        type: 'input',
        className: 'no-label',
        templateOptions: {
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