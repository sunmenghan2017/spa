$(function (){
  //get dom elem
  var $width  = $('#width'),
      $heigth = $('#heigth'),
      $btn    = $('#calculate'),
      $per = $('#perimeter'),
      $area = $('#area');
  function decimalSave(num,n){
    return Math.round(num * Math.pow(10,n)) / Math.pow(10,n);
  }
  function validate(field){
    //get DOM error message
    var $date = $(field),
        $msg = $(field+'-mag');
    //validate null
    if($date.val() === ''){
      $msg.html('不能为空！');
      $date.select();
      return false;
    }
    //validate number
    if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test($date.val())){
     
      $msg.html('必须为数值！');
      $date.select();
      return false;
    }
    //validate > 0
    if(Number($date.val()) < 0 ){
      $msg.html('必须大于0！');
      $date.select();
       return false;
    }

    $msg.html('');
    return true;
  }
  //表单检验
  /*calc button click event*/
  $btn.click(function (){
    //validete if error return;
    if(!validate('#width') || !validate('#heigth')) return; 

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
  //字段检验
  $width.focusout(function(){
    if(!validate('#width')) $width.select();
  });
  $heigth.focusout(function(){
    if(!validate('#heigth')) $heigth.select();
  });
  //字符检验
  $width.keypress(function(e){
    //e.key 
    //e.target.value
    //e.preventDefault()屏蔽键盘输入
    //console.log(e.key);
    //console.log(e.target.value);
    if(/[abcdf-zABCDF-Z`~!@#$%^&*()\=_+[\]{}|;:'",<>/?\\]/.test(e.key)){
      e.preventDefault();
      return;
    }
    var pos = e.target.selectionStart,
        con = e.target.value;
    console.log(pos);
    if(e.key === 'e'){
      if(pos === 0 || con.indexOf('e') != -1 || con.indexOf('E') !== -1){
        e.preventDefault();
        return;
      } 
      if(pos === 1 && con.substring(0,1) == '-'){
        e.preventDefault();
        return;
      }
    }  
  });
  $heigth.keypress(function(e){

  })
});


