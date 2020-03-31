function rectangle(){
  return{
    'per':function(w,h){
      return 2 * (w + h) ;
    },
    'a':function(w,h){
      return w * h;
    }
  };
}
