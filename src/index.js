// 文件结构与代码参考ui-router的sample
// https://ui-router.github.io/sample-app-ng1/

var appModule = require('./app.module');
var formlyModule = require('./formly'); // 自定义formly表单类型
var globalModule = require('./global');
var mainModule = require('./main');
var tasksModule = require('./tasks');
var rulesModule = require('./rules');
var brandModule = require('./brand');

// 模块模板
// key为注册名，value为注册时所需的配置对象
var BLANK_MODULE = {
    states: [], 
    constants: {}, 
    components: {}, 
    directives: {}, 
    services: {}, 
    factories: {}, 
    filters: {}, 
    configBlocks: [], 
    runBlocks: []
};

var subModules = [
  formlyModule, 
  globalModule, 
  mainModule, 
  tasksModule, 
  rulesModule,
  brandModule]
.map(function(module){
  // 保证每个模块都包含模块模板里的key
  return Object.assign({}, BLANK_MODULE, module);
});
// console.log(subModules);
subModules.forEach(function(module){
  // 配置state
  appModule.config(['$stateProvider', function($stateProvider){
    return module.states.forEach(function (state) { 
      return $stateProvider.state(state); 
    }); 
  }]);
  // 注册常量
  Object.keys(module.constants).forEach(function (name) {
    return appModule.constant(name, module.constants[name]); 
  });
  // 注册component
  Object.keys(module.components).forEach(function (name) {
    return appModule.component(name, module.components[name]); 
  });
  // 注册directive
  Object.keys(module.directives).forEach(function (name) { 
    return appModule.directive(name, module.directives[name]); 
  });
  // 注册service
  Object.keys(module.services).forEach(function (name) { 
    return appModule.service(name, module.services[name]); 
  });
  // 注册factory
  Object.keys(module.factories).forEach(function (name) {
    return appModule.factory(name, module.factories[name]); 
  });
  // 注册filter
  Object.keys(module.filters).forEach(function (name) { 
    return appModule.filter(name, module.filters[name]); 
  });
  // 注册config回调
  module.configBlocks.forEach(function (configBlock) { 
    return appModule.config(configBlock); 
  });
  // 注册run回调
  module.runBlocks.forEach(function (runBlock) {
    return appModule.run(runBlock); 
  });
});
