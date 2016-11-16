module.exports = {
  name: 'bindTag',
  template: require('./bindTag.html'),
  defaultOptions: {
    noFormControl: true,
    wrapper: ['bootstrapLabel', 'bootstrapHasError']
  },
  controller: ['$scope', '$timeout', function($scope, $timeout) {
    $scope.keyword = null;
    $scope.copyItemOptions = copyItemOptions;
    $scope.search = search;
    $scope.selectTag = selectTag;
    // 独立model
    $scope.hideModel = {}; // 存放search
    $scope.searchOptions = {
      key: 'search',
      type: 'input2',
      templateOptions: {
        label: '关联标签'
      }
    };

    var model = $scope.model;
    var key = $scope.options.key;

    var options;

    $scope.$watch('keyword', function(value){
      console.log(value);
    });

    function copyItemOptions() {
      return { key: 'weight', type: 'input' };
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

    function selectTag(index){
      var tag = options[index];
      model[key] = model[key] || [];
      model[key].push({
        weight: '',
        tagId: tag.id,
        tagTitle: tag.title
      });
    }
  }]
};