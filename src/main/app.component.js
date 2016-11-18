controller.$inject = ['$state', '$transitions', 'store'];
function controller($state, $transitions, store){
  var $ctrl = this;
  $ctrl.$state = $state;
  $ctrl.store = store;
  $ctrl.isNewRules = false;

  $transitions.onSuccess({}, function(){
    isNewRules();
  });

  isNewRules();
  function isNewRules(){
    var is = $state.is('newRules') || $state.is('newRuleList') || $state.is('newRule');
    $ctrl.isNewRules = is;
  }
}
module.exports = {
  template: require('./app.component.html'),
  controller: controller
};