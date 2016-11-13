// ui-bootstrap支持自定义timepicker的template-url
// 为此使用$templateCache服务实现模板的打包
// 除此之外的component模块均使用require引入template。

exports.cacheTemplateRunBlock = ['$templateCache', function($templateCache){

  $templateCache.put(
    'global/datetime-modal.timepicker.html', 
    require('./datetime-modal.timepicker.html')
  ); 
}];


// exports.runFormlyConfig = ['formlyConfig', function(formlyConfig){
//   // bootstrap formly插件提供了
//   // wrapper: bootstrapLabel, has-error
//   // types: checkbox, multiCheckbox, input, radio, select, textarea
//   // bootstrap的form默认样式是一行label一行input
  
//   // 新增基本type
//   // plainTimeRange
  
//   // .form-horizontal样式
//   // 新增wrapper: horizontalBootstrapLabel
//   // 新增types: input2, select2,
  
//   // set templates here
//   formlyConfig.setWrapper({
//     name: 'horizontalBootstrapLabel',
//     template: [
//       '<label for="{{::id}}" class="col-sm-4 control-label">',
//         // '{{to.label}} {{to.required ? "*" : ""}}',
//         '{{to.label}}',
//       '</label>',
//       '<div class="col-sm-8">',
//         '<formly-transclude></formly-transclude>',
//       '</div>'
//     ].join(' ')
//   });
  
//   formlyConfig.setWrapper({
//     name: 'horizontalBootstrapCheckbox',
//     template: [
//       '<div class="col-sm-4"></div>',
//       '<div class="col-sm-8">',
//         '<formly-transclude></formly-transclude>',
//       '</div>'
//     ].join(' ')
//   });
  
//   // 水平 静态文本
//   // templateOptions.label 标签 
//   // templateOptions.text 内容
//   formlyConfig.setType({
//     name: 'static2',
//     template: '<p class="form-control-static">{{::to.text}}</p>',
//     wrapper: ['horizontalBootstrapLabel', 'bootstrapHasError'],
//     defaultOptions: {
//       noFormControl: true
//     }
//   });
//   // 水平 input
//   formlyConfig.setType({
//     name: 'input2',
//     extends: 'input',
//     wrapper: ['horizontalBootstrapLabel', 'bootstrapHasError']
//   });
//   // 水平 checkbox
//   formlyConfig.setType({
//     name: 'checkbox2',
//     extends: 'checkbox',
//     wrapper: ['horizontalBootstrapCheckbox', 'bootstrapHasError']
//   });
//   // 水平 select
//   formlyConfig.setType({
//     name: 'select2',
//     extends: 'select',
//     wrapper: ['horizontalBootstrapLabel', 'bootstrapHasError']
//   });

//   // 时间范围（min-max）未完成
//   // 不包含label
//   formlyConfig.setType({
//     name: 'plainTimeRange',
//     template: [
//       '<div class="formly-time-range">' +
//         '<div class="formly-time-start">' +
//           '<div class="input-group">' +
//             '<p class="form-control">{{ model[options.key].min | date:"yyyy-MM-dd HH:mm:ss" }}</p>' +
//             '<span class="input-group-btn">' +
//               '<button class="btn btn-default" type="button" ng-click="selectMinTime()">' +
//                 '<span class="glyphicon glyphicon-calendar"></span>' +
//               '</button>' +
//             '</span>' +
//           '</div>' +
//         '</div>' +
//         '<div class="formly-time-divider" style="line-height: 34px;"> 至 </div>' +
//         '<div class="formly-time-end">' +
//           '<div class="input-group">' +
//             '<p class="form-control">{{ model[options.key].max | date:"yyyy-MM-dd HH:mm:ss" }}</p>' +
//             '<span class="input-group-btn">' +
//               '<button class="btn btn-default" type="button" ng-click="selectMaxTime()">' +
//                 '<span class="glyphicon glyphicon-calendar"></span>' +
//               '</button>' +
//             '</span>' +
//           '</div>' +
//         '</div>' +
//       '</div>'
//     ].join(''),
//     // defaultOptions: {
//     //   noFormControl: false
//     // },
//     controller: ['$scope', '$datetimeModalService', function($scope, $datetimeModalService){
//       var model = $scope.model;
//       var key = $scope.options.key;
//       // console.log($scope.options);
//       // console.log($scope);

//       $scope.selectMinTime = function(){
//         var date = model[key] = model[key] || {};
//         $datetimeModalService.show({
//           date: date.min,
//           maxDate: date.max
//         }).then(function(newDate){
//           date.min = newDate;
//           checkValidity();
//         });
//       };

//       $scope.selectMaxTime = function(){
//         var date = model[key] = model[key] || {};
//         $datetimeModalService.show({
//           date: date.max,
//           minDate: date.min
//         }).then(function(newDate){
//           date.max = newDate;
//           checkValidity();
//         });
//       };  

//       function checkValidity() {
//         var valid = !!(model[key] && model[key].min && model[key].max);
//         if($scope.to.required) {
//           $scope.form.$setValidity('required', valid);
//         }
//       }

//       checkValidity();
//     }]
//   });
  
//   formlyConfig.setType({
//     name: 'timeRange',
//     extends: 'plainTimeRange',
//     wrapper: ['bootstrapLabel', 'bootstrapHasError']
//   });

//   formlyConfig.setType({
//     name: 'timeRange2',
//     extends: 'plainTimeRange',
//     wrapper: ['horizontalBootstrapLabel', 'bootstrapHasError']
//   });

//   // 测试用
//   formlyConfig.setType({
//     name: 'alert',
//     template: '<button class="btn btn-default" ng-click="alert();">{{to.text}}</button>',
//     controller: ['$scope', function($scope){
//       $scope.alert = function(){
//         alert('alert from TEST');
//       };
//     }]
//   });









//   // // http://angular-formly.com/#/example/integrations/ui-select-angular-1-4
//   // // NOTE: This next line is highly recommended. 
//   // // Otherwise Chrome's autocomplete will appear over your options!
//   // formlyConfig.extras.removeChromeAutoComplete = true;
  
//   // // Configure custom types
//   // formlyConfig.setType({
//   //   name: 'ui-select-single',
//   //   extends: 'select',
//   //   template: require('./ui-select-single.html')
//   // });
//   // formlyConfig.setType({
//   //   name: 'ui-select-single-select2',
//   //   extends: 'select',
//   //   template: require('./ui-select-single-select2.html')
//   // });
//   // formlyConfig.setType({
//   //   name: 'ui-select-single-search',
//   //   extends: 'select',
//   //   template: require('./ui-select-single-async-search.html')
//   // });

//   // formlyConfig.setType({
//   //   name: 'ui-select-multiple',
//   //   extends: 'select',
//   //   template: require('./ui-select-multiple.html')
//   // });

//   // // 实现表单中的重复区域
//   // // http://angular-formly.com/#/example/advanced/repeating-section
//   // var unique = 1;
//   // formlyConfig.setType({
//   //   name: 'repeatSection',
//   //   templateUrl: 'repeatSection.html',
//   //   controller: function($scope) {
//   //     $scope.formOptions = {formState: $scope.formState};
//   //     $scope.addNew = addNew;
      
//   //     $scope.copyFields = copyFields;
      
      
//   //     function copyFields(fields) {
//   //       fields = angular.copy(fields);
//   //       addRandomIds(fields);
//   //       return fields;
//   //     }
      
//   //     function addNew() {
//   //       $scope.model[$scope.options.key] = $scope.model[$scope.options.key] || [];
//   //       var repeatsection = $scope.model[$scope.options.key];
//   //       var lastSection = repeatsection[repeatsection.length - 1];
//   //       var newsection = {};
//   //       if (lastSection) {
//   //         newsection = angular.copy(lastSection);
//   //       }
//   //       repeatsection.push(newsection);
//   //     }
      
//   //     function addRandomIds(fields) {
//   //       unique++;
//   //       angular.forEach(fields, function(field, index) {
//   //         if (field.fieldGroup) {
//   //           addRandomIds(field.fieldGroup);
//   //           return; // fieldGroups don't need an ID
//   //         }
          
//   //         if (field.templateOptions && field.templateOptions.fields) {
//   //           addRandomIds(field.templateOptions.fields);
//   //         }
          
//   //         field.id = field.id || (field.key + '_' + index + '_' + unique + getRandomInt(0, 9999));
//   //       });
//   //     }
      
//   //     function getRandomInt(min, max) {
//   //       return Math.floor(Math.random() * (max - min)) + min;
//   //     }
//   //   }
//   // });
  
//   console.log('run config....');

// }];