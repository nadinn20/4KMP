
$(document).ready(function(){
	$("ul").hide();
    $("#button_menu").mouseenter(function(){
        $("ul").slideToggle("slow");
    });
});
