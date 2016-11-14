require('./task-list.component.css');

controller.$inject = ['tasksService'];
function controller(tasksService){
  var $ctrl = this;
  $ctrl.list = [];

  // formly配置 
  var testData = [
    {
      "id": 1,
      "label":"Option 1"
    },
    {
      "id": 2,
      "label":"Option 2"
    },
    {
      "id": 3,
      "label":"Option 3"
    }
  ];
  $ctrl.model = {};
  $ctrl.options = {};
  $ctrl.fields = [
    {
      key: 'sideId',
      type: 'input',
      templateOptions: {
        label: 'site ID/广告ID'
      }
    },
    {
      key: 'name',
      type: 'input',
      templateOptions: {
        label: '规则组名称'
      }
    },
    {
      key: 'singleOption',
      type: 'select',
      templateOptions: {
        label: '规则组类型',
        valueProp: 'id',
        labelProp: 'label',
        options: testData
      }
    },
    {
      key: 'singleOption2',
      type: 'select',
      templateOptions: {
        label: '任务状态',
        valueProp: 'id',
        labelProp: 'label',
        options: testData
      }
    },
    {
      key: 'singleOption3',
      type: 'select',
      templateOptions: {
        label: '',
        valueProp: 'id',
        labelProp: 'label',
        options: testData
      }
    },
    {
      key: 'time',
      type: 'timeRange',
      templateOptions: {
        label: ''
      }
    }
  ];

  tasksService.getTasks().then(function(data){
    console.log('aaaaaaaaaaaaaaaa');
    console.log(data);
    $ctrl.list = data && data.Data || [];
  }, function(reason){
    console.log(reason);
  });
}

module.exports = {
  template: require('./task-list.component.html'),
  controller: controller
};