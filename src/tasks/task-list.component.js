require('./task-list.component.css');

controller.$inject = ['tasksService', 'rulesTypes', 'taskStatus', 'store'];
function controller(tasksService, rulesTypes, taskStatus, store){
  var $ctrl = this;
  $ctrl.store = store;
  $ctrl.data = [];
  $ctrl.update = null; // 等xx-table初始化后填充
  // $ctrl.filter = filter;

  var _taskStatus = taskStatus.slice(0, -1); // 去掉未加入任务

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
            options: [{id: undefined, title: '全部'}].concat(_taskStatus)
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

  // xx-table配置
  $ctrl.tableConfig = {
    data: [],
    firstUpdate: true,
    getData: getData,
    columns: [
      {
        head: 'site ID/广告ID',
        data: '{{ row.SiteID }}'
      }, {
        head: '规则组名称',
        data: '{{ row.RuleGroupName }}'
      }, {
        head: '规则组类型',
        data: '{{ row.RuleGroupType }}'
      }, {
        head: '开始时间',
        data: '{{ row.StartDate | date2 }}'
      }, {
        head: '结束时间',
        data: '{{ row.EndDate | date2 }}'
      }, {
        head: '状态',
        data: '{{ methods.getStatusTitle(row.Status) }}'
      }, {
        // hide: store.hideEditArea,
        head: '任务进度',
        data: '<div class="text-center">{{methods.getPercent(row.Percentage)}}%</div>' +
          '<uib-progressbar value="methods.getPercent(row.Percentage)" type="success"></uib-progressbar>'
      }, {
        head: '创建时间',
        data: '{{ row.CreateTime | date2 }}'
      }, {
        head: '操作',
        data: '<a ui-sref="editTask({taskId: row.TaskID})" ng-show="row.Status==0||row.Status==2">编辑任务时间</a>'
      }
    ],
    methods: {
      getStatusTitle: getStatusTitle,
      getPercent: getPercent
    }
  };
  $ctrl.onTableInit = onTableInit;

  function getData(){
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

    return tasksService.getTasks(params);
  }
  function onTableInit(update){
    console.log('on table init');
    $ctrl.update = update;
  }
  function getStatusTitle(_status){
    var status = taskStatus.find(function(status){
      return status.id == _status;
    });
    if(status) {
      return status.title;
    }
    return '';
  }
  // 0.99 -> 99
  function getPercent(number){
    var p = parseFloat(number + '');
    return Math.round(p * 100)
  }

  // filter();
  // function filter(){
  //   var timeOption = $ctrl.model.timeOption;
  //   var time = $ctrl.model.time || {};
  //   var params = {
  //     siteid: $ctrl.model.siteid,
  //     rulegroupname: $ctrl.model.rulegroupname,
  //     rulegrouptype: $ctrl.model.rulegrouptype,
  //     status: $ctrl.model.status,
  //     startdate: timeOption == 0 && time.min || null,
  //     startdate1: timeOption == 0 && time.max || null,
  //     enddate: timeOption == 1 && time.min || null,
  //     enddate1: timeOption == 1 && time.max || null
  //   };

  //   tasksService.getTasks(params).then(function(data){
  //     $ctrl.data = data || [];
  //     $ctrl.data.forEach(function(row){
  //       var status = taskStatus.find(function(status){
  //         return status.id == row.Status;
  //       });
  //       if(status) {
  //         row.StatusTitle = status.title;
  //       }
  //     });
  //   }, function(reason){
  //     console.log(reason);
  //   });
  // }
}

module.exports = {
  template: require('./task-list.component.html'),
  controller: controller
};