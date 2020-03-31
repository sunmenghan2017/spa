$(function (){
  //get dom elem
  var $width  = $('#width'),
      $heigth = $('#heigth'),
      //$btn    = $('#calculate'),
      $per = $('#perimeter'),
      $form = $('form'),
      $area = $('#area');
  function decimalSave(num,n){
    return Math.round(num * Math.pow(10,n)) / Math.pow(10,n);
  }
  /*calc button click event*/
  //$btn.click(function (){
  $form.submit(function(e){
    e.preventDefault();
    //get value
    var w = Number($width.val());
    var h = Number($heigth.val());

    //calculate
    var rect = rectangle();

    //decimalSave
    var p = decimalSave(rect.per(w,h),2);
    var a = decimalSave(rect.a(w,h),2);
    //output
    $per.val(p);
    $area.val(a);
  }) ; 
});


