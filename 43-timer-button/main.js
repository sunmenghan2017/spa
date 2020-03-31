requirejs.config({
  'paths':{
    'jquery':'https://apps.bdimg.com/libs/jquery/2.1.4/jquery.min'
  }
})

require(['jquery'],function($){

$(function(){
    var $btnAdd = $('#add');
    $btnAdd.click(function(){
      require(['timer-button'],function(TimerButton){//引用的文件名
      var tb = new TimerButton();
      tb.show({
        container:'#main',
        time:10,
        title:'同意了',
        onClick:function(){
          console.log('同意了')
        }
      })
      })

  })

})
})
