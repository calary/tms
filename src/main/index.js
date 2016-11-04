var appComponent = require('./app.component');
var states = require('./states');
var configs = require('./configs');

require('./main.css');

module.exports = {
  components: {
    app: appComponent,
  },
  states: [states.appState],
  configBlocks: [configs.otherwiseConfigBlock],
  runBlocks: []
};