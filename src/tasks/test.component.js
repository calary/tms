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
    type: 'uiSelect2',
    templateOptions: {
      optionsAttr: 'bs-options',
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


  this.itemArray = [
      {id: 1, name: 'first'},
      {id: 2, name: 'second'},
      {id: 3, name: 'third'},
      {id: 4, name: 'fourth'},
      {id: 5, name: 'fifth'},
  ];
  this.selected = { value: this.itemArray[0] };

  this.day = new Date();
  this.maxDate = new Date(2016, 11,20);

  this.range = {
    min: new Date(2016, 10, 3),
    max: new Date(2016, 10, 27)
  };
}

module.exports = {
  template: require('./test.component.html'),
  controller: controller
};