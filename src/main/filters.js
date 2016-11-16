exports.taskStatusFilter = ['taskStatus', function(taskStatus){
  return function(input){
    if(!input) {
      return '';
    }
    var status = taskStatus.find(function(item){
      return item.id == input;
    });
    return status && status.title;
  };
}];