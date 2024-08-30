$(function(){

    //메뉴 호버시 따라오는 애니매이션
    // var width = $(".main >li").eq(0).css("width");

    // $("#indicator").css("width" , width);


    // $(".main > li").hover(function(){
    //     var nav_pos = $("nav").offset().left;
    //     var left = $(this).offset().left;
    //     console.log(left)
        
    //     width = $(this).css("width");
    //     console.log(width)
    //     $(".sub").stop().slideDown(200);
    //     $("header").stop().animate({height : "310px"} , 500)
    //     $("header h1 a").addClass("on")
    //     $("#indicator").css("width" , width).css("left" , left-nav_pos);
    // },function(){
    //     $(".sub").stop().slideUp(200);
    //     $("header").stop().animate({height : "100px"} , 500)
    //     $("header h1 a").removeClass("on")
    //     $("#indicator").css("width" , "0").css("left" , left-nav_pos);
    // })
    
    //인디케이터
    $(".main > li").hover(function(){
        var nav_pos = $("nav").offset().left;
        var left = $(this).offset().left;
        console.log(left)
        width = $(this).css("width");
        console.log(width)
        $("#indicator").css("width" , width).css("left" , left-nav_pos);
    },function(){
        $("#indicator").css("width" , "0").css("left" , left-nav_pos);
    })

    
    // 서브메뉴 떨어트리기
    $("header").hover(function(){
        $(".sub").stop().slideDown(200);
        $("header").stop().animate({height : "310px"} , 500)
        $("header h1 a").addClass("on")
    }, function(){
        $(".sub").stop().slideUp(200);
        $("header").stop().animate({height : "100px"} , 800)
        $("header h1 a").removeClass("on")
    })

    // main이미지 fade
    $(".wrap_inner").slick({
        arrows : false,
        dots : false,
        autoplay : true,
        autoplaySpeed : 3000,
        fade : true,
    })


})//j