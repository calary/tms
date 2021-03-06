// require('./task-list.component.css');

controller.$inject = ['$modalService', 'utils', 'brandService'];
function controller($modalService, utils, brandService){
  var $ctrl = this;
  $ctrl.data = [];
  $ctrl.update = null; // 等xx-table初始化后填充
  $ctrl.create = create;
  $ctrl.edit = edit;
  $ctrl.test = 'hello~~~';
  $ctrl.testSubmit = function(text){
    alert(text);
  };

  // formly配置 
  $ctrl.model = {};
  $ctrl.options = {};
  $ctrl.fields = [
    {
      key: 'name',
      type: 'input2',
      templateOptions: {
        label: '品牌名称',
        required: true
      },
      validators: {
        testLength: {
          expression: function(viewValue, modelValue) {
            var value = modelValue || viewValue;
            var len = utils.strlen(value);
            return len >= 4 && len <= 20;
          },
          message: '"请输入4-20个字符（中文算2个字符）"'
        }
      }
    }
  ];

  // xx-table配置
  $ctrl.tableConfig = {
    data: [],
    firstUpdate: true,
    getData: getData,
    columns: [
      {
        head: 'ID',
        data: '{{ row.Primaryid }}'
      }, {
        head: '品牌/平台名称',
        data: '<xx-editable text="row.name"></xx-editable>'
      }, {
        head: '创建时间',
        data: '{{ row.createtime | date2 }}'
      }, {
        head: '最后操作时间',
        data: '{{ row.updatetime | date2 }}'
      }, {
        head: '启用/停用',
        data: '<switch ng-model="row.isuse" class="green"></switch><div class="cover" xx-click="methods.toggle(row)"></div>'
      }
    ],
    methods: {
      toggle: toggle
      // getStatusTitle: getStatusTitle,
      // getPercent: getPercent
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
  function create(){
    if($ctrl.form.$invalid) {
      return;
    }
    brandService.editBrand({
      name: $ctrl.model.name
    }).then(function(data){
      $ctrl.tableConfig.data.push(data);
      $ctrl.options.resetModel();
      $modalService.alert({
        content: '创建成功', 
        hideCancel: true
      });
    }, function(reason){
      if(reason && reason.status == -1) {
        reason = '您已离线';
      }
      $modalService.alert({content: reason});
    });
  }
  function edit(id){
    return function(name){
      brandService.editBrand({
        method: 1,
        Primaryid: id,
        name: name
      });
    };
  }
  function toggle(brand){
    if(!brand || !brand.Primaryid) {
      return;
    }
    brandService.editBrand({
      method: 1,
      Primaryid: brand.Primaryid,
      isuse: brand.isuse ? 0 : 1
    }).then(function(data){
      var i;
      for(i in data) {
        brand[i] = data[i];
      }
    });
  }



}

module.exports = {
  template: require('./brand-list.component.html'),
  controller: controller
};