$(function () {
    //设置照片宽度
    var clientW=document.documentElement.clientWidth;
    var clientH=document.documentElement.clientHeight;
    $('.slide').children('img').css({width: clientW,height: clientH});
    $('.font').children('img').css({width: clientW,height: clientH});

    //调用整屏滚动
    $('#dowebok').fullpage({
        // sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90','#abc','#bcd'],
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
        menu: '#menu'
    });

    //banner按钮hover
    $('.banner-btn a').hover(function() {
        $(this).addClass('a-hover');
    }, function() {
        $(this).removeClass('a-hover');
    });

    //点击进入back
    $('.banner-btn-bg1 li').click(function() {
        var font=$(this).parents('.font');
        var back=font.siblings('.back');
        var num=$(".banner-btn-bg1 li").index($(this));//第几个被单击
        font.hide();
        back.show();
        $.fn.fullpage.moveTo(2, num);//移动到第二屏的第num个幻灯片
    });
    $('.banner-btn-bg2 li').click(function() {
        var font=$(this).parents('.font');
        var back=font.siblings('.back');
        var num=$(".banner-btn-bg2 li").index($(this));//第几个被单击
        font.hide();
        back.show();
        $.fn.fullpage.moveTo(5, num);//移动到第二屏的第num个幻灯片
    });
    $('.banner-btn-bg3 li').click(function() {
        var font=$(this).parents('.font');
        var back=font.siblings('.back');
        var num=$(".banner-btn-bg3 li").index($(this));//第几个被单击
        font.hide();
        back.show();
        $.fn.fullpage.moveTo(6, num);//移动到第二屏的第num个幻灯片
    });    
    //返回back
    $('.slide-img a').bind('click',function() {
        var font=$(this).parents('.back').siblings('.font');
        var back=$(this).parents('.back');
        font.show();
        back.hide();
    });

    //别墅与中国、别墅与园林点击进入
    $('.jin').bind('click',function() {
        var font=$(this).parents('.font');
        var back=$(this).parents('.font').siblings('.back');
        font.hide();
        back.show();
    });

    //别墅与中国中的table切换
    $('#a-1').bind('click', function() {
        $('#img-1').toggleClass('dis-none');
        $('#img-2').toggleClass('dis-none');
        $('#a-1').css({background: '#B71018'});
        $('#a-2').css({background: '#828282'});
    });
    $('#a-2').bind('click', function() {
        $('#img-1').toggleClass('dis-none');
        $('#img-2').toggleClass('dis-none');
        $('#a-1').css({background: '#828282'});
        $('#a-2').css({background: '#B71018'});
    });

});
    
