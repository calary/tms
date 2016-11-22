module.exports = {
  name: 'static2',
  template: '<p class="form-control-static">{{to.text}}</p>',
  wrapper: ['horizontalBootstrapLabel', 'bootstrapHasError'],
  defaultOptions: {
    noFormControl: true
  }
};