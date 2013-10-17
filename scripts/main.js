window.onload = function(){

	var mid_width = $("body").width()/2;
	console.log(mid_width);
	$("#hairline").on("click", function(e){
		$("#title_overlay").toggleClass("hide");
		$(this).toggleClass("hide");
	});

	$(window).on("mousemove", function(e){
		var diff = event.clientX - mid_width;
		var rate = (1/mid_width)*diff;
		var current_bgpx = parseFloat($("body").css("background-position-x"));
    console.log(rate);
		console.log(current_bgpx);
    var per = (current_bgpx + rate);
    if(per >= 0 && per <= 100)
		$("body").css({
		 "background-position-x": per.toString() + "%"
		});
	});
}