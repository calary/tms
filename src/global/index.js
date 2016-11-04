var baseModalComponent = require('./base-modal.component');
var datetimeModalComponent = require('./datetime-modal.component');
var baseModalService = require('./base-modal.service');
var datetimeModalService = require('./datetime-modal.service');

module.exports = {
  components: {
    baseModal: baseModalComponent,
    datetimeModal:　datetimeModalComponent
  },
  factories: {
    $modalService: baseModalService,
    $datetimeModalService: datetimeModalService    
  }
};