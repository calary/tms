// $state otherwise
exports.otherwiseConfigBlock = ['$urlRouterProvider', function ($urlRouterProvider) { 
  $urlRouterProvider.otherwise('/task'); 
}];

// $http interceptor
exports.httpConfigBlock = ['$httpProvider', 'dateServiceProvider', 
function ($httpProvider, dateServiceProvider) { 

  var dateService = dateServiceProvider.$get();
  
  $httpProvider.defaults.transformRequest = function(data, headersGetter){
    var str = [];
    var key, value, output;
    for(key in data){
      value = data[key];
      str.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
    }
    return str.join('&');
  };
  // 修改post的默认请求头
  $httpProvider.defaults.headers.post = {
    'Content-Type': 'application/x-www-form-urlencoded'
  };
  // 请求拦截器
  $httpProvider.interceptors.push(['$q', function($q){
    return {
      'request': function(req) {
        var fromApi = /^http/.test(req.url);

        if(!fromApi) {
          return req;
        }

        console.log(req);

        // 转换local time为server time
        req.params = recurse(
          req.params, 
          angular.isDate, 
          dateService.toString);
        req.data = recurse(
          req.data, 
          angular.isDate, 
          dateService.toString);

        return req;
      },
      'response': function(res) {
        var fromApi = /^http/.test(res.config.url);

        if(!fromApi) {
          return res;
        }

        var data = res.data;
        var status = data && data.Status;
        var information = data && data.Information;
        var _data = data && data.Data || {};
        
        if(status == 1) {

          // 转换server time为local time
          console.log(_data);
          _data = recurse(
            _data, 
            dateService.isDateString, 
            dateService.fromString);

          _data.Information = information;
          return $q.resolve(_data);
        }

        return $q.reject(information);
      }
    };
  }]); 
  
  // 递归方法，递归处理一个object里的所有属性
  // 返回一个新的object
  // condition 终止条件
  // callback 终止回调
  function recurse(obj, condition, callback){
    if(condition(obj)) {
      return callback(obj);
    }
    // 无视文件
    if(obj instanceof File) {
      return obj;
    }
    if(angular.isObject(obj)) {
      var _obj;
      if(angular.isArray(obj)) {
        _obj = [];
      } else {
        _obj = {};
      }
      angular.forEach(obj, function(value, key){
        _obj[key] = recurse(value, condition, callback);
      });
      return _obj;
    }
    return obj; 
  }
}];

// $httpBackend 模拟返回
// exports.httpBackendRunBlock = ['$httpBackend', function ($httpBackend) { 
  
//   $httpBackend.whenGET(/^\/api\/findtask/).respond(200, { 
//     "Status": "1",
//     "Information": "成功！ ",
//     "Data":{
//       "count":1,
//       "Data":[{
//         "SiteID":1542,
//         "RuleGroupType":"规则组类型",
//         "RuleGroupName":"规则组名称",
//         "StartDate":"开始时间",
//         "EndDate":"结束时间",
//         "Status":"状态",
//         "CreateTime":"创建时间"
//       }]
//     }
//   });

//   // $httpBackend.whenGET(/\/uib/).passThrough();
// }];
