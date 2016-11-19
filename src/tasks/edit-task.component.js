controller.$inject = ['$modalService', '$state', 'tasksService'];
function controller($modalService, $state, tasksService){
  var $ctrl = this;
  $ctrl.options = {};
  $ctrl.fields = [];
  $ctrl.model = {};
  $ctrl.createTask = createTask;

  // 当前是否是创建任务页
  var isNewTask = $state.is('newTask');

  if(isNewTask) {
    $ctrl.model.ruleType = 1;
    $ctrl.fields = [
      {
        key: 'RuleGroupID',
        type: 'select2',
        templateOptions: {
          label: '选择标签规则组',
          valueProp: 'id',
          labelProp: 'title',
          options: [],
          required: true
        },
        controller: ['$scope', 'rulesService', function($scope, rulesService){
          rulesService.getRules({ Status: 4 })
          .then(function(data){
            console.log(data);
            // RuleGroupType
            // 1.如选择的标签规则组类型是呼叫中心或社会化媒体
            // 则隐藏输入site ID/广告ID一项。
            $scope.to.options = data && data.Data || [];
          });
        }]
      },
      {
        key: 'SiteID',
        type: 'input2',
        templateOptions: {
          label: 'site ID/广告ID',
          required: true
        }
      },
      {
        key: 'time',
        type: 'timeRange2',
        templateOptions: {
          label: '设置任务周期',
          required: true
        }
      }
    ];
  } else {
    $ctrl.fields = [
      {
        type: 'static2',
        templateOptions: {
          label: '标签规则组',
          text: '1700-奶芙官网打标签规则'
        }
      }, 
      {
        type: 'static2',
        templateOptions: {
          label: 'site ID/广告ID',
          text: '1700'
        }
      },
      {
        key: 'time',
        type: 'timeRange2',
        templateOptions: {
          label: '设置任务周期',
          required: true
        }
      }
    ];
  }

  function createTask(){
    var data = {
      RuleGroupID: $ctrl.model.RuleGroupID,
      SiteID:      $ctrl.model.SiteID,
      StartTime:   $ctrl.model.time.min,
      EndTime:     $ctrl.model.time.max
    };
    console.log(data);
    tasksService.createTask(data).then(function(data){
      console.log(data);
    }, function(reason){
      console.log(reason);
    });
  }
}

module.exports = {
  template: require('./edit-task.component.html'),
  controller: controller
};