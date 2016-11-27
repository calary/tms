directive.$inject = ['$timeout', '$q'];
function directive($timeout, $q){

	return {
		retrict: 'A',
		link: function($scope, $ele, $attr){
			var disabled = false;
      
      $ele.on('click', clickHandler);

      function clickHandler(){
        if(disabled) {
          return;
        }
        var rtn = $scope.$apply($attr.xxClick);
        var isPromise = !!(rtn && rtn.then);
        if(isPromise) {
          $ele.attr('disabled', true);
          disabled = true;
          $q.when(rtn).finally(function(){
            disabled = false; 
            $ele.attr('disabled', false);
          });  
        }
      }
		}
	};
}

module.exports = directive;