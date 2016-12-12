$(function(){
    var i=0;
    //--------------------复制---------------------//
    var clone= $(".banner .banner-img li").eq(0).clone();
    $(".banner .banner-img ").append(clone);
    //---------------------------------------------//
    //
    //---------------定时器------------------------//
    function move(){

        if(i==4){  
            $(".banner .banner-img").css({left:0}); 
            i=1;
        };
        $(".banner .banner-img").animate({left:-1920*i},1500); 

        if(i==3){
           $(".banner .banner-btn li").eq(0).addClass("focus").siblings().removeClass("focus"); 
       }else{
        $(".banner .banner-btn li").eq(i).addClass("focus").siblings().removeClass("focus");
    };
};
var t=setInterval(function(){
   i++;
   move();
},4000);
   //-------------------------------------------------------//
   //---------鼠标经过的效果----------//
   $(".banner").hover(function(){
    clearInterval(t);

},function(){

    t=setInterval(function(){
        i++;
        move();
    },4000);

});
//----------单击按钮----------------//
$(".banner .banner-btn li").click(function(){
    var index=$(this).index();
    i=index;
    $(".banner .banner-img").animate({left:-1920*index});
    $(".banner .banner-btn li").eq(i).addClass("focus").siblings().removeClass("focus");

});
//---------------鼠标经过时----------------//
$(".banner").hover(function(){
    $(".banner .prev,.banner .next").fadeToggle();
});
//--------------前进和后退-------------------//
$(".banner .prev").click(function(){
    i--;
    if(i<0){i=0};
    move();
});
$(".banner .next").click(function(){
    i++;

    move();
});

});
