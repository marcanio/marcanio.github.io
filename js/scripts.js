//Counters for text
let i = 0;
let j = 0;
let k = 0;

//Scrolling feature down the page
$(document).ready(function() {

    var modalInfo = {
        1: {
            title: "Mars Rover",
            info: "In CPrE 288-Embedded Systems, we worked with an iRobot Create with an Atmega 128 microcontroller. For the final project, we had to create a robot that would traverse an unknown course to find a landing zone. The robot would make decisions based on the information given from an IR sensor, Sonar ping sensor, and a rotating stepper motor. The Mars Rover was designed in a team, and my contribution was a python program that would calculate the next moves for the robot. This project taught me how to integrate different software into one project (Embedded C and Python).The link provided is a demonstration of the final project. \n",
            link: "https://www.youtube.com/watch?v=OU5m58bhZ6Y",
            github: "https://github.com/marcanio1/CprE288"
        },
        2: {
            title: "Project 2",
            info: "...",
            link: "#",
            github: "#"
        },
        3: {
            title: "Project 3",
            info: "The LED^3 is a cube made out of LED's connected to an Arduino UNO. A total of 216 LEDs were soldered together in a pattern that allowed me to access each LED individually. Each level of the cube was connected to the ground, and each vertical layer was connected to the Arduino. This allowed me to represent the cube into an array so that I could access each node. A microphone picked up the outside noise, which was converted into a number based on how loud the sound was. With that data, the LED cube 'danced' to the music being played.",
            link: "#",
            github: "https://github.com/marcanio1/LED_Cube"
        },
        4: {
            title: "Project 4",
            info: "In CPrE- 381 Computer Organization and Assembly Level Programming, we designed a single cycle pipeline processor that was able to run MIPS assembly language. The goal of the project was to develop and test a processor built in VHDL that was correctly outputting the MIPS assembly code. It was a team project individually split up. In VHDL, code is categorized into components. So as a team, we would individually build all of the components and then collaborate to see who had the best idea in terms of efficiency. This project taught me the principles of designing hardware/software interface, MIPS assembly, and a pipelined implementation of MIPS instruction set architecture.The link provided briefly explains the concept of pipeline processing.",
            link: "https://en.wikipedia.org/wiki/Instruction_pipelining",
            github: "https://github.com/marcanio1/Processor-design"
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
    var span = document.getElementsByClassName("close");

    // open modal 
    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click", function() {
            var project = btn[i].parentElement;
            openModal(project);
        })
    };

    function openModal(project) {
        var id = project.id;
        //var img = project.getElementsByTagName("img")[0].src;
        fillOut(id);
        modal.style.display = "block";
        document.getElementsByClassName("modal-content")[0].classList.add("scale");
    }

    function fillOut(id) {
        document.getElementById("title").innerHTML = modalInfo[id].title;
        document.getElementById("info").innerHTML = modalInfo[id].info;
        //document.getElementById("img").src = img;
        document.getElementById("live").onclick = function() {
            window.open(modalInfo[id].link, '_blank');
        }
        document.getElementById("github").onclick = function() {
            window.open(modalInfo[id].github); //This could be better -- FIX
        }
    }

    // close the modal
    span[0].onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none"; //Too lazy to change this..
        }
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