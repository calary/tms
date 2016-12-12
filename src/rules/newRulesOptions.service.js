var types = {
  101: require('./fields/101.js')
};
console.log(types[101]);
module.exports = ['compareOptions', 'fieldOptionsService',
  function(compareOptions, fieldOptionsService){

  var injectors = {
    compareOptions: compareOptions,
    fieldOptionsService: fieldOptionsService
  };

  return {
    get: get
  };

  function get(config) {
    var id = config.id;
    var model = config.model;

    return types[id](injectors, model);

  }

 
}];