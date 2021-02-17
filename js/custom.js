$(function(){
    var backToTOP=$('.back-to-top');
$(window).scroll(function(){
    var scrolling=$(this).scrollTop();

    if(scrolling > 600){
        backToTOP.fadeIn()
    }else{
        backToTOP.fadeOut();
    }

    if(scrolling >600){
        $('.menu-bg').addClass('fixed-nav');
    }else{
        $('.menu-bg').removeClass('fixed-nav');
    }

    });

    backToTOP.click(function(){
        $('html,body').animate({
            scrollTop:0,  

        },1500);


    });

});
