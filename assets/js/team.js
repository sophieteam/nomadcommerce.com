$( document ).ready(function() {
	$.ajax({
	  url: "assets/team.json",
	}).done(function(data) {
		var template = $('#team').html();
	    var html = Mustache.to_html(template, data);
	    $(html).appendTo('#teamlist');
	});
});

$(document).foundation();
