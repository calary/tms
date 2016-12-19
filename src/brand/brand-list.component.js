// require('./task-list.component.css');

controller.$inject = ['brandService'];
function controller(brandService){
  var $ctrl = this;
  $ctrl.store = store;
  $ctrl.data = [];
  $ctrl.update = null; // 等xx-table初始化后填充

  // xx-table配置
  $ctrl.tableConfig = {
    data: [],
    firstUpdate: true,
    getData: getData,
    columns: [
      {
        head: 'ID',
        data: '{{ ($index + 1) }}'
      }, {
        head: '品牌/平台名称',
        data: '{{ row.name }}'
      }, {
        head: '创建时间',
        data: '{{ row.createtime | date2 }}'
      }, {
        head: '最后操作时间',
        data: '{{ row.updatetime | date2 }}'
      }, {
        head: '操作',
        data: '修改名称 启用 停用'
      }
    ],
    methods: {
      getStatusTitle: getStatusTitle,
      getPercent: getPercent
    }
  };
  $ctrl.onTableInit = onTableInit;

  function getData(){
    return brandService.getBrands();
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
}

module.exports = {
  template: require('./brand-list.component.html'),
  controller: controller
};