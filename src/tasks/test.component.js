controller.$inject = ['$modalService', '$datetimeModalService'];
function controller($modalService, $datetimeModalService){
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

  this.options = {};

  this.fields = [];

  this.fields.push({
    // 静态
    type: 'static2',
    templateOptions: {
      label: 'static2',
      text: 'text'
    }
  });
  // 单选
  this.fields.push({
    key: 'singleOption',
    type: 'select2',
    templateOptions: {
      label: 'select',
      valueProp: 'id',
      labelProp: 'label',
      options: testData,
      required: true
    }
  });
  // input text
  this.fields.push({
    key: 'text',
    type: 'input2',
    templateOptions: {
      label: 'input',
      minlength: 10,
      maxlength: 20,
      required: true
    }
  });
  this.fields.push({
    key: 'time',
    type: 'timeRange2',
    optionsTypes: ['timeRange2'],
    templateOptions: {
      label: '设置任务周期',
      required: true
    }
  });
  // this.fields.push({});

  // function definition
  function onSubmit() {
    alert(JSON.stringify(vm.model), null, 2);
  }
}

module.exports = {
  template: require('./test.component.html'),
  controller: controller
};