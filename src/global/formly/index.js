/* global angular */
(function() {

  'use strict';

  var app = angular.module('formlyExample', ['formly', 'ngMessages'], function config(formlyConfigProvider) {
    formlyConfigProvider.setType([
      {
        name: 'input',
        templateUrl: 'input-template.html'
      },
      {
        name: 'checkbox',
        templateUrl: 'checkbox-template.html'
      }
    ]);
    formlyConfigProvider.setWrapper([
      {
        template: [
          '<div class="formly-template-wrapper form-group"',
          'ng-class="{\'has-error\': options.validation.errorExistsAndShouldBeVisible}">',
          '<label for="{{::id}}">{{options.templateOptions.label}} {{options.templateOptions.required ? \'*\' : \'\'}}</label>',
          '<formly-transclude></formly-transclude>',
          '<div class="validation"',
          'ng-if="options.validation.errorExistsAndShouldBeVisible"',
          'ng-messages="options.formControl.$error">',
          '<div ng-messages-include="validation.html"></div>',
          '<div ng-message="{{::name}}" ng-repeat="(name, message) in ::options.validation.messages">',
          '{{message(options.formControl.$viewValue, options.formControl.$modelValue, this)}}',
          '</div>',
          '</div>',
          '</div>'
        ].join(' ')
      },
      {
        template: [
          '<div class="checkbox formly-template-wrapper-for-checkboxes form-group">',
          '<label for="{{::id}}">',
          '<formly-transclude></formly-transclude>',
          '</label>',
          '</div>'
        ].join(' '),
        types: 'checkbox'
      }
    ]);
  });
  
  app.run(function(formlyConfig, formlyValidationMessages) {
    formlyConfig.extras.ngModelAttrsManipulatorPreferBound = true;
    formlyValidationMessages.addStringMessage('maxlength', 'Your input is WAAAAY too long!');
    formlyValidationMessages.messages.pattern = function(viewValue, modelValue, scope) {
      return viewValue + ' is invalid';
    };
    formlyValidationMessages.addTemplateOptionValueMessage('minlength', 'minlength', '', 'is the minimum length', 'Too short');
  });


  app.controller('MainCtrl', function MainCtrl(formlyVersion) {
    var vm = this;
    // funcation assignment
    vm.onSubmit = onSubmit;

    // variable assignment
    vm.author = { // optionally fill in your info below :-)
      name: 'Kent C. Dodds',
      url: 'https://twitter.com/kentcdodds'
    };
    vm.exampleTitle = 'Template Wrappers & Validation'; // add this
    vm.env = {
      angularVersion: angular.version.full,
      formlyVersion: formlyVersion
    };

    vm.model = {};

    vm.fields = [
      {
        key: 'email',
        type: 'input',
        templateOptions: {
          label: 'Email',
          required: true,
          type: 'email',
          maxlength: 10,
          minlength: 6,
          placeholder: 'example@example.com'
        }
      },
      {
        key: 'ip',
        type: 'input',
        validators: {
          ipAddress: {
            expression: function(viewValue, modelValue) {
              var value = modelValue || viewValue;
              return /(\d{1,3}\.){3}\d{1,3}/.test(value);
            },
            message: '$viewValue + " is not a valid IP Address"'
          }
        },
        templateOptions: {
          label: 'IP Address',
          required: true,
          type: 'text',
          placeholder: '127.0.0.1',
        },
        validation: {
          messages: {
            required: function(viewValue, modelValue, scope) {
              return scope.to.label + ' is required'
            }
          }
        }
      },
      {
        key: 'mac',
        type: 'input',
        templateOptions: {
          label: 'MAC Address',
          required: true,
          placeholder: '49-8A-BD-4E-00-1D',
          pattern: '([0-9A-F]{2}[:-]){5}([0-9A-F]{2})'
        }
      },
      {
        type: 'checkbox',
        key: 'checked',
        templateOptions: {
          label: 'Check this'
        }
      },
      {
        key: 'checked2',
        type: 'checkbox',
        wrapper: null,
        templateOptions: {
          label: 'no wrapper here...'
        }
      }
    ];

    vm.originalFields = angular.copy(vm.fields);

    // function definition
    function onSubmit() {
      alert(JSON.stringify(vm.model), null, 2);
    }
  });

})();