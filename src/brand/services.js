brandService.$inject = ['$q', '$http', 'apiBaseUrl'];
function brandService($q, $http, apiBaseUrl){
  
  return {
    getBrands: getBrands,
    editBrand: editBrand
  };
  function filter(brand){
    brand.isuse = parseInt(brand.isuse) || 0;
    return brand;
  }

  // isuse = 0
  function getBrands(params){
    params = params || {};
    return $http.get(apiBaseUrl + '/brand/api/findbrand', {params: params}).then(function(data){
      if(data && data.listbrand) {
        data.listbrand.count = data.count;
        data.listbrand.forEach(filter);
        return data.listbrand;
      }
      return data;
    });
  }
  // method = 1
  // name
  // isuse = 0, 1
  // Primaryid
  function editBrand(data){
    return $http.post(apiBaseUrl + '/brand/api/Brand', data)
    .then(filter);
  }
}

exports.brandService = brandService;