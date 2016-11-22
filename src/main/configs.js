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
      if(value instanceof Date) {
        output = value.toISOString();
      } else {
        output = value;
      }
      str.push(encodeURIComponent(key) + '=' + encodeURIComponent(output));
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
  // 处理服务器返回的json中的DateTime
  // 
  var json = {"Status":1,"Information":"成功","Data":{"count":10,"Data":[{"SiteID":"1555","RuleGroupName":"测试规则组1","RuleGroupType":"呼叫中心","StartDate":"2016-10-20T19:17:05","EndDate":"2016-12-25T17:17:05","Status":1,"CreateTime":"2016-11-04T15:39:08","RuleGroupID":"c4fc8001-a261-11e6-8096-06fab88a43c4","TaskID":"08db268a-afbd-11e6-8096-06fab88a43c3"},{"SiteID":"1542","RuleGroupName":"测试规则组","RuleGroupType":"网站","StartDate":"0001-01-01T00:00:00","EndDate":"0001-01-01T00:00:00","Status":3,"CreateTime":"2016-11-04T15:39:08","RuleGroupID":"c4fc8001-a261-11e6-8096-06fab88a43c3","TaskID":"113ef48a-a262-11e6-8096-06fab88a43c3"},{"SiteID":"1542","RuleGroupName":"测试规则组B","RuleGroupType":"网站","StartDate":"0001-01-01T00:00:00","EndDate":"0001-01-01T00:00:00","Status":3,"CreateTime":"2016-11-18T16:09:20","RuleGroupID":"ce2b4c10-cef0-4606-bfa0-d66dd7b37dac","TaskID":"23b6bf4c-8c83-4881-8a8d-1d635d5c0761"},{"SiteID":"1385","RuleGroupName":"试规则组A","RuleGroupType":"社会化媒体","StartDate":"0001-01-01T00:00:00","EndDate":"0001-01-01T00:00:00","Status":3,"CreateTime":"2016-11-22T11:17:31","RuleGroupID":"b671d837-f295-4710-8a3c-09b5dc60bc1e","TaskID":"269897b7-220a-4121-89e2-9200b1a31ba6"},{"SiteID":"1385","RuleGroupName":"测试规则组A","RuleGroupType":"网站","StartDate":"2016-11-21T15:39:37","EndDate":"2016-11-21T15:39:37","Status":3,"CreateTime":"2016-11-22T10:41:23","RuleGroupID":"39ad4c6b-591c-4529-8e69-04bf57ad9ce6","TaskID":"4f0f1fd7-ac47-48e9-acbe-813d522ec9a3"},{"SiteID":"1385","RuleGroupName":"试则组A","RuleGroupType":"广告","StartDate":"2016-11-18T17:37:49","EndDate":"2016-11-26T17:37:49","Status":1,"CreateTime":"2016-11-22T11:35:31","RuleGroupID":"67dd56be-c25c-4212-9923-5489e576c803","TaskID":"5b7f5133-b6e9-4379-bb31-b62b9982cd30"},{"SiteID":"ffff","RuleGroupName":"测试规则组final_1387","RuleGroupType":"网站","StartDate":"0001-01-01T00:00:00","EndDate":"0001-01-01T00:00:00","Status":3,"CreateTime":"2016-11-22T10:23:52","RuleGroupID":"cc410290-d3be-4c31-ab24-1949ca7f0d01","TaskID":"5ed67400-a205-4631-b06f-80fcfcac5ac6"},{"SiteID":null,"RuleGroupName":"kiki十条测试规则组","RuleGroupType":"网站","StartDate":"2016-11-16T17:17:15","EndDate":"2016-11-26T17:17:05","Status":2,"CreateTime":"2016-11-16T16:19:00","RuleGroupID":"53b9f64b-abd5-11e6-8096-06fab88a43c3","TaskID":"9f3b5390-abdd-11e6-8096-06fab88a43c3"},{"SiteID":"jjjj","RuleGroupName":"则组A","RuleGroupType":"网站","StartDate":"0001-01-01T00:00:00","EndDate":"0001-01-01T00:00:00","Status":3,"CreateTime":"2016-11-22T11:47:43","RuleGroupID":"336fc397-d61a-4cff-be18-cf9c0c33fe7f","TaskID":"d2fc1299-e911-497a-a64f-47880c2a1e00"},{"SiteID":"1556","RuleGroupName":"test","RuleGroupType":"网站","StartDate":"2016-11-22T17:17:05","EndDate":"2016-11-26T17:17:05","Status":1,"CreateTime":"2016-11-22T10:22:37","RuleGroupID":"e828ea36-36a6-489c-99dd-58ceff1c4f0b","TaskID":"fcb83260-55ee-4f3f-8b4b-f953bfe6ea27"}]}};
  console.log(dateService);
  var json2 = recurse(json, dateService.isDate, dateService.fromString);

  function recurse(obj, condition, callback){
    if(condition(obj)) {
      return callback(obj);
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

  console.log(json);
  console.log(json2);

  // 服务器时间转本地时间
  function serverToLocalTime(){

  }

  function localToServerTime(){

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
