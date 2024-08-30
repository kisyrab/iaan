$(function(){
    $(".main>li , .img_area").mouseenter(function(){
        $(".sub, .img_area").stop().slideDown();
    })//
    
    $(".main >li , .img_area").mouseleave(function(){
        $(".sub, .img_area").stop().slideUp();
    })//

    $(".main > li").mouseover(function(){
        var n = $(this).index();
        console.log(n)

        $(".img_area .icon li").hide()
        $(".img_area .icon li").eq(n).show();
    })

})//j