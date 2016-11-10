exports.rulesListState = {
  parent: 'app',
  name: 'rulesList',
  url: '/rules',
  title: '规则组列表',
  component: 'rulesList'
};
exports.newRulesState = {
  parent: 'app',
  name: 'newRules',
  url: '/rules/new',
  title: '新建规则组',
  component: 'newRules'
};
exports.viewRulesState = {
  parent: 'app',
  name: 'viewRules',
  url: '/rules/:rulesId',
  title: '规则组详情',
  component: 'newRules'
};
exports.newRuleState = {
  parent: 'app',
  name: 'newRule',
  url: '/rules/:rulesId/rule/new',
  title: '新建规则组',
  component: 'newRule'
};
exports.importRuleState = {
  parent: 'app',
  name: 'importRules',
  url: '/rule/import',
  title: '导入规则组',
  component: 'importRules'
};
