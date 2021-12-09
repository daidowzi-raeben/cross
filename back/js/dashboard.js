//  head 에 로고 home 아이콘
$('.board-logo').mouseover(function(){
    $(this).find('.home').stop().fadeIn(200);
});
$('.board-logo').mouseout(function(){
    $(this).find('.home').stop().fadeOut(200);
});

// hover시 전체메뉴 보기 ~
var navMenu = $('.board-nav__menu');
var allMenu = $('.board-nav__active');

navMenu.mouseover(function(){
    $(this).parent().addClass('is_active');
    allMenu.css('display', 'flex');
});

$('.board-nav').on('mouseleave', function(){
    $(this).removeClass('is_active');
    allMenu.hide();
});

// 선수관리 / 월간 처리현황
var systemBtn = $('.system-month .btn');

systemBtn.click(function(e){
    systemBtn.removeClass('is_active');
    systemBtn.eq( $(this).data().id ).addClass('is_active');
});


   

    // 각 시스템 바로가기 캐러셀
    var shortcuts = $('.shortcuts ul');
    $('.shortcuts--right').click(function(){
        shortcuts.stop().animate({marginLeft: -250},300, function(){
            shortcuts.find('li:first').appendTo(shortcuts);
            shortcuts.css({marginLeft: 0});
        })
    });

    $('.shortcuts--left').click(function(){
        shortcuts.find('li:last').prependTo(shortcuts);
        shortcuts.css({marginLeft: -250});
        shortcuts.stop().animate({marginLeft: 0},300);
    });
    
    // 모달

    $('.btn-open').click(function(){
        var data = $(this).data().id
        $('#' +  data).fadeIn();
    });

    $('.btn-close').click(function(){
        $('.modal').fadeOut();
    });


    $('.detail .foldBtn').click(function(){
        if($(this).hasClass('flip') == true){
            $('.app-condition').show();
            $(this).find('.fold-text').html('조회조건 접기');
            $(this).removeClass('flip');
            $(this).find('i').css({transform: 'rotate(180deg)'})
        }else{
            $('.app-condition').hide();
            $(this).find('.fold-text').html('조회조건 펼치기');
            $(this).addClass('flip');
            $(this).find('i').css({transform: 'rotate(0deg)'})
        }
        
        
    });