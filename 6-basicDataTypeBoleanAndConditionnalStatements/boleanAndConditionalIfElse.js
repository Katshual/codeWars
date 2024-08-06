export function trueOrFalse(val){
    if (val==false || val===null|| NaN || val===undefined)    return 'false';             
    else     return 'true';
  }
