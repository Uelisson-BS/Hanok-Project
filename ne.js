jQuery(document).ready(function(){
	jQuery(".toggle-box2").hide(); 
	
	jQuery(".toggle").toggle(function(){
		jQuery(this).addClass("toggle-active");
		}, function () {
		                                
	});
	
	jQuery(".toggle").click(function(){
		jQuery(this).next(".toggle-box").slideToggle();
	});
});
