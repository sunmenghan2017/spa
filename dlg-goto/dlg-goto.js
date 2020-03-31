var $dlgGoto = (function(){
  var html = ''
    + '<div class="notepad-dlg-goto">'
      + '<div class="dialogbox">'
        + '<div class="titlebar">'
          + '<p class="title">转到指定行</p>'
          + '<span class="close-btn">✖</span>'
        + '</div>'
        + '<div class="main">'
          + '<label for="">行号(L)</label>'
          + '<br>'
          + '<input type="text" class="txt-line-num" autofocus>'
          + '<br>'
          + '<input type="button" class="btn-goto" value="转到">'
          + '<input type="button" class="btn-cancel" value="取消">'
        + '</div>'
      + '</div>'
    + '</div>'
  var $dlg = $(html);
  var cfg = {
    container:'body',
  }
  
  function show(conf){
    $(cfg.container).append($dlg);
    $.extend(cfg,conf);
  }
  return {show:show}
}())
