// $state otherwise
exports.otherwiseConfigBlock = ['$urlRouterProvider', function ($urlRouterProvider) { 
  $urlRouterProvider.otherwise('/task'); 
}];

// $http interceptor
exports.httpConfigBlock = ['$httpProvider', function ($httpProvider) { 
  
  $httpProvider.defaults.transformRequest = function(data, headersGetter){
    var formData = new FormData();
    angular.forEach(data, function(value, key){
      formData.append(key, value);
    });
    return formData;
  };
  // 修改post的默认请求头
  $httpProvider.defaults.headers.post = {
    'Content-Type': undefined
  };
  // 请求拦截器
  $httpProvider.interceptors.push(['$q', function($q){
    return {
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
          _data.Information = information;
          return $q.resolve(_data);
        }

        return $q.reject(information);
      }
    };
  }]);
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
