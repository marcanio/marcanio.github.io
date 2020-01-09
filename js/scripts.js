//Counters for text
let i = 0;
let j = 0;
let k = 0;

//Not used anymore
function typeWriter() {
    let txt = 'Hello my name is';
    let txt2 = "Eric Marcanio";
    let txt3 = "I'm a Computer Engineer";
    let speed = 60;
    if (i < txt.length) {
        document.getElementById("HiMyName").innerHTML += txt.charAt(i);
        i++;

    } else if (j < txt2.length) {
        document.getElementById("MyName").innerHTML += txt2.charAt(j);
        j++;
    } else {
        document.getElementById("computa").innerHTML += txt3.charAt(k);
        k++;

    }
    setTimeout(typeWriter, speed);
}


//Scrolling feature down the page
$(document).ready(function() {

    //Click and scroll functions
    jQuery('a').click(function() {
        jQuery('html, body').animate({
            scrollTop: jQuery(jQuery(this).attr('href')).offset().top
        }, 500);
        return false;
    });

    //Objects appear when they show up on the screen
    $(window).scroll(function() {

        /* Check the location of each desired element */
        $('.hideme').each(function(i) {

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if (bottom_of_window > bottom_of_object) {

                $(this).animate({ 'opacity': '1' }, 500);

            }

        });

    });

    //moduals for projects
    $(".modal-trigger").click(function(e) {
        e.preventDefault();
        dataModal = $(this).attr("data-modal");
        $('#' + dataModal).css({ "display": "block" });
        // $("body").css({"overflow-y": "hidden"}); //Prevent double scrollbar.
    });

    $(".close-modal, .modal-sandbox").click(function() {
        $(".modal").css({ "display": "none" });
        // $("body").css({"overflow-y": "auto"}); //Prevent double scrollbar.
    });

    // Create timeline


});