// JavaScript Document
	 $(document).ready(function() {
	
	
/* Toggle show/hide */
	$("#burger").click(function() {
		$("nav ul").toggle();
	});
	
	$("#nav1").click(function() {
		$("#menu1").toggle();
		$("#menu2").hide();
		$("#menu3").hide();
		$("#menu4").hide();
	});
		 
	$("#nav2").click(function() {
		$("#menu1").hide();
		$("#menu2").toggle();
		$("#menu3").hide();
		$("#menu4").hide();
	});
		 
	$("#nav3").click(function() {
		$("#menu1").hide();
		$("#menu2").hide();
		$("#menu3").toggle();
		$("#menu4").hide();
	});
		 
	$("#nav4").click(function() {
		$("#menu1").hide();
		$("#menu2").hide();
		$("#menu3").hide();
		$("#menu4").toggle();
	});
	
});





