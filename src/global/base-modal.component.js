controller.$inject = ['$timeout'];
function controller($timeout){
  var $ctrl = this;
	var config = $ctrl.resolve.config;
	console.log(config);
	$ctrl.title       = config.title || '';
	$ctrl.content     = config.content || '';
	$ctrl.okLabel     = config.okLabel || '确定';
	$ctrl.cancelLabel = config.cancelLabel || '取消';
	$ctrl.hideOk      = config.hideOk || false;
	$ctrl.hideCancel  = config.hideCancel || false;
	$ctrl.handleOk    = config.handleOk || null;
	$ctrl.isToast     = config.isToast || null;
	$ctrl.timeout     = config.timeout || 3000;
	$ctrl.ok          = ok;
	$ctrl.cancel      = cancel;
	$ctrl.lock        = false;

	if($ctrl.isToast) {
		$timeout(cancel, vm.timeout);
	}

	function ok(){
		if($ctrl.handleOk) {
			if($ctrl.lock) { return; }
			$ctrl.lock = true;
			$ctrl.handleOk().then(function(){
				$ctrl.close();
			}).finally(function(){
				$ctrl.lock = false;
			});
		} else {
			$ctrl.close();
		}
	}

	function cancel(){
		$ctrl.dismiss();
	}
}

module.exports = {
  template: require('./base-modal.component.html'),
  controller: controller,
  bindings: {
  	resolve: '<',
    close: '&',
    dismiss: '&'
  }
};
