module.exports = function(){
  var DATE_REG = /^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d/;
  var OFFSET = computeOffset();

  // var str = '2016-10-20T19:17:05';
  // var d = fromString(str);
  // var str2 = toString(d);
  // console.log(str);
  // console.log(d);
  // console.log(str2);

  return {
    isDateString: isDateString,
    fromString: fromString,
    toString: toString
  };

  function computeOffset(){
    var d = new Date();
    return d.getTimezoneOffset() * 60 * 1000;
  }

  function isDateString(str){
    return DATE_REG.test(str);
  }
  function fromString(str){
    if(isDateString(str)) {
      var date = new Date(str);
      // console.group('dateService');
      // console.log(str, OFFSET);
      // console.log(date.toLocaleString());
      // console.log(new Date(date.getTime() + OFFSET).toLocaleString());
      // console.groupEnd();
      return new Date(date.getTime() + OFFSET);
    }
  }
  function toString(date){
    if(date instanceof Date) {
      var _date = new Date(date.getTime() - OFFSET);
      return _date.toISOString().substr(0, 19);
    }
  }
};
