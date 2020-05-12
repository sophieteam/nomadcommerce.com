$("section[data-magellan-expedition-clone]").css("display","none !important");

$(".menu li a").on("click", function () {
    $(".top-bar").removeClass("expanded");
});

$(document).foundation();

$(document).ready(function () {
    "use strict";

    $('.pro-2 .text-info h1').viewportChecker({
        offset:100,
        callbackFunction: function(elem, action){
            $(".pro-2 .text-info").addClass("visible animated fadeInLeft");
            window.setTimeout(function(){$(".p-2.item-1").addClass("visible animated fadeInRight")}, 500);
        }
    });

    $('.pro-5 .text-info h1').viewportChecker({
        offset:100,
        callbackFunction: function(elem, action){
            window.setTimeout(function(){$(".pro-5 .award").addClass("visible animated flipInX")}, 1500);
            $(".pro-5 .text-info").addClass("visible animated fadeInRight");
            window.setTimeout(function(){$(".p-5.item-2").addClass("visible animated slideInLeft")}, 500);
            window.setTimeout(function(){$(".p-5.item-1").addClass("visible animated slideInLeft")}, 100);
        }
    });


    $('.pro-7 .text-info h1').viewportChecker({
        offset:100,
        callbackFunction: function(elem, action){
            $(".pro-7 .text-info").addClass("visible animated bounceInRight");
            window.setTimeout(function(){$(".p-7.item-1").addClass("visible animated slideInUp")}, 500);
        }
    });

});