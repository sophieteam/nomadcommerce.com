
$('.cortex-slider').flexslider({
    animation: "slide",
    animationLoop: true,
    slideshow:true,
    controlNav:true,
    directionNav:false
});

 $('#cortex-page').fullpage({
 menu: false,
 navigation: true,
 scrollingSpeed: 1000
 });


    $('.cortex-technology').slick({
        autoplay: true,
        dots: false,
        infinite: true,
        speed: 100,
        slidesToShow: 1,
        initialSlide:true,
        pauseOnHover:false,
        centerMode: true,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 641,
                settings: "unslick"
            }
        ]
    });


    $(".cortex-list .icos li").on("click", function () {
        $(".cortex-list .icos li").removeClass("active")
        $(this).addClass("active");
        var index= $(this).index();
        $(".charts li").removeClass("active");
        $(".charts li:eq("+index+")").addClass("active");
    });









$("form").on('submit', function(e){
    e.preventDefault();
    var $name       = $("#name").val(),
        $email      = $("#email").val(), 
        $message    = $("#message").val(),
        $subject    = $(this).data("subject");

    $.ajax({
       type: "POST",
       url: "http://nomadcommerce.com:80/mail/api/v1/mail/sendMail?body="+ $name + "%0D%0A" + $email + "%0D%0A" +$message +"&subject="+ $subject +"&type=1",
       success: function(data)
       {
           swal("Thank you!", "Your message has been sent.", "success");
       },
       error: function(err) {
            swal("Opps...", "Failed to send your message.", "error");
       }
     });
});

$(document).foundation();
