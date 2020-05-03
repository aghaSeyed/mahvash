// Get that hamburger menu cookin' //

document.addEventListener("DOMContentLoaded", function() {
    // Get all "navbar-burger" elements
    var $navbarBurgers = Array.prototype.slice.call(
        document.querySelectorAll(".navbar-burger"),
        0
    );
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
        // Add a click event on each of them
        $navbarBurgers.forEach(function($el) {
            $el.addEventListener("click", function() {
                // Get the target from the "data-target" attribute
                var target = $el.dataset.target;
                var $target = document.getElementById(target);
                // Toggle the class on both the "navbar-burger" and the "navbar-menu"
                $el.classList.toggle("is-active");
                $target.classList.toggle("is-active");
            });
        });
    }
});

// Smooth Anchor Scrolling
$(document).on("click", 'a[href^="#"]', function(event) {
    event.preventDefault();
    $("html, body").animate({
            scrollTop: $($.attr(this, "href")).offset().top
        },
        500
    );
});

// When the user scrolls down 20px from the top of the document, show the scroll up button
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("toTop").style.display = "block";
    } else {
        document.getElementById("toTop").style.display = "none";
    }
}

// Preloader
$(document).ready(function($) {
    $(".preloader-wrapper").fadeOut();
    $("body").removeClass("preloader-site");
    $('.type-it').typeIt({});
    //detected terminal words
    var span = $("#span");
    span.html(span.html().replace(/root/, '<span style="color: #3498db ; font-weight: bold; ">$&</span>'));

    var span = $("#span");
    span.html(span.html().replace(/~/, '<span style="color: #2ecc71 ; font-weight: bold; ">$&</span>'));

    var span = $("#span2");
    span.html(span.html().replace(/root/, '<span style="color: #e74c3c ; font-weight: bold; ">$&</span>'));

    var span = $("#span2");
    span.html(span.html().replace(/Error/, '<span style="color: #e74c3c ; font-weight: bold; ">$&</span>'));

    //result proccess
    setInterval(Timer, 3500);

    function Timer() {
        $(".result").show();
    }

    //controllers :D
    $("#close").click(function() {
        console.log("sa");
        $(".window").hide();
        $(".afterclose").fadeIn("fast");
    });

    $("button.open").click(function() {
        $(".window").show();
        $(".afterclose").hide();
    });

    $("button.maximize").click(function() {
        $(".window").addClass("windowmax");
        $(".bash").addClass("bashmax");
        $(".windowmax").removeClass("window");
        $(".bashmax").removeClass("bash");
    });

    $("button.minimize").click(function() {
        $(".bash").remove();
        $(".window").addClass("windowmin");
        $(".windowmin").removeClass("window");
    });


});
$(window).load(function() {
    var Body = $("body");
    Body.addClass("preloader-site");

});