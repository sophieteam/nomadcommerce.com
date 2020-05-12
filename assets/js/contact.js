$(document).foundation();


$(document).ready(function () {
	changeTab ();

	$(".contact-tab a").click(function(){
		changeTab ();
	});
	$(window).on('hashchange', function(e){
    	changeTab ();
	});
	$("form").on('submit', function(e){
		$('input[type="submit"]').prop('disabled', true);
		e.preventDefault();
		pathname = window.location.href;
		urlType  = pathname.split("#");
		var name  		= $("#name").val(),
			email 		= $("#email").val(),	
			message 	= $("#message").val(),
			subject 	= $(this).data("subject") + urlType[1];

		$.ajax({
           method: "POST",
           url: "http://mailsender.cortexmw.io/api/send",
           data: {
	           	"ID": "1",
	           	"subject": subject,
	           	"message": "Email: " + email + "\n\n" +"Name: " + name + "\n\n" + "Message: " +  message,
	           	"to":"jobform@nomadcommerce.com"
           },
           success: function(data)
           {
           		$('input[type="submit"]').prop('disabled', false);
           		$("#contact")[0].reset();
				swal("Thank you!", "Your message has been sent.", "success");           
		   },
           error: function(err) {
           		swal("Opps...", "Failed to send your message.", "error");
           }
         });
	});


	function changeTab (){
		pathname = window.location.href
		urlType   = pathname.split("#");

		if ( urlType[1] == "work") {
			$(".want-project").removeClass("animate-active");
			$(".want-work").addClass("animate-active");
		
			$(".contact-header.work").addClass("header-animate");
			$(".contact-header.project").removeClass("header-animate");

		}else if( urlType[1] == "project" ) 
		{	
			$(".want-project").addClass("animate-active")
			$(".want-work").removeClass("animate-active");

			$(".contact-header.work").removeClass("header-animate");
			$(".contact-header.project").addClass("header-animate");
		}
	};
});
