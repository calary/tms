controller.$inject = ['$modalService', '$datetimeModalService'];
function controller($modalService, $datetimeModalService){
  console.log($modalService);
  this.alert = function(){
    // $modalService.alert({
    //   title: '提示',
    //   content: '一些内容'
    // });
    $datetimeModalService.show({
      
    }).then(function(date){
      console.log(arguments);
      console.log('select date', date);
    });
  };
  this.selDate = new Date();
  this.selTime = new Date();
  this.optionsHour = createOptions(0, 23);
  this.selHour = '0';
  this.options = {
    showWeeks: false
  };

  function createOptions(start, end){
    var arr = [], i;
    for(i = start; i <= end; i++) {
      arr.push(i + '');
    }
    return arr;
  }



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
  this.fields = [
    {
      key: 'singleOption',
      type: 'select',
      templateOptions: {
        label: '选择标签规则组',
        valueProp: 'id',
        labelProp: 'label',
        options: testData,
        required: true
      }
    }, {
      key: 'sideId',
      type: 'input',
      templateOptions: {
        label: 'site ID/广告ID',
      }
    }
  ];

  // function definition
  function onSubmit() {
    alert(JSON.stringify(vm.model), null, 2);
  }
}

module.exports = {
  template: require('./edit-task.component.html'),
  controller: controller
};