var baseModalComponent = require('./base-modal.component');
var datetimeModalComponent = require('./datetime-modal.component');
var baseModalService = require('./base-modal.service');
var datetimeModalService = require('./datetime-modal.service');
var xInputFileDirective = require('./x-input-file.directive');
var datetimePickerDirective = require('./datetime-picker.directive');
var datetimeRangeDirective = require('./datetime-range.directive');
var configs = require('./configs');

module.exports = {
  components: {
    baseModal: baseModalComponent,
    datetimeModal:　datetimeModalComponent
  },
  directives: {
    inputFile: xInputFileDirective,
    datetimePicker: datetimePickerDirective,
    datetimeRange: datetimeRangeDirective
  },
  factories: {
    $modalService: baseModalService,
    $datetimeModalService: datetimeModalService    
  },
  runBlocks: [
    configs.cacheTemplateRunBlock,
    configs.runFormlyConfig
  ]
};