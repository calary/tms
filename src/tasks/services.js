tasksService.$inject = ['$q', '$http', 'apiBaseUrl'];
function tasksService($q, $http, apiBaseUrl){
  
  return {
    getTasks: getTasks,
    createTask: createTask
  };

  function getTasks(params){
    params = params || {};
    return $http.get(apiBaseUrl + '/task/api/findtask', {params: params});
  }

  function createTask(_data){
    var data = {
      RuleGroupID: _data.RuleGroupID,
      SiteID:      _data.SiteID,
      StartTime:   _data.StartTime,
      EndTime:     _data.EndTime
    };
    return $http.post(apiBaseUrl + '/task/api/task', data);
  }
}

exports.tasksService = tasksService;