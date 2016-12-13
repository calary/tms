controller.$inject = ['$modalService', '$state', 'tasksService', '$modalService'];
function controller($modalService, $state, tasksService, $modalService){
  var $ctrl = this;
  $ctrl.options = {
    // formState用于各field之间传值
    formState: {
      hideSiteId: false
    }
  };
  $ctrl.fields = [];
  $ctrl.model = {};
  $ctrl.submit = submit;
  $ctrl.data = {}; // 编辑任务用
  var rulesOptions = [];

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
          valueProp: 'RuleGroupID',
          labelProp: 'RuleGroupName',
          options: [],
          required: true
        },
        controller: ['$scope', 'rulesService', function($scope, rulesService){
          rulesService.getRules({ Status: 4 })
          .then(function(data){
            // console.log(data);
            // RuleGroupType
            // 1.如选择的标签规则组类型是呼叫中心或社会化媒体
            // 则隐藏输入site ID/广告ID一项。
            rulesOptions = data || [];

            $scope.to.options = rulesOptions;
            if(rulesOptions.length) {
              $scope.model.RuleGroupID = rulesOptions[0].RuleGroupID;
            }
          });
        }],
        watcher: {
          listener: function(field, newValue, oldValue, scope, stopWatching) {
            if(newValue) {
              var rules = (rulesOptions || []).find(function(rules){
                return rules.RuleGroupID == newValue;
              });
              if(rules) {
                var type = rules.RuleGroupType;
                if(type === '网站' || type === '广告') {
                  scope.options.formState.hideSiteId = false;
                } else {
                  scope.options.formState.hideSiteId = true;
                }
              }
            }
          }
        }
      },
      {
        key: 'SiteID',
        type: 'input2',
        hideExpression: 'formState.hideSiteId',
        templateOptions: {
          label: 'site ID/广告ID'
        },
        expressionProperties: {
          'templateOptions.required': '!formState.hideSiteId'
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
    tasksService.getTasks({HYUniqueid: $state.params.taskId})
    .then(function(data){
      var _data = data && data.length ? data[0] : {};
      $ctrl.data = _data;
      $ctrl.model = {
        TaskID: _data.TaskID,
        time: {
          min: _data.StartDate,
          max: _data.EndDate
        }
      };
      $ctrl.fields = [
        {
          type: 'static2',
          templateOptions: {
            label: '标签规则组',
            text: _data.RuleGroupName
          }
        }, 
        {
          type: 'static2',
          hideExpression: '!model.SiteID',
          templateOptions: {
            label: 'site ID/广告ID',
            text: _data.SiteID
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
    });
  }

  function submit(){
    if($ctrl.form.$invalid) {
      return;
    }

    var data = {
      RuleGroupID: $ctrl.model.RuleGroupID,
      TaskID:      $ctrl.model.TaskID,
      SiteID:      $ctrl.model.SiteID,
      StartDate:   $ctrl.model.time.min,
      EndDate:     $ctrl.model.time.max
    };
    // console.log(data);
    if(isNewTask) {
      return tasksService.createTask(data).then(function(data){
        $modalService.alert({
          content: '创建成功', 
          hideCancel: true
        }).then(gotoList);
      }, function(reason){
        $modalService.alert({content: reason});
      });  
    } else {
      return tasksService.editTask(data).then(function(data){
        $modalService.alert({
          content: '修改成功', 
          hideCancel: true
        }).then(gotoList);
      }, function(reason){
        if(reason && reason.status == -1) {
          reason = '您已离线';
        }
        $modalService.alert({content: reason});
      });  
    }
  }

  function gotoList(){
    $state.go('tasksList');
  }
}

module.exports = {
  template: require('./edit-task.component.html'),
  controller: controller
};