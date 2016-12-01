module.exports = [
  { 
    className: 'row',
    fieldGroup: [
      {
        key: 'url',
        type: 'input2',
        className: 'col-sm-6',
        templateOptions: {
          label: 'URL',
          required: true
        }
      }, {
        key: 'title',
        type: 'input2',
        className: 'col-sm-6',
        templateOptions: {
          label: 'Title',
          required: true
        }
      }, {
        key: 'statistic',
        type: 'checkbox2',
        className: 'col-sm-6',
        templateOptions: {
          label: '统计型'
        }
      }
    ]
  },
  {
    key: 'statisticArray',
    type: 'repeatSection',
    templateOptions: {
      btnText:'Add another investment',
      fields: [
        {
          className: 'row',
          fieldGroup: [
            {
              key: 'time',
              type: 'timeRange2',
              className: 'col-sm-6',
              templateOptions: {
                label: '统计周期'
              }
            }
          ]
        }, {
          className: 'row',
          fieldGroup: [
            {
              key: 'count',
              type: 'input2',
              className: 'col-sm-6',
              templateOptions: {
                label: '触发次数',
                required: true
              }
            }, {
              key: 'count2',
              type: 'input2',
              className: 'col-sm-6',
              templateOptions: {
                required: true
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
  }
];