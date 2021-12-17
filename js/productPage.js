
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



//수량선택
function totalNum(){
    let start = $('.cntNum').text();
    let num = parseInt(start);

    $('#plus').on('click',function(){
        //$('.cntNum').text(parseInt($('.cntNum').text())+1);
        num++;
        console.log(num);
        if(num > 10){
            alert('최대 수량입니다.');
            num = 10;
        }
        $('.cntNum').text(num);
    });
    $('#minus').on('click',function(){
        // let start = $('.cntNum').text();
        // let num = parseInt(start,0);
        num--;
        if(num <= 0){
            num = 0;
        }
        $('.cntNum').text(num);
    });
}

//금액계산
function totalPrice(){
    $('#plus, #minus').on('click',function(){
        let price = parseInt($('#price').text());
        let num = parseInt($('.cntNum').text());
        let total = price * num;

        $('#totalPrice').text(total);
    });   
}
// https://fruitdev.tistory.com/160
//box2 
function boxBtn(){
   $('#orderBtn').on('click',function(){
    $('#orderPop').animate({bottom : -21 + 'px'},300,'swing');
   });

   $('.order_closeBtn').on('click',function(){
       $('#orderPop').animate({bottom : -500 + 'px'},300,'swing');
   });
}