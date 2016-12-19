brandService.$inject = ['$q', '$http', 'apiBaseUrl'];
function brandService($q, $http, apiBaseUrl){
  
  return {
    getBrands: getBrands,
    createTask: createTask,
    editTask: editTask
  };
  // isuse = 0
  function getBrands(params){
    params = params || {};
    return $http.get(apiBaseUrl + '/brand/api/findbrand', {params: params});
  }
  // method = 1
  // name
  // isuse = 0, 1
  // Primaryid
  function editBrand(data){
    return $http.post(apiBaseUrl + '/Brand?name=testupdate', data);
  }
}

exports.brandService = brandService;