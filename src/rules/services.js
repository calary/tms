rulesService.$inject = ['$q', '$http', 'apiBaseUrl'];
function rulesService($q, $http, apiBaseUrl){
  
  return {
    getRules: getRules,
    importFile: importFile
  };

  function getRules(params){
    params = params || {};
    return $http.get(apiBaseUrl + '/task/api/findtask', {params: params});
  }

  function importFile(file){
    var data = { pic: file };
    return $http.post(apiBaseUrl + '/rule/api/RuleImport', data);
  }
}

exports.rulesService = rulesService;