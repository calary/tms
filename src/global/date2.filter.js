module.exports = ['$filter', 'dateService', function($filter, dateService){
  // 服务器使用北京时间存储DateTime
  // 格式为 'yyyy-MM-ddThh:mm:ss'
  return function(date){
    if(typeof(date) === 'string') {
      return date.replace('T', ' ');
    }
    return '';
    // var pos = date.indexOf('T');
    // if(date.indexOf('T') >= 0)


    // var format = 'yyyy-MM-dd hh:mm:ss';
    // if(edit) {
    //   return $filter('date')(date, 'yyyy-MM-dd hh:mm:ss');
    // }
    // console.log(date);
    // console.log(_date);
    // var _date = dateService.fromString(date);
    // return $filter('date')(_date, 'yyyy-MM-dd hh:mm:ss');
  }
}];
