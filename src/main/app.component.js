controller.$inject = ['$state', 'store'];
function controller($state, store){
  var $ctrl = this;
  $ctrl.$state = $state;
  $ctrl.store = store;
  $ctrl.isNewRules - isNewRules;

  function isNewRules(){
    console.log($state.is('newRules'),$state.is('newRuleList'),$state.is('newRule'));
    var is = $state.is('newRules') || $state.is('newRuleList') || $state.is('newRule');
    return is && 'active';
  }
  // this.isActive('test');
}
module.exports = {
  template: require('./app.component.html'),
  controller: controller
};