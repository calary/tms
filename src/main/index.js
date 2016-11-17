var appComponent = require('./app.component');
var constants = require('./constants');
var states = require('./states');
var configs = require('./configs');
var filters = require('./filters');

require('./main.css');

module.exports = {
	constants: {
    store: constants.store,
    apiBaseUrl: constants.apiBaseUrl,
		rulesTypes: constants.rulesTypes,
		ruleTypes: constants.ruleTypes,
		taskStatus: constants.taskStatus,
		boolOptions: constants.boolOptions,
		timeOptions: constants.timeOptions,
		compareOptions: constants.compareOptions,
		sexOptions: constants.sexOptions,
		pointsOptions: constants.pointsOptions,
		couponOptions: constants.couponOptions
	},
  components: {
    app: appComponent,
  },
  filters: {
    taskStatusFilter: filters.taskStatusFilter
  },
  states: [states.appState],
  configBlocks: [
    configs.otherwiseConfigBlock, 
    configs.httpConfigBlock
  ],
  runBlocks: [
    
  ]
};