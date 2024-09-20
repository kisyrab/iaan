$(function(){

    //인디케이터
    $(".main > li").hover(function(){
        var nav_pos = $("nav").offset().left;
        var left = $(this).offset().left;
        left_nav_pos = left - nav_pos;

        console.log(left)
        width = $(this).css("width");
        console.log(width)
        $("#indicator").css("width" , width).css("left" , left_nav_pos);
    },function(){
        $("#indicator").css("width" , "0").css("left" , left_nav_pos);
    })

    
    // 서브메뉴 떨어트리기
    $(".main").hover(function(){
        $(".sub").stop().slideDown(200);
        $("header").stop().animate({height : "310px"} , 500)
        $("header h1 a").addClass("on")
        $("header").addClass("bgON")
    }, function(){
        $(".sub").stop().slideUp(200);
        $("header").stop().animate({height : "100px"} , 800)
        $("header h1 a").removeClass("on")
        $("header").removeClass("bgON")
    })


    $("a").click(function(e){
        var attr = $(this).attr("href")
        if(attr == "#"){
            e.preventDefault()
        }
    })

    //top버튼
    
    $(".con_bottom_right .top_button").click(function(){       
        
        // var T = $(window).scrollTop()
        // console.log("T " , T)
        
        $("html, body").animate({scrollTop : 0},500)
    })


    //반응형일때 메뉴
    ///hovermenu
    $(".btn").click(function(){
        $(".hoverMenu").animate({right : "0"} , 200)
    })
    $(".xButton").click(function(){
        $(".hoverMenu").animate({right : "-300px"} , 200)
    })

    ///sub
    $(".hoverMenuMain > li").hover(function(){
        $(this).find(".hoverSub").stop().slideDown()
    },function(){
        $(this).find(".hoverSub").stop().slideUp()
    })



})//j