function getTop(e){
  var offset=e.offsetTop;
  if(e.offsetParent!=null) offset+=getTop(e.offsetParent);
  return offset;
}
function getLeft(e){
  var offset=e.offsetLeft;
  if(e.offsetParent!=null) offset+=getLeft(e.offsetParent);
  return offset;
}

export {getTop,getLeft};
