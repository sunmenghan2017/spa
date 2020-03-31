var $timerButton=(function(){
    var 
    $btn=$('<input type="button" value="同意（6s）" disabled/>'),
        // 启用
        $btn2=$('<input type="button" value="同意（6s）"/>'),
        cfg = {
            container:'body',
            num:6,
            title:'同意',
            onClick:function(){
                console.log("点击了定时器按钮")
            }
        },
        num,
        timer;
    $btn.css({
        height:'50px',
        width:'120px'
    })
    function show(conf){
        // 1.DOM draw
        $(cfg.container).append($btn);
        $.extend(cfg,conf);
        num = cfg.num;
        $btn.val(cfg.title+'('+cfg.num+'s)')
        timer=setInterval(function(){
            num--;
            if(num===0){
                clearInterval(timer);
                $btn.val(cfg.title);
                $btn.removeAttr("disabled");
            }else{
                $btn.val(cfg.title+'('+num+'s)')
            }
        },1000)
    }
    function sshow(conf){
        $(cfg.container).append($btn2);
        $.extend(cfg,conf);
        num = cfg.num;
        $btn2.val(cfg.title);
        $btn2.click(function(){
            timer=setInterval(function() {
                num--;
                if(num===0){
                    clearInterval(timer);
                    $btn2.removeAttr("disabled");
                    $btn2.val(cfg.title);
                }
                else{
                    $btn2.val(cfg.title+'('+num+'s)');
                    $btn2.attr("disabled","disabled");
                }
            }, 1000);
        })
    }
     $btn.click(function(){
        cfg.onClick();
     })
     return{
         show:show,
         sshow:sshow
     }
}())