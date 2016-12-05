module.exports = {
  name: 'static2',
  template: '<p class="form-control-static">{{to.text}}</p>',
  wrapper: ['validation', 'horizontalBootstrapLabel', 'bootstrapHasError'],
  defaultOptions: {
    noFormControl: true
  }
};