$(function () {
    $('.page-header').each(function () {
		var $window =$(window),
        $header = $(this),
        headerOffsetTop = $header.offset().top;

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
$(function myFunction() {
    if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    } else {
    navbar.classList.remove("sticky");
    }
}

$(function() {

var $window = $(window),
	$header = $('.page-header'),
	headerOffsetTop = $header.offset().top;


$window.on('scroll', function() {
    if ($window.scrollTop() > headerOffsetTop) {
    $header.addClass('sticky');
    } else {
    $header.removeClass('sticky');
    }
});

$window.trigger('scroll');

});

<script type="text/javascript">
    $(window).on("load", function() {
        $(".slider").slider();
    });
</script>

<script type="text/javascript">
    $(window).on("load", function() {
        $(".slider").slider({
            width: '1024px',
            height: '500px',
            speed: 2000,
            delay: 5000
        });
    });
</script>
