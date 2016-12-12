module.exports = function(injectors, model){

  var compareOptions = injectors.compareOptions;
  var fieldOptionsService = injectors.fieldOptionsService;

  return [
    {
      key: 'url',
      type: 'input2',
      templateOptions: {
        labelClass: 'col-sm-2',
        valueClass: 'col-sm-10',
        label: 'URL',
        required: true
      }
    }, {
      key: 'title',
      type: 'input2',
      templateOptions: {
        labelClass: 'col-sm-2',
        valueClass: 'col-sm-10',
        label: 'Title',
        required: true
      }
    }, {
      key: 'statistic',
      type: 'checkbox2',
      templateOptions: {
        labelClass: 'col-sm-2',
        valueClass: 'col-sm-10',
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
            templateOptions: {
              label: '统计周期'
            }
          }, {
            key: 'time',
            type: 'countRange',
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
    fieldOptionsService.getTimeRange({
      label: '统计周期',
      required: true,
      key: ['minDate', 'maxDate']
    }),
    {
      key: 'time',
      type: 'timeRange2',
      templateOptions: {
        labelClass: 'col-sm-2',
        valueClass: 'col-sm-10',
        label: '统计周期'
      }
    }, {
      key: 'test2',
      type: 'bindTag',
      templateOptions: {
        required: true
      }
    }, {
      key: 'count22',
      type: 'countRange',
    }
  ];
}