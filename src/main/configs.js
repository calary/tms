exports.runFormlyConfig = ['formlyConfig', function(formlyConfig){
  // http://angular-formly.com/#/example/integrations/ui-select-angular-1-4
  // NOTE: This next line is highly recommended. 
  // Otherwise Chrome's autocomplete will appear over your options!
  formlyConfig.extras.removeChromeAutoComplete = true;
  
  // Configure custom types
  formlyConfig.setType({
    name: 'ui-select-single',
    extends: 'select',
    template: require('./ui-select-single.html')
  });
  formlyConfig.setType({
    name: 'ui-select-single-select2',
    extends: 'select',
    template: require('./ui-select-single-select2.html')
  });
  formlyConfig.setType({
    name: 'ui-select-single-search',
    extends: 'select',
    template: require('./ui-select-single-async-search.html')
  });

  formlyConfig.setType({
    name: 'ui-select-multiple',
    extends: 'select',
    template: require('./ui-select-multiple.html')
  });

  // 实现表单中的重复区域
  // http://angular-formly.com/#/example/advanced/repeating-section
  var unique = 1;
  formlyConfig.setType({
    name: 'repeatSection',
    templateUrl: 'repeatSection.html',
    controller: function($scope) {
      $scope.formOptions = {formState: $scope.formState};
      $scope.addNew = addNew;
      
      $scope.copyFields = copyFields;
      
      
      function copyFields(fields) {
        fields = angular.copy(fields);
        addRandomIds(fields);
        return fields;
      }
      
      function addNew() {
        $scope.model[$scope.options.key] = $scope.model[$scope.options.key] || [];
        var repeatsection = $scope.model[$scope.options.key];
        var lastSection = repeatsection[repeatsection.length - 1];
        var newsection = {};
        if (lastSection) {
          newsection = angular.copy(lastSection);
        }
        repeatsection.push(newsection);
      }
      
      function addRandomIds(fields) {
        unique++;
        angular.forEach(fields, function(field, index) {
          if (field.fieldGroup) {
            addRandomIds(field.fieldGroup);
            return; // fieldGroups don't need an ID
          }
          
          if (field.templateOptions && field.templateOptions.fields) {
            addRandomIds(field.templateOptions.fields);
          }
          
          field.id = field.id || (field.key + '_' + index + '_' + unique + getRandomInt(0, 9999));
        });
      }
      
      function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
    }
  });
  
  console.log('run config....');

}];