require('./task-list.component.css');

controller.$inject = ['tasksService', 'rulesTypes', 'taskStatus'];
function controller(tasksService, rulesTypes, taskStatus){
  var $ctrl = this;
  $ctrl.data = [];
  $ctrl.filter = filter;

  // formly配置 
  $ctrl.model = {
    timeOption: 0
  };
  $ctrl.options = {};
  $ctrl.fields = [
    { 
      className: 'row',
      fieldGroup: [
        {
          key: 'siteid',
          type: 'input2',
          className: 'col-sm-6 col-lg-3',
          templateOptions: {
            label: 'site ID/广告ID'
          }
        },
        {
          key: 'rulegroupname',
          type: 'input2',
          className: 'col-sm-6 col-lg-3',
          templateOptions: {
            label: '规则组名称'
          }
        },
        {
          key: 'rulegrouptype',
          type: 'select2',
          className: 'col-sm-6 col-lg-3',
          templateOptions: {
            label: '规则组类型',
            valueProp: 'id',
            labelProp: 'title',
            options: [{id: undefined, title: '全部'}].concat(rulesTypes)
          }
        },
        {
          key: 'status',
          type: 'select2',
          className: 'col-sm-6 col-lg-3',
          templateOptions: {
            label: '任务状态',
            valueProp: 'id',
            labelProp: 'title',
            options: [{id: undefined, title: '全部'}].concat(taskStatus)
          }
        }
      ]
    },
    {
      className: 'row',
      fieldGroup: [
        {
          key: 'timeOption',
          type: 'select',
          className: 'col-sm-2',
          templateOptions: {
            label: '',
            valueProp: 'id',
            labelProp: 'title',
            options: [
              {id: 0, title: '开始时间'},
              {id: 1, title: '结束时间'},
            ]
          }
        },
        {
          key: 'time',
          type: 'timeRange',
          className: 'col-sm-8 col-md-6 pl30',
          templateOptions: {
            label: ''
          }
        }
      ]
    }
  ];

  filter();

  function filter(){
    var timeOption = $ctrl.model.timeOption;
    var time = $ctrl.model.time || {};
    var params = {
      siteid: $ctrl.model.siteid,
      rulegroupname: $ctrl.model.rulegroupname,
      rulegrouptype: $ctrl.model.rulegrouptype,
      status: $ctrl.model.status,
      startdate: timeOption == 0 && time.min || null,
      startdate1: timeOption == 0 && time.max || null,
      enddate: timeOption == 1 && time.min || null,
      enddate1: timeOption == 1 && time.max || null
    };

    tasksService.getTasks(params).then(function(data){
      $ctrl.data = data && data.Data || [];
    }, function(reason){
      console.log(reason);
    });
  }
}

module.exports = {
  template: require('./task-list.component.html'),
  controller: controller
};