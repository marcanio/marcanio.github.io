//Counters for text
let i = 0;
let j = 0;
let k = 0;

//Scrolling feature down the page
$(document).ready(function() {

    var modalInfo = {
        1: {
            title: "Project 1",
            info: "hey",
            link: "#",
            github: "#"
        },
        2: {
            title: "Project 2",
            info: "...",
            link: "#",
            github: "#"
        },
        3: {
            title: "Project 3",
            info: "...",
            link: "#",
            github: "#"
        },
        4: {
            title: "Project 4",
            info: "....",
            link: "#",
            github: "#"
        },
        5: {
            title: "Project 5",
            info: "...",
            link: "#",
            github: "#"
        },
        6: {
            title: "Project 6",
            info: "...",
            link: "#",
            github: "#"
        }
    };

    // Get the modal
    var modal = document.getElementById('preview');

    // button that opens the modal
    var btn = document.getElementsByClassName("button");

    // <span> that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // open modal 
    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click", function() {
            var project = btn[i].parentElement;
            openModal(project);
        })
    };

    function openModal(project) {
        //var id = project.id;
        //var img = project.getElementsByTagName("img")[0].src;
        // fillOut(id, img);
        modal.style.display = "block";
        document.getElementsByClassName("modal-content")[0].classList.add("scale");
    }

    function fillOut(id, img) {
        document.getElementById("title").innerHTML = modalInfo[id].title;
        document.getElementById("info").innerHTML = modalInfo[id].info;
        //document.getElementById("img").src = img;
        document.getElementById("live").onclick = function() {
            window.open(modalInfo[id].link, '_blank');
        }
        document.getElementById("github").onclick = function() {
            window.open(modalInfo[id].github, '_blank'); //This could be better -- FIX
        }
    }

    // close the modal
    span.onclick = function() {
        modal.style.display = "none"; //Implement with css
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none"; //Too lazy to change this..
        }
    }

    //Edit above at some point


    //Click and scroll functions
    jQuery('a').click(function() {
        jQuery('html, body').animate({
            scrollTop: jQuery(jQuery(this).attr('href')).offset().top
        }, 500);
        return false;
    });

    //Also placed outside in case the screen is reloded and you are currently on an object
    $('.hideme').each(function(i) {

        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        /* If the object is completely visible in the window, fade it it */
        if (bottom_of_window >= bottom_of_object) {

            $(this).animate({ 'opacity': '1' }, 500);

        }

    });
    //Objects appear when they show up on the screen
    $(window).scroll(function() {

        /* Check the location of each desired element */
        $('.hideme').each(function(i) {

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if (bottom_of_window >= bottom_of_object) {

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


//Not used anymore
/*
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
*/