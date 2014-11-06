// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery-1.11.0.min
//= require SmoothScroll
//= require jquery.transit
//= require jquery.browser
//= require bootstrap.min
//= require jquery.touchSwipe.min
//= require jflickrfeed.min
//= require supersized.3.2.7.min
//= require supersized.shutter.min
//= require jquery.fitvids
//= require jquery.mCustomScrollbar.concat.min
//= require jquery.nicescroll.min
//= require jquerypp.elastislide.custom
//= require jquery.elastislide
//= require jquery.knob
//= require jquery.cycle.all
//= require portfolio.detail.min
//= require jquery.flexslider.min
//= require jQuery.tubeplayer
//= require jquery.mixitup.min
//= require jquery.magnific-popup.min
//= require jquery.support.plugin.min
//= require custom
//= require video.min
//= require bigvideo
//= require jquery.slider.min
//= require main-fm.min
//= require jquery.jstwitter
//= require_tree . 


function superGalleryInit (){			
		
	jQuery(function($){
		$.supersized({
			slideshow               :   1,			// Slideshow on/off
			autoplay				:	1,			// Slideshow starts playing automatically
			transition				:	1,			// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
			slide_interval          :   4000,		// Length between transitions				
			
			slides: [	// Slideshow Images, image_small attribute is used to load the mobile version image, main_title attribute is used to add the image tile div
						{ image : 'assets/home_slider/home_slide_image1.jpg', image_small : 'assets/home_slider/home_slide_image1_s.jpg', main_title : ".home_slider_title1", slide_interval: 4200},
						{ image : 'assets/home_slider/home_slide_image2.jpg', image_small : 'assets/home_slider/home_slide_image2_s.jpg', main_title : ".home_slider_title2", slide_interval: 4400},  
						{ image : 'assets/home_slider/home_slide_image3.jpg', image_small : 'assets/home_slider/home_slide_image3_s.jpg', main_title : ".home_slider_title3", slide_interval: 4000},
						{ image : 'assets/home_slider/home_slide_image4.jpg', image_small : 'assets/home_slider/home_slide_image4_s.jpg', main_title : ".home_slider_title4", slide_interval: 6500},
						{ image : 'assets/home_slider/home_slide_image5.jpg', image_small : 'assets/home_slider/home_slide_image5_s.jpg', main_title : ".home_slider_title5", slide_interval: 4800}
					]
		});
	});	
			
}
		
$(document).ready(function(){
					
	/* Twitter initilize */
			
	$(function () {
		// start jqtweet!
	    JQTWEET.loadTweets( { numTweets: 3 } );
	});				
		
	/* Site Main plug-in initilize */
	jQuery(function($){
		$("body").mainFm({
					
			/* Set the opening page. 
			leave it blank value if you need to show the home page as a opening page*/
			currentPage : "!home",
					
			/* FlexSlider slideshow speed */
			slideshowSpeed : 5000
					
		});
	});	
								
	// Initialize Portfolio mixitup plugin
	$(function(){
		$('.portfolio_items').mixitup();
	});		
	
	// Portfolio Filterable gallery project detail plug-in initialize
	$("body").find(".portfolioPage").each(function(){
		var mc = $(this);
		jQuery(function($){
			mc.detailPage({
				filter : ".controls"
			})
		});	
	});			
	
	/* Home page Slider */			
	$("body").find(".slider1").each(function(){
		var mc = $(this);
		$(function(){
			mc.fmMainSlider({ 
				pageBgResize:true, 			// Boolean: It used to resize the height of the background as per the slider height
				slideNumber : true, 		// Boolean: Create slide number
				playPause : true, 			// Boolean: Create play pause button
				nextPreviousButton : true, 	// Boolean: Create next button
				autoplay : false, 			// Boolean: Enable auto play
				slideshowDelayTime : 2.1, 	// Integer: slideshow delay time
				dotButtons : true,
				mouse_drag : false 			// Boolean: Enable mouse drag action
			});
		});
	});
	
	// Email submit action			
	$("#email_submit").click(function() { 
							
		$('#reply_message').removeClass();
		$('#reply_message').html('')
		var regEx = "";	 
						
		// validate Name				
		var name = $("input#name").val();  
		regEx=/^[A-Za-z .'-]+$/; 
		if (name == "" || name == "Name"  || !regEx.test(name)) { 
			$("input#name").val(''); 
			$("input#name").focus();  
			return false;  
		}
		
		// validate Email						  
		var email = $("input#email").val();  
		regEx=/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;											
		if (email == "" || email == "Email" || !regEx.test(email)) { 
			$("input#email").val(''); 
			$("input#email").focus();  
			return false;  
		}  
		
		// validate comment			
		var comments = $("textarea#comments").val(); 
		if (comments == "" || comments == "Comments..." || comments.length < 2) { 
			$("textarea#comments").val(''); 
			$("textarea#comments").focus();  
			return false;  
		}  
							
		var dataString = 'name='+ $("input#name").val() + '&email=' + $("input#email").val() + '&comments=' + $("textarea#comments").val();									
		$('#reply_message').addClass('email_loading');
		
		// Send form data to mailer.php 
		$.ajax({
			type: "POST",
			url: "php/mailer.php",
			data: dataString,
			success: function() {
				$('#reply_message').removeClass('email_loading');
				$('#reply_message').addClass('list3');
				$('#reply_message').html("Mail sent sucessfully")
				.hide()
				.fadeIn(1500);
					}
				});
		return false;				
	});		
		
});	
