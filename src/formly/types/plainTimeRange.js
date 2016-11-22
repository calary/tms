module.exports = {
  name: 'plainTimeRange',
  template: '<datetime-range ng-model="model[options.key]"></datetime-range>',
  defaultOptions: {
    ngModelAttrs: {
      mode: {
        bound: 'mode',
        attribute: 'mode'
      }
    }
  }
};