require('./xx-editable.directive.css');

directive.$inject = ['$timeout', '$q'];
function directive($timeout, $q){

	return {
		retrict: 'AE',
		scope: {
      text: '=',
      submit: '&'
		},
		template: require('./xx-editable.directive.html'),
		link: function($scope, $ele, $attr){
		  $scope.editText = '';
      $scope.isEditing = false;
      $scope.edit = edit;
      $scope.cancel = cancel;
      $scope.ok = ok;

      function edit(){
        $scope.isEditing = true;
        $scope.editText = $scope.text;

        $timeout(function(){
          var input = $ele.find('input')[0];
          input.focus();  
        }, 0);
      }

      function cancel(){
        $scope.isEditing = false;
      }

      function ok(){
        $q.when($scope.submit({
          text: $scope.editText
        })).then(function(data){
          $scope.isEditing = false;
          $scope.text = $scope.editText;
        });
      }
		}
	};
}

module.exports = directive;