tasksService.$inject = ['$q', '$http'];
function tasksService($q, $http){
  
  return {
    getTasks: getTasks
  };

  function getTasks(){
    return $http.get('/api/findtask', {params: { _mock_: true }});
  }
}

exports.tasksService = tasksService;