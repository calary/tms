require('./input-file.directive.css');

function resetInput(input){
  var form = document.createElement('form');
  var div = document.createElement('div');
  var parent = input.parentNode;

  parent.replaceChild(div, input);
  form.appendChild(input);
  form.reset();
  parent.replaceChild(input, div);
}

directive.$inject = [];
function directive(){
  console.log('wa');
	return {
		retrict: 'AE',
		scope: {
			onChange: '&'
		},
		transclude: true,
		template: [
			'<span ng-transclude></span>',
			'<input type="file">'
		].join(''),
		link: function($scope, $ele, $attr){
			var $input = $ele.find('input');
      // console.log('ere');
			$input.bind('change', onChange);

			function onChange(e) {
				var files = e.target.files;

	      if(files.length > 0) {
          $scope.onChange({file: files[0]});
	        resetInput(e.target);
	      }
			}
		}
	};
}

module.exports = directive;