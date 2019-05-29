// JavaScript Document
	 $(document).ready(function() {
	
	
/* Toggle show/hide */
	$("#burger").click(function() {
		$("nav ul").toggle();
	});
		 
/* Drop Down */

		 

	/* Om Center for Autisme */
		 
	$("#organisation").click(function() {
		$("#organisation-ul").toggle();
		$("#sponsorer-ul").hide();
		$("#faglig-platform-text").hide();
		$("#demetrious-haracopos-legat-text").hide();
	});
		 
				$("#formaal").click(function() {
					$("#formaal-text").toggle();
					$("#mission-og-vision-text").hide();
					$("#ledelse-og-bestyrelse-text").hide();
					$("#medarbejdere-text").hide();
					$("#jubilaeum-text").hide();
				});

				$("#mission-og-vision").click(function() {
					$("#formaal-text").hide();
					$("#mission-og-vision-text").toggle();
					$("#ledelse-og-bestyrelse-text").hide();
					$("#medarbejdere-text").hide();
					$("#jubilaeum-text").hide();
				});

				$("#ledelse-og-bestyrelse").click(function() {
					$("#formaal-text").hide();
					$("#mission-og-vision-text").hide();
					$("#ledelse-og-bestyrelse-text").toggle();
					$("#medarbejdere-text").hide();
					$("#jubilaeum-text").hide();
				});

				$("#medarbejdere").click(function() {
					$("#formaal-text").hide();
					$("#mission-og-vision-text").hide();
					$("#ledelse-og-bestyrelse-text").hide();
					$("#medarbejdere-text").toggle();
					$("#jubilaeum-text").hide();
				});

				$("#jubilaeum").click(function() {
					$("#formaal-text").hide();
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
		 
		 		$("#protac-integrating-senses").click(function() {
					$("#protac-integrating-senses-text").toggle();
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
		 
	
		 
	/* Behandling af Autisme */
	
	$("#hvem-kan-komme-i-behandling").click(function() {
		$("#hvem-kan-komme-i-behandling-ul").toggle();
		$("#raadgivning-ul").hide();
		$("#udredning-ul").hide();
		$("#netvaerk-ul").hide();
	});
		 
				$("#visitation").click(function() {
					$("#visitation-text").toggle();
				});
		 
	$("#raadgivning").click(function() {
		$("#hvem-kan-komme-i-behandling-ul").hide();
		$("#raadgivning-ul").toggle();
		$("#udredning-ul").hide();
		$("#netvaerk-ul").hide();
	});
		 
				$("#telefon-raadgivning").click(function() {
					$("#telefon-raadgivning-text").toggle();
					$("#supervision-text").hide();
					$("#foraeldre-raadgivning-text").hide();
					$("#seksualvejledning-text").hide();
					$("#saerlige-tilbud-til-saarbare-kvinder-text").hide();
					$("#specialpaedagogisk-stoette-og-vejledning-text").hide();
					$("#saerlig-specialpaedagogisk-mentor-og-coach-text").hide();
					$("#mere-end-bare-hjemmevejledning-text").hide();
					$("#psykoedukation-text").hide();
					$("#henvisning-og-priser1-text").hide();
				});
		 
		 		$("#supervision").click(function() {
					$("#telefon-raadgivning-text").hide();
					$("#supervision-text").toggle();
					$("#foraeldre-raadgivning-text").hide();
					$("#seksualvejledning-text").hide();
					$("#saerlige-tilbud-til-saarbare-kvinder-text").hide();
					$("#specialpaedagogisk-stoette-og-vejledning-text").hide();
					$("#saerlig-specialpaedagogisk-mentor-og-coach-text").hide();
					$("#mere-end-bare-hjemmevejledning-text").hide();
					$("#psykoedukation-text").hide();
					$("#henvisning-og-priser1-text").hide();
				});
		 
		 		$("#foraeldre-raadgivning").click(function() {
					$("#telefon-raadgivning-text").hide();
					$("#supervision-text").hide();
					$("#foraeldre-raadgivning-text").toggle();
					$("#seksualvejledning-text").hide();
					$("#saerlige-tilbud-til-saarbare-kvinder-text").hide();
					$("#specialpaedagogisk-stoette-og-vejledning-text").hide();
					$("#saerlig-specialpaedagogisk-mentor-og-coach-text").hide();
					$("#mere-end-bare-hjemmevejledning-text").hide();
					$("#psykoedukation-text").hide();
					$("#henvisning-og-priser1-text").hide();
				});
		 
		 		$("#seksualvejledning").click(function() {
					$("#telefon-raadgivning-text").hide();
					$("#supervision-text").hide();
					$("#foraeldre-raadgivning-text").hide();
					$("#seksualvejledning-text").toggle();
					$("#saerlige-tilbud-til-saarbare-kvinder-text").hide();
					$("#specialpaedagogisk-stoette-og-vejledning-text").hide();
					$("#saerlig-specialpaedagogisk-mentor-og-coach-text").hide();
					$("#mere-end-bare-hjemmevejledning-text").hide();
					$("#psykoedukation-text").hide();
					$("#henvisning-og-priser1-text").hide();
				});
		 
		 		$("#saerlige-tilbud-til-saarbare-kvinder").click(function() {
					$("#telefon-raadgivning-text").hide();
					$("#supervision-text").hide();
					$("#foraeldre-raadgivning-text").hide();
					$("#seksualvejledning-text").hide();
					$("#saerlige-tilbud-til-saarbare-kvinder-text").toggle();
					$("#specialpaedagogisk-stoette-og-vejledning-text").hide();
					$("#saerlig-specialpaedagogisk-mentor-og-coach-text").hide();
					$("#mere-end-bare-hjemmevejledning-text").hide();
					$("#psykoedukation-text").hide();
					$("#henvisning-og-priser1-text").hide();
				});
		 
		 		$("#specialpaedagogisk-stoette-og-vejledning").click(function() {
					$("#telefon-raadgivning-text").hide();
					$("#supervision-text").hide();
					$("#foraeldre-raadgivning-text").hide();
					$("#seksualvejledning-text").hide();
					$("#saerlige-tilbud-til-saarbare-kvinder-text").hide();
					$("#specialpaedagogisk-stoette-og-vejledning-text").toggle();
					$("#saerlig-specialpaedagogisk-mentor-og-coach-text").hide();
					$("#mere-end-bare-hjemmevejledning-text").hide();
					$("#psykoedukation-text").hide();
					$("#henvisning-og-priser1-text").hide();
				});
		 
		 		$("#saerlig-specialpaedagogisk-mentor-og-coach").click(function() {
					$("#telefon-raadgivning-text").hide();
					$("#supervision-text").hide();
					$("#foraeldre-raadgivning-text").hide();
					$("#seksualvejledning-text").hide();
					$("#saerlige-tilbud-til-saarbare-kvinder-text").hide();
					$("#specialpaedagogisk-stoette-og-vejledning-text").hide();
					$("#saerlig-specialpaedagogisk-mentor-og-coach-text").toggle();
					$("#mere-end-bare-hjemmevejledning-text").hide();
					$("#psykoedukation-text").hide();
					$("#henvisning-og-priser1-text").hide();
				});
		 
		 		$("#mere-end-bare-hjemmevejledning").click(function() {
					$("#telefon-raadgivning-text").hide();
					$("#supervision-text").hide();
					$("#foraeldre-raadgivning-text").hide();
					$("#seksualvejledning-text").hide();
					$("#saerlige-tilbud-til-saarbare-kvinder-text").hide();
					$("#specialpaedagogisk-stoette-og-vejledning-text").hide();
					$("#saerlig-specialpaedagogisk-mentor-og-coach-text").hide();
					$("#mere-end-bare-hjemmevejledning-text").toggle();
					$("#psykoedukation-text").hide();
					$("#henvisning-og-priser1-text").hide();
				});
		 
		 		$("#psykoedukation").click(function() {
					$("#telefon-raadgivning-text").hide();
					$("#supervision-text").hide();
					$("#foraeldre-raadgivning-text").hide();
					$("#seksualvejledning-text").hide();
					$("#saerlige-tilbud-til-saarbare-kvinder-text").hide();
					$("#specialpaedagogisk-stoette-og-vejledning-text").hide();
					$("#saerlig-specialpaedagogisk-mentor-og-coach-text").hide();
					$("#mere-end-bare-hjemmevejledning-text").hide();
					$("#psykoedukation-text").toggle();
					$("#henvisning-og-priser1-text").hide();
				});
		 
		 		$("#henvisning-og-priser1").click(function() {
					$("#telefon-raadgivning-text").hide();
					$("#supervision-text").hide();
					$("#foraeldre-raadgivning-text").hide();
					$("#seksualvejledning-text").hide();
					$("#saerlige-tilbud-til-saarbare-kvinder-text").hide();
					$("#specialpaedagogisk-stoette-og-vejledning-text").hide();
					$("#saerlig-specialpaedagogisk-mentor-og-coach-text").hide();
					$("#mere-end-bare-hjemmevejledning-text").hide();
					$("#psykoedukation-text").hide();
					$("#henvisning-og-priser1-text").toggle();
				});
		 
	$("#udredning").click(function() {
		$("#hvem-kan-komme-i-behandling-ul").hide();
		$("#raadgivning-ul").hide();
		$("#udredning-ul").toggle();
		$("#netvaerk-ul").hide();
	});
		 
		 		$("#paa-vej-til-undersoegelse").click(function() {
					$("#paa-vej-til-undersoegelse-text").toggle();
					$("#diagnostisk-udredning-text").hide();
					$("#udredning-af-sprog-text").hide();
					$("#psykologisk-funktionsudredning-text").hide();
					$("#neuropsykologisk-udredning-text").hide();
					$("#behandling-af-angst-text").hide();
					$("#henvisning-og-priser2-text").hide();
				});
		 
		 		$("#diagnostisk-udredning").click(function() {
					$("#paa-vej-til-undersoegelse-text").hide();
					$("#diagnostisk-udredning-text").toggle();
					$("#udredning-af-sprog-text").hide();
					$("#psykologisk-funktionsudredning-text").hide();
					$("#neuropsykologisk-udredning-text").hide();
					$("#behandling-af-angst-text").hide();
					$("#henvisning-og-priser2-text").hide();
				});
		 
		 		$("#udredning-af-sprog").click(function() {
					$("#paa-vej-til-undersoegelse-text").hide();
					$("#diagnostisk-udredning-text").hide();
					$("#udredning-af-sprog-text").toggle();
					$("#psykologisk-funktionsudredning-text").hide();
					$("#neuropsykologisk-udredning-text").hide();
					$("#behandling-af-angst-text").hide();
					$("#henvisning-og-priser2-text").hide();
				});
		 
		 		$("#psykologisk-funktionsudredning").click(function() {
					$("#paa-vej-til-undersoegelse-text").hide();
					$("#diagnostisk-udredning-text").hide();
					$("#udredning-af-sprog-text").hide();
					$("#psykologisk-funktionsudredning-text").toggle();
					$("#neuropsykologisk-udredning-text").hide();
					$("#behandling-af-angst-text").hide();
					$("#henvisning-og-priser2-text").hide();
				});
		 
		 		$("#neuropsykologisk-udredning").click(function() {
					$("#paa-vej-til-undersoegelse-text").hide();
					$("#diagnostisk-udredning-text").hide();
					$("#udredning-af-sprog-text").hide();
					$("#psykologisk-funktionsudredning-text").hide();
					$("#neuropsykologisk-udredning-text").toggle();
					$("#behandling-af-angst-text").hide();
					$("#henvisning-og-priser2-text").hide();
				});
		 
		 		$("#behandling-af-angst").click(function() {
					$("#paa-vej-til-undersoegelse-text").hide();
					$("#diagnostisk-udredning-text").hide();
					$("#udredning-af-sprog-text").hide();
					$("#psykologisk-funktionsudredning-text").hide();
					$("#neuropsykologisk-udredning-text").hide();
					$("#behandling-af-angst-text").toggle();
					$("#henvisning-og-priser2-text").hide();
				});
		 
		 		$("#henvisning-og-priser2").click(function() {
					$("#paa-vej-til-undersoegelse-text").hide();
					$("#diagnostisk-udredning-text").hide();
					$("#udredning-af-sprog-text").hide();
					$("#psykologisk-funktionsudredning-text").hide();
					$("#neuropsykologisk-udredning-text").hide();
					$("#behandling-af-angst-text").hide();
					$("#henvisning-og-priser2-text").toggle();
				});
		 
	$("#netvaerk").click(function() {
		$("#hvem-kan-komme-i-behandling-ul").hide();
		$("#raadgivning-ul").hide();
		$("#udredning-ul").hide();
		$("#netvaerk-ul").toggle();
	});
		 
		 		$("#netvaerksgrupper").click(function() {
					$("#netvaerksgrupper-text").toggle();
					$("#det-siger-folk-text").hide();
				});
		 
		 		$("#det-siger-folk").click(function() {
					$("#netvaerksgrupper-text").hide();
					$("#det-siger-folk-text").toggle();
				});
		 
		 
	
	/* Job og Uddannelse */
		 
	$("#statusmoede").click(function() {
		$("#statusmoede-text").toggle();
		$("#stu-ul").hide();
		$("#job-ul").hide();
		$("#mentor-text").hide();
	});
		 
	$("#stu").click(function() {
		$("#statusmoede-text").hide();
		$("#stu-ul").toggle();
		$("#job-ul").hide();
		$("#mentor-text").hide();
	});
		 
		 		$("#fag").click(function() {
					$("#fag-text").toggle();
					$("#kurser-text").hide();
					$("#dine-foerste-12-uger-text").hide();
					$("#praktik-text").hide();
					$("#ferie-text").hide();
					$("#sygdom-text").hide();
					$("#afslutning-paa-stu-text").hide();
				});
		 
		 		$("#kurser").click(function() {
					$("#fag-text").hide();
					$("#kurser-text").toggle();
					$("#dine-foerste-12-uger-text").hide();
					$("#praktik-text").hide();
					$("#ferie-text").hide();
					$("#sygdom-text").hide();
					$("#afslutning-paa-stu-text").hide();
				});
		 
		 		$("#dine-foerste-12-uger").click(function() {
					$("#fag-text").hide();
					$("#kurser-text").hide();
					$("#dine-foerste-12-uger-text").toggle();
					$("#praktik-text").hide();
					$("#ferie-text").hide();
					$("#sygdom-text").hide();
					$("#afslutning-paa-stu-text").hide();
				});
		 
		 		$("#praktik").click(function() {
					$("#fag-text").hide();
					$("#kurser-text").hide();
					$("#dine-foerste-12-uger-text").hide();
					$("#praktik-text").toggle();
					$("#ferie-text").hide();
					$("#sygdom-text").hide();
					$("#afslutning-paa-stu-text").hide();
				});
		 
		 		$("#ferie").click(function() {
					$("#fag-text").hide();
					$("#kurser-text").hide();
					$("#dine-foerste-12-uger-text").hide();
					$("#praktik-text").hide();
					$("#ferie-text").toggle();
					$("#sygdom-text").hide();
					$("#afslutning-paa-stu-text").hide();
				});
		 
		 		$("#sygdom").click(function() {
					$("#fag-text").hide();
					$("#kurser-text").hide();
					$("#dine-foerste-12-uger-text").hide();
					$("#praktik-text").hide();
					$("#ferie-text").hide();
					$("#sygdom-text").toggle();
					$("#afslutning-paa-stu-text").hide();
				});
		 
		 		$("#afslutning-paa-stu").click(function() {
					$("#fag-text").hide();
					$("#kurser-text").hide();
					$("#dine-foerste-12-uger-text").hide();
					$("#praktik-text").hide();
					$("#ferie-text").hide();
					$("#sygdom-text").hide();
					$("#afslutning-paa-stu-text").toggle();
				});
		 
	$("#job").click(function() {
		$("#statusmoede-text").hide();
		$("#stu-ul").hide();
		$("#job-ul").toggle();
		$("#mentor-text").hide();
	});	 
		 
		 		$("#vaerksted").click(function() {
					$("#vaerksted-text").toggle();
					$("#ikea-text").hide();
					$("#intern-arbejdsevneafklaring-text").hide();
					$("#ekstern-arbejdsevneafklaring-text").hide();
					$("#ekstern-erhvervsforloeb-text").hide();
					$("#beskyttet-beskaeftigelse-text").hide();
				});	 
		 
		 		$("#ikea").click(function() {
					$("#vaerksted-text").hide();
					$("#ikea-text").toggle();
					$("#intern-arbejdsevneafklaring-text").hide();
					$("#ekstern-arbejdsevneafklaring-text").hide();
					$("#ekstern-erhvervsforloeb-text").hide();
					$("#beskyttet-beskaeftigelse-text").hide();
				});	 
		 
		 		$("#intern-arbejdsevneafklaring").click(function() {
					$("#vaerksted-text").hide();
					$("#ikea-text").hide();
					$("#intern-arbejdsevneafklaring-text").toggle();
					$("#ekstern-arbejdsevneafklaring-text").hide();
					$("#ekstern-erhvervsforloeb-text").hide();
					$("#beskyttet-beskaeftigelse-text").hide();
				});	 
		 
		 		$("#ekstern-arbejdsevneafklaring").click(function() {
					$("#vaerksted-text").hide();
					$("#ikea-text").hide();
					$("#intern-arbejdsevneafklaring-text").hide();
					$("#ekstern-arbejdsevneafklaring-text").toggle();
					$("#ekstern-erhvervsforloeb-text").hide();
					$("#beskyttet-beskaeftigelse-text").hide();
				});	 
		 
		 		$("#ekstern-erhvervsforloeb").click(function() {
					$("#vaerksted-text").hide();
					$("#ikea-text").hide();
					$("#intern-arbejdsevneafklaring-text").hide();
					$("#ekstern-arbejdsevneafklaring-text").hide();
					$("#ekstern-erhvervsforloeb-text").toggle();
					$("#beskyttet-beskaeftigelse-text").hide();
				});	 
		 
		 		$("#beskyttet-beskaeftigelse").click(function() {
					$("#vaerksted-text").hide();
					$("#ikea-text").hide();
					$("#intern-arbejdsevneafklaring-text").hide();
					$("#ekstern-arbejdsevneafklaring-text").hide();
					$("#ekstern-erhvervsforloeb-text").hide();
					$("#beskyttet-beskaeftigelse-text").toggle();
				});	 
		 
	$("#mentor").click(function() {
		$("#statusmoede-text").hide();
		$("#stu-ul").hide();
		$("#job-ul").hide();
		$("#mentor-text").toggle();
	});	 
		 
		 
	/* Forskning om Autisme */
		 
	$("#fua").click(function() {
		$("#fua-text").toggle();
		$("#igangvaerende-projekter-text").hide();
		$("#specifikke-maalomraader-text").hide();
	});
		 
	$("#igangvaerende-projekter").click(function() {
		$("#fua-text").hide();
		$("#igangvaerende-projekter-text").toggle();
		$("#specifikke-maalomraader-text").hide();
	});
		 
	$("#specifikke-maalomraader").click(function() {
		$("#fua-text").hide();
		$("#igangvaerende-projekter-text").hide();
		$("#specifikke-maalomraader-text").toggle();
	});
	
});





