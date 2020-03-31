/*
var $timerBtn = (function(){
  function show(conf){
  var timer;
  var cfg = {
    container:'body',
    time:6,
    title:'同意',
    cfg:''
  }
  var html = '<input class="timer-button" type="button" value="同意(6s)" disabled>';
  var $btn = $('<input type="button"  disabled>');
  var $btn1=$('<input type="button" value="同意(3s) disabled">')
  $btn.css({
    height:'50px',
    width:'100px'
  })
  
    //1.DOM draw
    //$(container).html(html);
    $(conf.container).append($btn);
    $.extend(cfg,conf);
    $btn.val(cfg.title+'('+cfg.time+'s)');
    //e.event bind
  timer = setInterval(function(){
    cfg.time--;
    if(cfg.time == 0){
      clearInterval(timer);
      $btn.val(`确定`);
      $btn.removeAttr('disabled');
    }else{
      $btn.val(`稍等(${cfg.time}s)`);
    }
  },1000);
  $btn.click(function(){
    cfg.onClick();
  })
  }

  
  return {
    show:show
  }
}())
*/

requirejs.config({
  'paths':{
    'jquery':'//apps.bdimg.com/libs/jquery/2.1.4/jquery.min'
  }
})
define(['jquery'],function($){
function TimerButton(){
  var $btn = $('<input class="timer-button" type="button" disabled>'),
      cfg = {
        container:'body',
        time:6,
        title:'Ok',
        onClick:null
      },
      timer;
  this.show = function(conf){
    $(cfg.container).append($btn);
    $.extend(cfg,conf);
    $btn.val(cfg.title+'('+cfg.time+'s)');
    timer = setInterval(function(){
      cfg.time--;
      if(cfg.time === 0){
        clearInterval(timer);
        $btn.val('确定');
        $btn.removeAttr('disabled')
      }else{
        $btn.val('稍等('+cfg.time+'s)')
      }
    },1000)
  }
}
return TimerButton;
})
//
/*封装成对象，方案
1.简单对象字面量,不完全是面向对象，不能包括私有方法
var timerBtn = {
  show:function()
}
2.工厂函数,一个函数返回值是一个简单对象
var timerBtn = (function(){
  return {
    show:function(){}
  }
}())
3.构造函数
function TimerBtn(){

}
var timerBtn = new TimerBtn();
*/
