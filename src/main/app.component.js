controller.$inject = ['$state'];
function controller($state){
  this.$state = $state;
  // this.isActive('test');
}
module.exports = {
  template: require('./app.component.html'),
  controller: controller
};