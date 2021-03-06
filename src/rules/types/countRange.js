module.exports = {
  name: 'countRange',
  template: require('./countRange.html'),
  controller: ['$scope', 'compareOptions', function($scope, compareOptions) {

    var model = $scope.model;
    var key = $scope.options.key;

    $scope.countFields = [
      {
        key: key + '.w1', 
        type: 'select2',
        className: 'col-sm-4',
        templateOptions: {
          labelClass: 'col-sm-6',
          valueClass: 'col-sm-6 pr0',
          label: '触发次数',
          // required: true,
          valueProp: 'id',
          labelProp: 'title',
          options: compareOptions
        } 
      },
      {
        key: key + '.w2', 
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
        key: key + '.w3', 
        type: 'checkbox2',
        className: 'col-sm-1 nowrap',
        templateOptions: {
          labelClass: 'hide',
          valueClass: 'ml15',
          label: '且'
        }
      },
      {
        key: key + '.w4', 
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
          'templateOptions.disabled': '!model.' + key + '.w3'
        }
      },
      {
        key: key + '.w5', 
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
          'templateOptions.disabled': '!model.' + key + '.w3'
        }
      }
    ];
  }]
};