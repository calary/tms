exports.runFormlyConfig = ['formlyConfig', 'formlyValidationMessages',
 function(formlyConfig, formlyValidationMessages){

  formlyConfig.setType(require('./types/bindTag'));

}];