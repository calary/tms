directive.$inject = ['$compile'];
function directive($compile){
	return {
		retrict: 'A',
		link: function($scope, $ele, $attr){
			$scope.$watch(function(){
        return $scope.$eval($attr.xxBindHtml);
      }, function(value){
        $ele.html(value);
        $compile($ele.contents())($scope);
      });
		}
	};
}

module.exports = directive;