var baseModalComponent = require('./base-modal.component');
var datetimeModalComponent = require('./datetime-modal.component');
var baseModalService = require('./base-modal.service');
var datetimeModalService = require('./datetime-modal.service');
var dateService = require('./date.service');
var date2Filter = require('./date2.filter');
var inputFileDirective = require('./input-file.directive');
var xxBindHtmlDirective = require('./xx-bind-html.directive');
var xxTableDirective = require('./xx-table.directive');
var datetimePickerDirective = require('./datetime-picker.directive');
var datetimeRangeDirective = require('./datetime-range.directive');
var configs = require('./configs');

module.exports = {
  components: {
    baseModal: baseModalComponent,
    datetimeModal:　datetimeModalComponent
  },
  directives: {
    inputFile: inputFileDirective,
    datetimePicker: datetimePickerDirective,
    datetimeRange: datetimeRangeDirective,
    // ng-bind-html的进化版
    // 支持绑定包含{{}}，指令的html
    xxBindHtml: xxBindHtmlDirective,
    xxTable: xxTableDirective
  },
  factories: {
    $modalService: baseModalService,
    $datetimeModalService: datetimeModalService,  
    dateService: dateService  
  },
  filters: {
    date2: date2Filter
  },
  runBlocks: [
    configs.cacheTemplateRunBlock,
    configs.runFormlyConfig
  ]
};