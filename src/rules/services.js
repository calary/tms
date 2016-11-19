rulesService.$inject = ['$q', '$http', 'apiBaseUrl', 'rulesTypes'];
function rulesService($q, $http, apiBaseUrl, rulesTypes){
  
  return {
    getRules: getRules,
    getRule: getRule,
    getRuleTypes: getRuleTypes,
    importFile: importFile
  };

  function getRules(params){
    params = params || {};
    return $http.get(apiBaseUrl + '/task/api/findtask', {params: params});
  }

  function getRule(id){
    // return $http.get(apiBaseUrl + '/task/api/TaskDetail/' + id);

    var data = {
      "GroupType":"网站",
      "SiteID":"1700",
      "GroupName":"奶芙官网打标签规则",
      "GroupStatus":"已加入任务",
      "JoinTaskTime":"2016-10-10 12:22:05",
      "CreateTime":"2016-10-08 15:09:24",
      "Module": [
        {
          "Name":"页面",
          "Content":
            [
              {
                "ID":"53b9f64b-abd5-11e6-8096-06fab88a43c3",
                "Key":"点击首页-立即购买",
                "Tag":"树1-树2-树3-奶芙爱好者<br>树1-树2-树3-树4-轻食爱好者",
                "Weight":0.1,
                "ExecCount":5,
                "Status":"启用"
              },
              {
                "ID":"53b9f64b-abd5-11e6-8096-06fab88a43c3",
                "Key":"点击首页-立即购买",
                "Tag":"树1-树2-树3-奶芙爱好者<br>树1-树2-树3-树4-轻食爱好者",
                "Weight":0.1,
                "ExecCount":5,
                "Status":"启用"
              }
            ]
        },
        {
          "Name":"订单",
          "Content":
            [
              {
                "ID":"53b9f64b-abd5-11e6-8096-06fab88a43c3",
                "Key":"点击首页-立即购买",
                "Tag":"树1-树2-树3-奶芙爱好者<br>树1-树2-树3-树4-轻食爱好者",
                "Weight":0.1,
                "ExecCount":5,
                "Status":"启用"
              },
              {
                "ID":"53b9f64b-abd5-11e6-8096-06fab88a43c3",
                "Key":"点击首页-立即购买",
                "Tag":"树1-树2-树3-奶芙爱好者<br>树1-树2-树3-树4-轻食爱好者",
                "Weight":0.1,
                "ExecCount":5,
                "Status":"启用"
              }
            ]
        }
      ]
    };
    return $q.resolve(data);
  }

  function getRuleTypes(rulesType){
    var type = rulesTypes.find(function(type){
      return type.title === rulesType;
    });
    if(type) {
      return [].concat(type.types);
    }
    return [];
  }

  function importFile(file){
    var data = { pic: file };
    return $http.post(apiBaseUrl + '/rule/api/RuleImport', data);
  }
}

exports.rulesService = rulesService;