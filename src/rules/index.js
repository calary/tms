var newRuleComponent = require('./new-rule.component');
var newRuleListComponent = require('./new-rule-list.component');
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
    newRuleList: newRuleListComponent,
    newRules: newRulesComponent,
    importRules: importRulesComponent,
    importRulesModal: importRulesModalComponent,
  },
  states: [
    states.rulesListState,
    states.newRulesState,
    states.newRuleListState,
    states.newRuleState,
    states.viewRulesState,
    states.importRuleState,
  ],
  factories: {
    rulesService: services.rulesService
  },
  runBlocks: [ configs.runFormlyConfig ]
};