exports.runFormlyConfig = ['formlyConfig', 'formlyValidationMessages',
 function(formlyConfig, formlyValidationMessages){

  formlyConfig.setType(require('./types/bindTag'));
  formlyConfig.setType(require('./types/countRange'));

}];