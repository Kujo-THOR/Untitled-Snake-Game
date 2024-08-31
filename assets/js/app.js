$(function() {

    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();


    /* Fixed Header */
    checkScroll(scrollOffset);

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if( scrollOffset >= introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    
    /* Smooth scroll */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop:  blockOffset
        }, 500);
    });


    /* Menu nav toggle */
    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });


    /* Collapse */
    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('collapse');

        $this.toggleClass("active");
    });


    /* Slider */
    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    /* Play Game button */
    var modal = document.getElementById("customModal");
    var btn = document.getElementById("btn");
    var span = document.getElementsByClassName("close")[0];
    // When the user clicks the button
    btn.onclick = function() {
        modal.style.display = "block";
    }
    // When the user clicks on <x>
    span.onclick = function() {
        modal.style.display = "none";
    }


    /* Search */
    var icon = document.getElementById(".search-icon");
    var imput = document.getElementById("#search-input");
    // When the user clicks the button
    icon.addEventListener('click', function (event) {
        event.preventDefault();
        // Toggle the active
        imput.classList.toggle('active');
    });
    
});

