//header hide on scroll

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var currentHeight = $('#navbar').height();
var prevScrollpos = window.pageYOffset;




window.onscroll = function() {

	var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    $('#navbar').addClass('fixed in');
    
  } else {
    $('#navbar').removeClass('in');
  }
  prevScrollpos = currentScrollPos;
}






$(document).ready(function(){

  // $('#toggle').click(function(){
	// 	$('#mySidenav').toggleClass('active');
	// 	$('#main').toggleClass('push-right');
	// 	$(this).toggleClass('active');
	// });
	
	// $('#close').click(function(){
	// 	$('#mySidenav').removeClass('active');
	// 	$('#main').removeClass('push-right');
	// 	$('#toggle').removeClass('active');
	// });
  
  $('#toggle').click(function(){
		$('.menu-area').slideToggle('fast');
		$(this).toggleClass('active');
	});
	
	

});



//animation
new WOW().init();

$('.team-slider').slick({
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
	arrows: false,
	autoplay: true,
	autoplaySpeed: 8000,
	responsive: [
    {
      breakpoint: 1024,
      settings: {
        adaptiveHeight: true
      }
		}
	]

  });



//smooth scroll

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a.smooth").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});



//blog slider
$('.blog-slider').slick({
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  arrows: true,
  responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          
        }
      },
      {
        breakpoint: 574,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:false
        }
      }
      
    ]
});
