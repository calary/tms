controller.$inject = ['$modalService', '$state'];
function controller($modalService, $state){
  var $ctrl = this;
  $ctrl.options = {};
  $ctrl.fields = [];
  $ctrl.model = {};

  // 当前是否是创建任务页
  var isNewTask = $state.is('newTask');

  if(isNewTask) {
    $ctrl.model.ruleType = 1;
    $ctrl.fields = [
      {
        key: 'ruleType',
        type: 'select2',
        templateOptions: {
          label: '选择标签规则组',
          valueProp: 'id',
          labelProp: 'title',
          options: [{ id: 1, title: '选项'}],
          required: true
        }
      },
      {
        key: 'sideId',
        type: 'input2',
        templateOptions: {
          label: 'site ID/广告ID',
          required: true
        }
      },
      {
        key: 'time',
        type: 'timeRange2',
        optionsTypes: ['timeRange2'],
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
        optionsTypes: ['timeRange2'],
        templateOptions: {
          label: '设置任务周期',
          required: true
        }
      }
    ];
  }

  // function definition
  function onSubmit() {
    alert(JSON.stringify($ctrl.model), null, 2);
  }
}

module.exports = {
  template: require('./edit-task.component.html'),
  controller: controller
};