
    $(".form1 div").tap(function(){
    $(this).addClass("active").siblings().removeClass("active");
    });

var inptel = $(".inp2");
var inpname = $(".inp1");
var regtel=/^1[3578]\d{9}$/;
//弹出提示信息
    $(".inp3").tap(function(){
        if(inptel.val()!=""&&inpname.val()!=""){
            $(".pop").show();
            $(".tips").show();
        }
        setTimeout(function(){
            $(".pop").hide();
            $(".tips").hide();
            //重置表单
            $(".form1")[0].reset();
        },3000);
    });
    
   