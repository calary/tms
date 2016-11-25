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
        disabled = true;
        $ele.attr('disabled', true);
        var rtn = $scope.$apply($attr.xxClick);
        $q.when(rtn).finally(function(){
          disabled = false; 
          $ele.attr('disabled', false);
        });

      }
		}
	};
}

module.exports = directive;