var constants = require('../../main/constants');
var compareOptions = constants.compareOptions;

module.exports = [
  {
    key: 'url',
    type: 'input2',
    templateOptions: {
      label: 'URL',
      required: true
    }
  }, {
    key: 'title',
    type: 'input2',
    templateOptions: {
      label: 'Title',
      required: true
    }
  }, {
    key: 'statistic',
    type: 'checkbox2',
    templateOptions: {
      label: '统计型'
    }
  },
  // { 
  //   className: 'row',
  //   fieldGroup: [
      
  //   ]
  // },
  {
    key: 'statisticArray',
    type: 'repeatSection',
    templateOptions: {
      btnText:'Add another investment',
      fields: [
        {
          key: 'time',
          type: 'timeRange2',
          className: 'col-sm-6',
          templateOptions: {
            label: '统计周期'
          }
        }, {
          className: 'row',
          fieldGroup: [
            {
              key: 'count',
              type: 'select2',
              className: 'col-sm-6',
              templateOptions: {
                label: '触发次数',
                required: true,
                valueProp: 'id',
                labelProp: 'title',
                options: compareOptions
              }
            }, {
              key: 'count2',
              type: 'input2',
              className: 'col-sm-6',
              templateOptions: {
                required: true,
                addonRight: {
                  text: '次'
                }
              }
            }
          ]
        }, {
          key: 'test2',
          type: 'bindTag',
          templateOptions: {
            required: true
          }
        }
      ]
    }
  },
  {
    key: 'time',
    type: 'timeRange2',
    templateOptions: {
      label: '统计周期'
    }
  },
  {
    key: 'test',
    type: 'input2',
    templateOptions: {
      label: 'site ID/广告ID',
      required: true
    }
  }, {
    key: 'test2',
    type: 'bindTag',
    templateOptions: {
      required: true
    }
  }, {
    key: 'checks',
    type: 'multiCheckbox',
    templateOptions: {
      valueProp: 'id',
      labelProp: 'title',
      options: compareOptions,
      require: true
    }
  }
];