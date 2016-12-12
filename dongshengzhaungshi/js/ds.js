$(function(){
	
//--------------侧边导航鼠标滚动时------//
  $(window).scroll(function(){
    var size=$(".header-outside .header-link .nav ul li ").size();
    var T=$("body").scrollTop()||$(document).scrollTop();
        for (var j=0;j<size;j++){
            var t=$(".d"+j).offset().top-500;
             if (T>=t){
             $(".header-outside .header-link .nav ul li").eq(j).addClass("focus").siblings().removeClass("focus");
          }
        }
     }); 
   



//------------导航置顶--------------///
   $(window).scroll(function(){
        var w=$("body").scrollTop()||$(document).scrollTop();//获取滚动值
        if(w>500||w<=0){
            $(".header").fadeIn();
        }else{
             $(".header").fadeOut();
        }
      
    });
   //-----返回顶部----///
 $(".toTop").click(function(){
        $("html,body").animate({scrollTop:0});
    });
  
 //---------鼠标点击效果----------//
    var size=$(".header-outside .header-link .nav ul li ").size();
    
        $(".header-outside .header-link .nav ul li ").click(function(){
        var index=$(this).index();
        
         var T=$(".d"+index).offset().top;
         console.log($(".d"+index));
        $("html,body").stop().animate({scrollTop:T});
        $(".toTop").fadeIn();
        });

//----返回顶部隐藏----//
        $(window).scroll(function(){
         var w=$("body").scrollTop()||$(document).scrollTop();//获取滚动值
            if(w>800){
            $(".toTop").fadeIn();
            }else{
            $(".toTop").fadeOut();
        }
    });
//---滚动加载----//
    // $(document).scroll(function(){
    // var p=$("html,body").scrollTop();
    // var q=$(".design .personal").offset().top-800;

    // if (p>q){
    //     $(".design .personal").addClass("left-move");
 
    //      };
    //  });
   //---滚动加载----pic//
   
    $(window).scroll(function(){
    var e=$("body").scrollTop()||$(document).scrollTop();
        // e=$("body").scrollTop();
    var y=$(".news .news-left04").offset().top-800;
	
    if (e>y){
        $(".news .news-left04").addClass("pic-move");
 
         };
    if (e>y+800||e<y-300){
    $(".news .news-left04").removeClass("pic-move");
 
         };
     });
    //----txt---//
    $(window).scroll(function(){
    var e=$("body").scrollTop()||$(document).scrollTop(); ;
        // e=$("body").scrollTop();
    var y=$(".news .news-left-box").offset().top-800;

    if (e>y){
        $(".news .news-left-box").addClass("news-left-return");
 
         };
    if (e>y+900||e<y-300){
    $(".news .news-left-box").removeClass("news-left-return");
 
         };
     });

//-----蒙版------//
$(function(){
     $(".about .side .side-pic li").hover(function(){
         $(this).find(".overlay").stop().slideToggle();
         $(this).find(".txt").stop().slideToggle();
     });
 });
//--------p-----//
$(window).scroll(function(){
    var l=$("body").scrollTop()||$(document).scrollTop();
        // l=$("body").scrollTop();
    var k=$(".case-pic-l").offset().top-600;
    if (l>k){
        $(".case-pic-l .small-fs").addClass("small-ff");
         };
     if (l>k+1100||l<k-200){
        $(".case-pic-l .small-fs").removeClass("small-ff");
 
         };
     });
//---h4----//
$(window).scroll(function(){
    var l=$("body").scrollTop()||$(document).scrollTop();
        // l=$("body").scrollTop()
    var k=$(".case-pic-l").offset().top-600;
    if (l>k){
        $(".case-pic-l h4").addClass("h-txt");
    }
    if (l>k+900||l<k-200){
        $(".case-pic-l h4").removeClass("h-txt");
         };
     });
 

//----tab----//
 // $(function(){
 //    $(".news-middle .box").eq(0).show().siblings(".box").hide();
 //    $(".news-middle ul li").mouseenter(function(){
 //    var i=$(this).index();
 //    $(".news-middle .box").eq(i).stop().fadeIn().siblings(".box").hide();
        
 //    });
 //   });
$(function(){
  
    $(".news-middle ul li .news-middle-l-one").mouseenter(function(){
    $(this).addClass("ani").stop().parent().siblings("li").children("div").removeClass("ani");
    $(".news-middle .out").animate({top:0});      
    });

    $(".news-middle ul li .news-middle-l-two").mouseenter(function(){
    $(this).addClass("ani").stop().parent().siblings("li").children("div").removeClass("ani");
   $(".news-middle .out").animate({top:-340});      
    });

    $(".news-middle ul li .news-middle-l-thire").mouseenter(function(){
    $(this).addClass("ani").stop().parent().siblings("li").children("div").removeClass("ani");
   $(".news-middle .out").animate({top:-680});      
    });


   });


  });