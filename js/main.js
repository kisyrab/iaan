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

    // main이미지 fade
    $(".wrap_inner").slick({
        arrows : false,
        dots : false,
        autoplay : true,
        autoplaySpeed : 3000,
        fade : true,
    })


    //포트폴리오 이미지 & 텍스트 슬릭

    $(".portfolio_tree").slick({
        autoplay : true,
        autoplaySpeed: 2000,
        fade: true,
        arrows : true,
    })

    $(".portfolio_archi").slick({
        autoplay : true,
        autoplaySpeed: 2000,
        fade: true,
        arrows : true,
    })

    $(".portfolio_plant").slick({
        autoplay : true,
        autoplaySpeed: 2000,
        fade: true,
        arrows : true,
    })

    $(".portfolio_overseas").slick({
        autoplay : false,
        fade: false,
        arrows : false,
    })

    $("a").click(function(e){
        var attr = $(this).attr("href")
        if(attr == "#"){
            e.preventDefault()
        }
    })

    //포트폴리오 탭메뉴
    $(".portfolio_outer > div").eq(0).css("z-index" , "1000");
    $(".portfolio_title ul li").click(function(){
        var num = $(this).index(); //0 1 2 3
        $(".portfolio_title ul li a").css("background" , "#ddd").css("color" , "#333")
        $(this).find("a").css("background" , "#1c3899").css("color" , "#fff")
    $(".portfolio_outer > div").css("z-index" , "999");
    $(".portfolio_outer > div").eq(num).css("z-index" , "1000");
    
    

    })//

    // var array = ["../images/login.jpg", "../images/fintech.jpg", "../images/life.jpg", "../images/service_platform.png" , "../images/certification.jpg"]
    var array = ["url('../images/login.jpg')", "url('../images/fintech.jpg')", "url('../images/life-a.jpg')", "url('../images/service_platform.jpg')" ,"url('../images/certification-a.jpg')"]
    $(".section04 > div").mouseover(function(){
        var a_num = $(this).index();
        console.log(a_num)
        $(".section04").css("background-image" ,  array[a_num] )
    })

    //top버튼
    
    $(".topbutton a").click(function(){        
        $("html, body").animate({scrollTop : 0},500)
        console.log("aslkdjf")

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