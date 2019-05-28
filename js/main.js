// JavaScript Document
	 $(document).ready(function() {
	
	
/* Toggle show/hide */
	$("#burger").click(function() {
		$("nav ul").toggle();
	});
		 
/* Drop Down */
	/* $(".droph2").click(function() {
		$(".dropul").toggle();
	});*/
		 
	/* Om Center for Autisme */
		 
	$("#organisation").click(function() {
		$("#organisation-ul").toggle();
		$("#sponsorer-ul").hide();
		$("#faglig-platform-text").hide();
		$("#demetrious-haracopos-legat-text").hide();
	});
		 
				$("#formål").click(function() {
					$("#formål-text").toggle();
					$("#mission-og-vision-text").hide();
					$("#ledelse-og-bestyrelse-text").hide();
					$("#medarbejdere-text").hide();
					$("#jubilaeum-text").hide();
				});

				$("#mission-og-vision").click(function() {
					$("#formål-text").hide();
					$("#mission-og-vision-text").toggle();
					$("#ledelse-og-bestyrelse-text").hide();
					$("#medarbejdere-text").hide();
					$("#jubilaeum-text").hide();
				});

				$("#ledelse-og-bestyrelse").click(function() {
					$("#formål-text").hide();
					$("#mission-og-vision-text").hide();
					$("#ledelse-og-bestyrelse-text").toggle();
					$("#medarbejdere-text").hide();
					$("#jubilaeum-text").hide();
				});

				$("#medarbejdere").click(function() {
					$("#formål-text").hide();
					$("#mission-og-vision-text").hide();
					$("#ledelse-og-bestyrelse-text").hide();
					$("#medarbejdere-text").toggle();
					$("#jubilaeum-text").hide();
				});

				$("#jubilaeum").click(function() {
					$("#formål-text").hide();
					$("#mission-og-vision-text").hide();
					$("#ledelse-og-bestyrelse-text").hide();
					$("#medarbejdere-text").hide();
					$("#jubilaeum-text").toggle();
				});
		 
	$("#sponsorer").click(function() {
		$("#organisation-ul").hide();
		$("#sponsorer-ul").toggle();
		$("#faglig-platform-text").hide();
		$("#demetrious-haracopos-legat-text").hide();
	});
		 
	$("#faglig-platform").click(function() {
		$("#organisation-ul").hide();
		$("#sponsorer-ul").hide();
		$("#faglig-platform-text").toggle();
		$("#demetrious-haracopos-legat-text").hide();
	});
		 
	$("#demetrious-haracopos-legat").click(function() {
		$("#organisation-ul").hide();
		$("#sponsorer-ul").hide();
		$("#faglig-platform-text").hide();
		$("#demetrious-haracopos-legat-text").toggle();
	});
	
});





