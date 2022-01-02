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


 //footer
function footerBtn(){
    $('#footBtn1').on('click',function(){
        $('#foot_contact').slideDown(300);
    });
    $('#footBtn2').on('click',function(){
        $('#foot_contact2').slideDown(300);
    });
}
