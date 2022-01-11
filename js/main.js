
//nav
function nav(){
   $("ul#nav1>li").mouseenter(function(){
       $('#headerWrap').animate({height : 300+'px'},200,function(){
        //    $('ul#nav1>li>a').css('color','black'); 
           $('.subNav').css('display','block');
       });
   });
   $("#headerWrap").mouseleave(function(){
    $('#headerWrap').animate({height : 96+'px'},200,function(){
        $('.subNav').css('display','none');
    });
   });

}

function mNav(){
    $('.navBtn').on('click',function(){
        $('nav').animate({right : 0 + 'vW'},300,'swing');
    });
    $('.closeBtn').on('click',function(){
        $('nav').animate({right : -35 + 'vW'},200,'swing');
        $('ul#nav1>li>ul').css('display','none');
    });


    $('ul#nav1>li>a:first').addClass('selected');
    $('ul#nav1>li>a').on('click',function(){
       let box = $(this).next('ul#nav1>li>ul').css('display');
    
       if(box == 'none'){
           
           $('ul#nav1>li>a').next().slideUp(300);
           $(this).next('ul#nav1>li>ul').slideDown(300);
           $('ul#nav1>li>a').removeClass('selected');
           $(this).addClass('selected');
       }else{
           $(this).next('ul#nav1>li>ul').slideUp(300);
       }
    });
    
}




//gallery
function gallery(){
    let divWidth = $('#box01>section>div#view').width();
    console.log(divWidth);
    $('ul#galleryImg>li:last').prependTo('ul#galleryImg');
    $('ul#galleryImg').css('marginLeft','-'+divWidth+'px');

    $('#prev').on('click',function(e){
        $('#prev, #next').hide();
        $('ul#galleryImg').stop().animate({marginLeft:'-='+divWidth+'px'},1500,'swing',function(){
        $('ul#galleryImg>li:first').appendTo('ul#galleryImg');
        $('ul#galleryImg').css('marginLeft','-'+divWidth+'px');
        $('#prev, #next').show();
    });
});
    $('#next').on('click',function(e){
        $('#prev, #next').hide();
        $('ul#galleryImg').stop().animate({marginLeft:'+='+divWidth+'px'},1500,'swing',function(){
        $('ul#galleryImg>li:last').prependTo('ul#galleryImg');
        $('ul#galleryImg').css('marginLeft','-'+divWidth+'px');
        $('#prev, #next').show();
    });
   });     
   //자동 슬라이드 
//     function action(){
//         $('#prev, #next').hide();
//         $('ul#galleryImg').stop(4000).animate({marginLeft:'+='+divWidth+'px'},1500,'swing',function(){
//         $('ul#galleryImg>li:last').prependTo('ul#galleryImg');
//         $('ul#galleryImg').css('marginLeft','-'+divWidth+'px');
//         $('#prev, #next').show();  });
//     }
//     action();
//    let str = setInterval(action,4000);
    // $('ul#galleryImg>li').mouseenter(function(e){
    //     clearInterval(str);
    // });
    // $('ul#galleryImg>li').mouseleave(function(e){
    //     setInterval(action,4000)
    // });
}

//더보기
function listMore(){
    $('.moreBtn').on('click',function(){
        // alert('dd');
        $('#product').animate({height : 1800 + 'px'},300, function(){
            $('.moreBtn').css('display','none');
        });
    });
}

//footer
function footerBtn(){
    $('#footBtn1').on('click',function(){
        $('#foot_contact').slideDown(300);
    });
    $('#footBtn2').on('click',function(){
        $('#foot_contact2').slideDown(300);
    });
}
