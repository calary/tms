rulesService.$inject = ['$q', '$http', 'apiBaseUrl'];
function rulesService($q, $http, apiBaseUrl){
  
  return {
    getRules: getRules
  };

  function getRules(params){
    params = params || {};
    return $http.get(apiBaseUrl + '/api/FindRuleGroup', {params: params});
  }
}

exports.rulesService = rulesService;