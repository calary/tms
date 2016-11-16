// $state otherwise
exports.otherwiseConfigBlock = ['$urlRouterProvider', function ($urlRouterProvider) { 
  $urlRouterProvider.otherwise('/task'); 
}];

// $http interceptor
exports.httpConfigBlock = ['$httpProvider', function ($httpProvider) { 
  // 以jquery的params方法的方式对请求参数序列化
  $httpProvider.defaults.paramSerializer = '$httpParamSerializerJQLike';

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
        
        if(status == 1) {
          return $q.resolve(data.Data);
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
