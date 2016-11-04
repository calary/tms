var newRuleComponent = require('./new-rule.component');
var newRulesComponent = require('./new-rules.component');
var rulesListComponent = require('./rules-list.component');
var viewRulesComponent = require('./view-rules.component');
var states = require('./states');

module.exports = {
  components: {
    rulesList: rulesListComponent,
    viewRules: viewRulesComponent,
    newRule: newRuleComponent,
    newRules: newRulesComponent
  },
  states: [
    states.rulesListState,
    states.viewRulesState,
    states.newRulesState,
    states.newRuleState
  ]
};