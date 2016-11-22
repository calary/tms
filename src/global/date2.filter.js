module.exports = ['$filter', 'dateService', function($filter, dateService){

  return function(date){
    return $filter('date')(date, 'yyyy-MM-dd HH:mm:ss');
  }
}];
