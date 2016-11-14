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
      'response': function(response) {
        var _mock_ = response.config && 
          response.config.params && 
          response.config.params._mock_;

          console.log(response);
        if(!_mock_) {
          return response;
        }
          // console.log(response);

        var data = response.data;
        var status = data && data.Status;
        var information = data && data.Information;
        console.log('nya', status, information);
        if(status == 1) {
          // console.log('eee');
          // response.data = data.Data;
          // console.log(response);
          // return response;
          return $q.resolve(data.Data);
        }

        return $q.reject(information);
      }
    };
  }]);
}];

// $httpBackend 模拟返回
exports.httpBackendRunBlock = ['$httpBackend', function ($httpBackend) { 
  
  $httpBackend.whenGET(/^\/api\/findtask/).respond(200, { 
    "Status": "1",
    "Information": "成功！ ",
    "Data":{
      "count":1,
      "Data":[{
        "SiteID":1542,
        "RuleGroupType":"规则组类型",
        "RuleGroupName":"规则组名称",
        "StartDate":"开始时间",
        "EndDate":"结束时间",
        "Status":"状态",
        "CreateTime":"创建时间"
      }]
    }
  });

  // $httpBackend.whenGET(/\/uib/).passThrough();
}];
