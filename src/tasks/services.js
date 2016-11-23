tasksService.$inject = ['$q', '$http', 'apiBaseUrl'];
function tasksService($q, $http, apiBaseUrl){
  
  return {
    getTasks: getTasks,
    createTask: createTask,
    editTask: editTask
  };

  function getTasks(params){
    params = params || {};
    return $http.get(apiBaseUrl + '/task/api/findtask', {params: params});
  }

  function createTask(_data){
    var data = {
      RuleGroupID: _data.RuleGroupID,
      SiteID:      _data.SiteID,
      StartDate:   _data.StartDate,
      EndDate:     _data.EndDate
    };
    return $http.post(apiBaseUrl + '/task/api/task', data);
  }

  function editTask(_data) {
    var data = {
      HYUniqueID:  _data.TaskID,
      StartDate:   _data.StartDate,
      EndDate:     _data.EndDate
    };
    return $http.post(apiBaseUrl + '/task/api/task?method=1', data);
  }
}

exports.tasksService = tasksService;