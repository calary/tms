module.exports = ['$filter', function($filter){
  var DATE_REG = /^(\d{4})-(\d\d)-(\d\d)(T|\s)(\d\d):(\d\d):(\d\d)/;
  var OFFSET = computeOffset();

  // var str = '2016-10-20T19:17:05';
  // var d = fromString2(str);
  // var str2 = toString2(d);
  // console.log(str);
  // console.log(d && d.toLocaleString());
  // console.log(str2);

  return {
    isDateString: isDateString,
    fromString: fromString2,
    toString: toString2
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
      return new Date(date.getTime() + OFFSET);
    }
  }
  function toString(date){
    if(date instanceof Date) {
      var _date = new Date(date.getTime() - OFFSET);
      return _date.toISOString().substr(0, 19);
    }
  }
  function fromString2(str){
    if(isDateString(str)) {
      // 替换掉日期字符串中的T、
      // 让Date构造器以本地时区解析
      str = str.replace('T', ' ');
      return new Date(str);
    }
  }
  function toString2(date){
    // 使用date过滤器，返回格式化的日期字符串
    return $filter('date')(date, 'yyyy-MM-dd HH:mm:ss');
  }
}];
