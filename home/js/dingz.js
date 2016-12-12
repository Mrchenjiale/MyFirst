
	var navbg=$("#nav-bg");
	var dznav=$('#dz-nav');
	var lifirst=$('#dz-nav li').first();
	var swiperslide=$('.swiper-slide');
	navbg.height(dznav.height());
	navbg.width(lifirst.width());
	dznav.children().on('tap',function(){
		var left=$(this).offset().left;
		var width=$(this).width();
		var index=$(this).index();
		navbg.animate({'left': left,'width':width}, 100,function(){
			swiper.slideTo(index,10);
		});
	})


    


