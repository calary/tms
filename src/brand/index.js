var brandListComponent = require('./brand-list.component');
var states = require('./states');
var services = require('./services');

module.exports = {
  components: {
    brandList: brandListComponent
  },
  states: [
    states.brandListState
  ],
  factories: {
    brandService: services.brandService
  }
};