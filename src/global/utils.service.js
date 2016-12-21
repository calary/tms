module.exports = function(){
  return {
    strlen: strlen
  };

  function strlen(str){
    if(!str || str.length === 0) {
      return 0;
    }

    var i, len, c, count = 0;
    for(i = 0, len = str.length; i < len; i++) {
      c = str.charCodeAt(i);
      if(c >= 0x00 && c <= 0xff) {
        count++;
      }
    }
    return count + (len - count) * 2;
  }
};
