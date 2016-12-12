module.exports = {
  name: 'time',
  template: '<datetime-picker ng-model="model[options.key]"></datetime-picker>',
  wrapper: ['bootstrapLabel', 'bootstrapHasError'],
  defaultOptions: {
    ngModelAttrs: {
      mode: {
        bound: 'mode',
        attribute: 'mode'
      },
      minDate: {
        bound: 'min-date',
        attribute: 'min-date'
      },
      maxDate: {
        bound: 'max-date',
        attribute: 'max-date'
      }
    }
  }
};