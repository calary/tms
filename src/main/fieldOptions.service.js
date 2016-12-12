module.exports = ['compareOptions', function(compareOptions){

  return {
    getCompare: getCompare,
    getTimeRange: getTimeRange
  };

  function getCompare(config){
    if(config.model) {
      config.model[config.key[0]] = compareOptions[0].id;
      config.model[config.key[3]] = compareOptions[0].id;
    }

    var fields = [
      {
        key: config.key[0], 
        type: 'select2',
        className: 'col-sm-4',
        templateOptions: {
          labelClass: 'col-sm-6',
          valueClass: 'col-sm-6 pr-md-0',
          label: '触发次数',
          // required: true,
          valueProp: 'id',
          labelProp: 'title',
          options: compareOptions
        } 
      },
      {
        key: config.key[1], 
        type: 'input2',
        className: 'col-sm-2',
        templateOptions: {
          labelClass: 'hide',
          valueClass: '__',
          // required: true,
          addonRight: {
            text: '次'
          }
        }
      },
      {
        key: config.key[2], 
        type: 'checkbox2',
        className: 'col-sm-1 nowrap',
        templateOptions: {
          labelClass: 'hide',
          valueClass: 'ml15',
          label: '且'
        }
      },
      {
        key: config.key[3], 
        type: 'select2',
        className: 'col-sm-2',
        templateOptions: {
          labelClass: 'hide',
          valueClass: '__',
          // required: true,
          valueProp: 'id',
          labelProp: 'title',
          options: compareOptions
        },
        expressionProperties: {
          'templateOptions.disabled': '!model.' + config.key[2]
        }
      },
      {
        key: config.key[4], 
        type: 'input2',
        className: 'col-sm-2',
        templateOptions: {
          labelClass: 'hide',
          valueClass: '__',
          // required: true,
          addonRight: {
            text: '次'
          }
        },
        expressionProperties: {
          'templateOptions.disabled': '!model.' + config.key[2]
        }
      }
    ];
    return {
      className: config.className || 'row',
      fieldGroup: fields
    };
  }

  function getTimeRange(config){
    var fields = [
      {
        key: config.key[0],
        type: 'time2',
        className: 'col-sm-6',
        templateOptions: {
          label: config.label,
          required: config.required
        },
        expressionProperties: {
          'templateOptions.maxDate': 'model.' + config.key[1]
        }
      },
      {
        key: config.key[1],
        type: 'time2',
        className: 'col-sm-6',
        templateOptions: {
          label: '至',
          required: config.required
        },
        expressionProperties: {
          'templateOptions.minDate': 'model.' + config.key[0]
        }
      },
    ];

    return {
      className: config.className || 'row',
      fieldGroup: fields
    };
  }
}];