module.exports = {
  name: 'static2',
  template: '<p class="form-control-static">{{model[options.key]}}</p>',
  wrapper: ['horizontalBootstrapLabel', 'bootstrapHasError'],
  defaultOptions: {
    noFormControl: true
  }
};