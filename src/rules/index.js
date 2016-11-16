var newRuleComponent = require('./new-rule.component');
var newRulesComponent = require('./new-rules.component');
var rulesListComponent = require('./rules-list.component');
var viewRulesComponent = require('./view-rules.component');
var importRulesComponent = require('./import-rules.component');
var importRulesModalComponent = require('./import-rules-modal.component');
var states = require('./states');
var configs = require('./configs');
var services = require('./services');

module.exports = {
  components: {
    rulesList: rulesListComponent,
    viewRules: viewRulesComponent,
    newRule: newRuleComponent,
    newRules: newRulesComponent,
    importRules: importRulesComponent,
    importRulesModal: importRulesModalComponent,
  },
  states: [
    states.rulesListState,
    states.newRulesState,
    states.newRuleState,
    states.viewRulesState,
    states.importRuleState,
  ],
  factories: {
    rulesService: services.rulesService
  },
  runBlocks: [ configs.runFormlyConfig ]
};