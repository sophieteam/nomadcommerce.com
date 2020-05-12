$("section[data-magellan-expedition-clone]").css("display","none !important");

$(".menu li a").on("click", function () {
    $(".top-bar").removeClass("expanded");
});

$('.slider').slick({
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    initialSlide:true,
    pauseOnHover:false,
    centerMode: true,
    variableWidth: true
});


$( window ).resize(function() {
    if($(document).width() < 642)
    {
        $('.cortex-slick').slick({
            centerMode: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            speed:300,
            autoplay:true,
            arrows: false,
            cssEase:false,
            swipe:true,
            swipeToSlide:true

        });
    }
});



setTimeout(function() {
    $('.orbit-content,.slider,.cortex-slick').click();
}, 500);

$(document).foundation({
    "magellan-expedition": {
        active_class: 'active', // specify the class used for active sections
        threshold: 0, // how many pixels until the magellan bar sticks, 0 = auto
        destination_threshold: 0, // pixels from the top of destination for it to be considered active
        throttle_delay: 50, // calculation throttling to increase framerate
        fixed_top: 0, // top distance in pixels assigend to the fixed element on scroll
        offset_by_height: true // whether to offset the destination by the expedition height. Usually you want this to be true, unless your expedition is on the side.
    },
    orbit:
    {
        animation:true,
        timer: true,
        timer_speed: 5000,
        slide_number: false,
        pause_on_hover: false,
        navigation_arrows: false,
        variable_height: false,
        animation_speed:0,
        bullets: true
    }
});

function isScrolledIntoView(elem)
{
    var $elem = $(elem);
    var $window = $(window);

    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(document).ready(function () {

    if($(document).width() < 642)
    {
        $('.cortex-slick').slick({
            centerMode: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            speed:300,
            autoplay:true,
            arrows: false,
            cssEase:false,
            swipe:true,
            swipeToSlide:true

        });
    }

    setTimeout(function() {
        $('.orbit-content,.slider,.cortex-slick').click();
    }, 500);

    $( window ).scroll(function() {
        var offset    = $(".text-content").offset();
        var winOffset = window.pageYOffset + 300;
        
        if ( winOffset >= offset.top) {
            $(".content-center h2").addClass("visible animated flipInX");
            $(".akbank-phone").addClass("visible animated fadeInRight");
            window.setTimeout(function(){$(".separator, .content-center .award").addClass("visible animated fadeInUp")}, 1000);
            window.setTimeout(function(){$(".content-center p").addClass("visible animated fadeInUp")}, 1700);
            window.setTimeout(function(){$(".portfolio-btn").addClass("visible animated fadeInLeft")}, 2000);
        }
    });
    $('.who-is').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset:100
    });


    $('.sass-info').viewportChecker({
        classToAdd: 'visible animated fadeInRight',
        offset: 100,
        callbackFunction: function(elem, action){
            $(".sass-pic").addClass("visible animated fadeInLeft")
        }
 
    });

    $('#team .text-center').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInUp',
    });
    $('.slick-track').viewportChecker({
        offset: 100,
        callbackFunction: function(elem, action){
            $(".partner-container .section-title").addClass("visible animated fadeInLeft")
        }
    });

    $('.work .text-center').viewportChecker({
        offset: 100,
        callbackFunction: function(elem, action){
            $(".work img").addClass("visible animated rotateInDownLeft");
            window.setTimeout(function(){$(".join-team img").addClass("visible animated rotateInUpRight")}, 1000);
        }
    });
/*
    if(document.cookie.indexOf("popupShowed") < 0){
        $(".popup").addClass("active");
        document.cookie = "popupShowed";
    }
    $(".popup .popup-content .close").on("click", function () {
        $(this).parents('.popup-content').parents('.popup').removeClass("active");
    });
*/

});