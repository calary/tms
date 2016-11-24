controller.$inject = ['tasksService'];
function controller(tasksService){
  var $ctrl = this;
 
  this.day = new Date();
  this.maxDate = new Date(2016, 11,20);

  this.range = {
    min: new Date(2016, 10, 3),
    max: new Date(2016, 10, 27)
  };


  $ctrl.data = [];
  $ctrl.getData = getData;
  $ctrl.columns = [
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
      data: '{{ handleStatus(row.Status) }}'
    }, {
      head: '任务进度',
      data: '<div class="text-center">22%</div>' +
        '<uib-progressbar value="22"></uib-progressbar>'
    }, {
      head: '创建时间',
      data: '{{ row.CreateTime | date2 }}'
    }, {
      head: '操作<button>哇</button>',
      data: '<a ui-sref="editTask({taskId: row.TaskID})">编辑任务时间</a>'
    }
  ];
  $ctrl.methods = {

  };

}

module.exports = {
  template: require('./test.component.html'),
  controller: controller
};