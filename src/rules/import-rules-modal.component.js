controller.$inject = ['$scope'];
function controller($scope){

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

  var modulesOptions = [
    { id: 1, label: '页面'},
    { id: 2, label: '点击'},
    { id: 3, label: '订单'},
    { id: 4, label: '购物车'},
    { id: 5, label: '会员'},
    { id: 6, label: '微信'},
    { id: 7, label: '会员积分'},
    { id: 8, label: '搜索'},
    { id: 9, label: '活动'},
    { id: 10, label: '优惠卷'},
    { id: 11, label: '中奖'},
    { id: 12, label: '答题'}
  ];

  this.model = {
    selectRules: testData[0].id,
    selectModule: modulesOptions[0].id,
  };
  
  this.options = {

  };

  this.fields = [{
    key: 'selectRules',
    type: 'select2',
    templateOptions: {
      label: '选择标签规则组',
      valueProp: 'id',
      labelProp: 'label',
      options: testData,
      required: true
    }
  }, {
    key: 'selectModule',
    type: 'select2',
    templateOptions: {
      label: '选择网站模块',
      valueProp: 'id',
      labelProp: 'label',
      options: modulesOptions,
      required: true
    }
  }];

  this.selectFile = function(){

  }

}

module.exports = {
  template: require('./import-rules-modal.component.html'),
  controller: controller,
  bindings: {
    resolve: '<',
    close: '&',
    dismiss: '&'
  }
};