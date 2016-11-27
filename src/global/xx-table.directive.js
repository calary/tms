require('./xx-table.directive.css');

// data: []   // 数据
// firstUpdate: bool 是否初次调用
// columns // 列的配置
// methods // 为独立作用域注入一些方法
// getData  // 由本指令来请求数据

directive.$inject = ['$timeout', '$q'];
function directive($timeout, $q){

	return {
		retrict: 'AE',
		scope: {
      config: '=',   // 配置
      onInit: '&'
		},
		template: require('./xx-table.directive.html'),
		link: function($scope, $ele, $attr){
			// 0 初始
      // 1 已请求
      // 2 请求失败
      // 3 请求成功  
      
      $scope.status = 0;
      $scope.error = '';
      $scope.data = [];
      $scope.update;
      $scope.columns = [];
      $scope.methods = {};
      var reqCount = 0;

      init();

      function init(){
        var config = $scope.config || {};
        // console.log(config);
        $scope.data = config.data || [];
        $scope.columns = config.columns || [];
        $scope.methods = config.methods || {};
        $scope.update = update;
        $scope.onInit({ update: update });
        if('data' in config) {
          $scope.status = 3;
        }
        if(config.firstUpdate) {
          update();
        }
      }


      function update(){
        console.log('update called')
        var cb = $scope.config.getData;
        if(!cb) {
          return;
        }
        var res = cb && cb();
        var curReqCount = ++reqCount;

        if(angular.isArray(res)) {
          $scope.status = 3;
          $scope.data = res;
        } else {
          $scope.status = 1;
          $q.all([res, timeout()]).then(function(data){
            console.log('res then succ', curReqCount, reqCount)
            // 请求去重
            if(curReqCount !== reqCount) {
              return;
            }
            $scope.status = 3;
            $scope.data = data[0];
          }, function(error){
            console.log(error, curReqCount, reqCount);
            if(curReqCount !== reqCount) {
              return;
            }
            // 是否已经离线
            if(error && error.status === -1) {
              $scope.error = '您已离线';
            } else {
              $scope.error = '错误' + error;
            }
            $scope.status = 2;
          });    
        }
      }

      function timeout(){
        return $timeout(function(){
          console.log('at least 300ms');
        }, 300);
      }
		}
	};
}

module.exports = directive;