//Counters for text
let i = 0;
let j = 0;
let k = 0;

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