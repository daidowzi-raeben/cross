$(document).ready(function () {


    // 메인 슬라이드 

   
    var m_slide_idx = $('.main-slider ul li').length;
    var m_slide_interval = setInterval(m_itv_slide_r,5000);
    var m_slide_count = 0;
    var m_moving = $('.main-slider ul');
    var m_slide_width = $('.main-slider ul li').width();
    var m_slide_event = false;

    $(window).on('resize',function(){
    m_slide_width = $('.main-slider ul li').width();
    m_itv_slide_r();

    });
    function m_itv_slide_r() {
        
        if (m_slide_count < m_slide_idx - 1) {
            m_slide_count++;
            m_slide_r();
         
        }else {
            m_slide_count = 0;
            m_slide_r();
        }
    }

    function m_itv_slide_l() {
        if (m_slide_count > 0) {
            m_slide_count--;
            m_slide_l();
        } else {
            m_slide_count = m_slide_idx - 1;
            m_slide_l();
        }
    }

    $('.itr-btn__slide .arrow-right').on('click', function () {
        if(m_slide_event == false){
            m_slide_event = true;
            clearInterval(m_slide_interval);
            $('#dot').addClass('pause');
            $('.main .circle').removeClass('active');
            m_itv_slide_r();
            m_s_event = false;
        }else{
            return false;
        }
    });

    $('.itr-btn__slide .arrow-left').on('click', function () {
        clearInterval(m_slide_interval);
        if(m_slide_event == false){
            m_slide_event = true;
            m_itv_slide_l();
            clearInterval(m_slide_interval);
            $('#dot').addClass('pause');
            $('.main .circle').removeClass('active');
            m_s_event = false;
         
        }else{
            return false;
        }
    });

        function m_arrow_left(){
            if(m_slide_count == 0){
                $('.main .arrow-left').removeClass('active');
            }else{
                $('.main .arrow-left').addClass('active');
    
            }

        }
    function m_slide_r() {
        m_arrow_left();
        $(m_moving).stop().animate({
            left: -m_slide_width * 2
        }, {
            duration: 300,
            complete: function () {
                $(m_moving).css({
                    "left": -m_slide_width * 1
                });

                $(m_moving).append($(m_moving).children()[0]);
                $('.page').text((m_slide_count + 1) + ' / 4');
                m_slide_event = false;
            }
        });
    }

    function m_slide_l() {
        m_arrow_left();
        $(m_moving).stop().animate({
            left: 0
        }, {
            duration: 300,
            complete: function () {
                $(m_moving).css({
                    "left": -m_slide_width * 1
                });
                $(m_moving).prepend($(m_moving).children()[m_slide_idx - 1]);
                $('.page').text((m_slide_count + 1) + ' / 4');
                m_slide_event = false;
            }
        });
    }

    var m_s_event = true;

    $('#dot').on('click',function(){
        if(m_s_event == true){
            $('.main .circle').removeClass('active');
            clearInterval(m_slide_interval);
            $(this).addClass('pause');
            m_s_event = false;
        }else{
            $('.main .circle').addClass('active');
            m_slide_interval = setInterval(m_itv_slide_r,5000);
            m_s_event = true;
            $(this).removeClass('pause');

        }

    });
    


    // S피플 슬라이드
    var s_slide_count = 0;
    s_width = 1200;

    var s_slide_idx = $('.itv-banner ul li').length;
    var s_moving = $('.itv-banner__info--slide');


    var p_thum = $('.p-photo');
    var p_idc = $('.itv-banner__idc span');
    var s_slide_interval = setInterval(itv_slide, 3000);


    function itv_slide() {
        if (s_slide_count < s_slide_idx - 1) {
            s_slide_count++;
            slide();
            idc_class();
        } else {
            s_slide_count = 0;
            slide();
            idc_class();
        }
    }
    
    function idc_class() {
        $(p_thum).removeClass('active');
        $(p_thum[s_slide_count]).addClass('active');
        $(p_idc).removeClass('active');
        $(p_idc[s_slide_count]).addClass('active');
        $('.p-name').removeClass('active');
        $('.itv-banner ul li').eq(s_slide_count).find('.p-name').addClass('active');

    }





    function slide() {
        $(s_moving).stop().animate({
            left: -s_width * 2
        }, {
            duration: 1000,
            complete: function () {
                $(s_moving).css({
                    "left": -s_width * 1
                });
                $(s_moving).append($(s_moving).children()[0]);
            }
        });
    }

    $('.btn-pp').click(function () {
        $(this).toggleClass('play');
        if ($(this).hasClass('play')) {
            s_slide_interval = setInterval(itv_slide, 2000);
        } else {
            clearInterval(s_slide_interval);
            console.log(s_slide_count);
        }
    });

    var point_position;
    var list_length = $('.itv-banner__info--slide').children().length;
    $(".itv-banner li").click(function () {
        var idx = $(this).index();
        click_idx(idx);
        $('.p-name').removeClass('active');
        $('.itv-banner ul li').eq(idx).find('.p-name').addClass('active');
        clearInterval(s_slide_interval);
        $('.btn-pp').removeClass('play');
    });

    $(".itv-banner__idc span").click(function () {
        var idx = $(this).index();
        click_idx(idx);
        $('.p-name').removeClass('active');
        $('.itv-banner ul li').eq(idx).find('.p-name').addClass('active');
        clearInterval(s_slide_interval);
        $('.btn-pp').removeClass('play');

    });

    function click_idx(idx) {
        if (s_slide_count < idx) {
            // 오른쪽
            point_position = Math.abs((s_slide_count - idx));
            // 현재 itv로 돌아가는 idx 값과 클릭한 idx값을 빼서 절대값 구해주기

            for (var i = 0; i < point_position; i++) {
                $(s_moving).animate({
                    left: -1200 * 2
                }, {
                    duration: 100,
                    complete: function () {
                        // 구한 절대값만큼 for문 돌려 요소 append 해주기  
                        $(s_moving).append($(s_moving).children()[0]);
                        $(s_moving).css({
                            "left": -1200 * 1
                        });
                    }
                });

            }
            s_slide_count = idx;
            idc_class();
        }

        if (s_slide_count > idx) {
            //   왼쪽
            point_position = Math.abs((s_slide_count - idx));
            for (var i = 0; i < point_position; i++) {
                $(s_moving).animate({
                    left: 0
                }, {
                    duration: 100,
                    complete: function () {
                        $(s_moving).prepend($(s_moving).children()[list_length - 1]);
                        $(s_moving).css({
                            "left": -1200
                        });
                    }
                });
            }
            s_slide_count = idx;
            idc_class();
        }
    }





    $(window).on('scroll', function () {
        var st = $(window).scrollTop();
        offset_go();
        fixed_top_chg();

    });

    var indicator_li = $('.fixed-right ul li');
    var section = $('.section');
    var count = 0;
    var color = ['#fff', '#90a4b5', '#949494', '#8fb3d5', '#ababab', '#ababab'];
    
    $(indicator_li[count]).addClass('on').siblings().removeClass('on');
    indicator_li.each(function () {
        $(this).click(function () {
            var idx = $(this).index();
            $(this).addClass('on').siblings().removeClass('on');
            $('html,body').stop().animate({
                scrollTop: $(section[idx]).offset().top
            }, 100);
            $('.fixed-right ul li').css('color', color[idx]);
            fixed_top_chg();
        });
    });

    function offset_go() {
        var st = $(window).scrollTop();
        section.each(function () {
            if (st - $(window).height() / 3 > $(this).offset().top) {
                var idx = $(this).index() - 1;
                $(indicator_li[idx]).addClass('on').siblings().removeClass('on');
                count = idx;
                $('.fixed-right ul li').css('color', color[idx]);
            } else if (st < $(window).height() / 2) {
                count = 0;
                $(indicator_li[count]).addClass('on').siblings().removeClass('on');
                $('.fixed-right ul li').css('color', color[count]);

            }
        });
    }

    function fixed_top_chg() {
        var st = $(window).scrollTop();

        if (st > $(section[1]).offset().top - 50) {
            $('.fixed-top').addClass('active');
            if (st > $(section[3]).offset().top - 50) {
                $('.fixed-top').removeClass('active');
            }
            if (st > $(section[4]).offset().top - 50) {
                $('.fixed-top').addClass('active');
            }
        } else {
            $('.fixed-top').removeClass('active');

        }

    }


    //  S 미디어
    var s_count = 1;
    var s_play = $('.media ul li');
    var l_r = ['22px', 0, '-22px'];
    // var video = $('.media ul li').find('video');
    $('.inner-idt__left').on('click', function () {
        $('.media ul li').find('.v-wrap__thum').show();
        if (s_count > 0) {
            s_count--;
            s_play_sizing(s_count);
        } else if (s_count == 0) {
            s_count = 2;
            s_play_sizing(s_count);
        }
    });

    $('.inner-idt__right').on('click', function () {
        $('.media ul li').find('.v-wrap__thum').show();
        if (s_count < 2) {
            s_count++;
            s_play_sizing(s_count);
        } else if (s_count == 2) {
            s_count = 0;
            s_play_sizing(s_count);
        }
    });

    $(s_play).each(function () {
        $(this).click(function () {
            s_count = $(this).index();
            s_play_sizing(s_count);
            // $('.media ul li').not('.active').find('.v-wrap__thum').show();
            // $('.media ul li').find('video').get(0).pause();

        });
    });

    // $('.btn-play').click(function(){
    //     if($(this).parents('li').hasClass('active')){
    //         $(this).parent('.v-wrap__thum').fadeOut();
    //         $(this).parents('.v-wrap').find('video').get(0).play();
    //     }
    // });

    $('.btn-play').click(function () {
        if ($(this).parents('li').hasClass('active')) {
            alert('준비중입니다.');
        }
    });

    function s_play_sizing(s_count) {
        $(s_play).removeClass('active');
        $(s_play[s_count]).addClass('active');
        $(s_play[1]).find('.v-wrap').css('left', l_r[s_count]);
        $(s_play).find('dl').hide();
        $(s_play[s_count]).find('dl').delay(300).fadeIn();

    }

    

      
    });
 