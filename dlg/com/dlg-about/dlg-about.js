var $dlgAbout = (function(){
    var $dlg = $(''
        + '<div class="notepad-dlg-mask notepad-dlg-about">'
          + '<div class="dialogbox notepad-dlgbox">'
            + '<div class="notepad-dlg-titlebar">'
              + '<p class="title">关于“记事本”</p>'
              + '<span class="close-btn" title="关闭">✖</span>'
            + '</div>'
            + '<div class="main notepad-dlg-main">'
              + '<h1 class="slogan">JSNotepad</h1>'
              + '<hr>'
              + '<img class="app-logo" src="../../images/notepad-icon-32.png" alt="JSNotepad">'
              + '<div class="info">'
                + '<p>作者：孙梦涵</p>'
                + '<p>QQ：1079352098</p>'
                + '<p>仓库地址：<a href="https://github.com/sunmenghan2017/web-jsnotepad.git" target="_blank">https://github.com/sunmenghan2017/web-jsnotepad.git</a></p>'
              + '</div>'
              + '<input class="btn-ok btn" type="button" value="确定" autofocus>'
            + '</div>'
          + '</div>'
        + '</div>');

    var $btnOk = $dlg.find('.btn-ok'),
        $btnClose = $dlg.find('.close-btn'),
        $titleBar = $dlg.find('.notepad-dlg-titlebar')

    function destory(){
        $dlg.remove()
    }

    function show(){
        $('body').append($dlg);
        //只有光标在titleBar上 .dialogbox才允许拖动
        $dlg.find('.dialogbox').draggable({handle: $titleBar});
        $btnOk.focus();

        $btnOk.click(destory);
        $btnClose.click(destory);

        $dlg.click(function(e){
            $btnOk.focus();
            e.stopPropagation();
        })
    }
    return {show:show}
}())