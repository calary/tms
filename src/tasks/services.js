tasksService.$inject = ['$q', '$http', 'apiBaseUrl'];
function tasksService($q, $http, apiBaseUrl){
  
  return {
    getTasks: getTasks
  };

  function getTasks(params){
    params = params || {};
    return $http.get(apiBaseUrl + '/api/findtask', {params: params});
  }
}

exports.tasksService = tasksService;