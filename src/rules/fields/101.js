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
      }
    ]
  },
  {
    key: 'statistic',
    type: 'checkbox2',
    templateOptions: {
      label: '统计型'
    }
  },
  {
    type: 'repeatSection',
    templateOptions: {
      btnText:'Add another investment',
      fields: [
        {
          key: 'time',
          type: 'timeRange2',
          templateOptions: {
            label: '统计周期'
          }
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