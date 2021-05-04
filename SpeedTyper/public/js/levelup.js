var wpm = 0; //Words per minute
/*
Back button to go back to the home page
*/
function goBack() {
    window.history.back();
}

/*
Instructions are toggeled by the instrcution button
*/
let instBool = false;

function showHowToPlay() {

    if (instBool == false) {
        instBool = true;

        document.getElementById("HowtoPlay").innerHTML = "<b>How to Play-</b><br>The goal is to reach the target WPM on each level<br>If you reach the target WPM you will move on. If not, Restart!<br>*Clicking the reset button will reset your levels*<br> <b>Goodluck!<b>"
    } else {
        instBool = false;
        document.getElementById("HowtoPlay").innerHTML = "";
    }
}
var currentLevel = 1;
var passORfail;
var targetWPM = 30;
var level1WPM, level2WPM, level3WPM, level4WPM, level5WPM, level6WPM;
var lives = 3;

function levels() {
    passORfail = false;
    if (currentLevel == 1 && wpm >= 30) {
        passORfail = true;
        targetWPM = 40;
        level1WPM = wpm;

    } else if (currentLevel == 1 && wpm <= 30) {
        passORfail = false;
    }

    if (currentLevel == 2 && wpm >= 40) {
        passORfail = true;
        targetWPM = 50;
        level2WPM = wpm;
    } else if (currentLevel == 2 && wpm <= 40) {
        passORfail = false;
    }

    if (currentLevel == 3 && wpm >= 50) {
        passORfail = true;
        targetWPM = 60;
        level3WPM = wpm;
    } else if (currentLevel == 3 && wpm <= 50) {
        passORfail = false;
    }
    if (currentLevel == 4 && wpm >= 60) {
        passORfail = true;
        targetWPM = 70;
        level4WPM = wpm;
    } else if (currentLevel == 4 && wpm <= 60) {
        passORfail = false;
    }
    if (currentLevel == 5 && wpm >= 70) {
        passORfail = true;
        targetWPM = 80;
        level5WPM = wpm;
    } else if (currentLevel == 5 && wpm <= 70) {
        passORfail = false;
    }
    if (currentLevel == 6 && wpm >= 80) {
        passORfail = true;
        targetWPM = 90;
        level6WPM = wpm;
    } else if (currentLevel == 6 && wpm <= 80) {
        passORfail = false;
    }
    if (currentLevel == 7 && wpm >= 90) {
        passORfail = true;
        targetWPM = 100;
        level6WPM = wpm;
    } else if (currentLevel == 7 && wpm <= 90) {
        passORfail = false;
    }
    if (currentLevel == 8 && wpm >= 100) {
        passORfail = true;
        targetWPM = 110;
        level6WPM = wpm;
    } else if (currentLevel == 8 && wpm <= 100) {
        passORfail = false;
    }
    if (currentLevel == 9 && wpm >= 110) {
        passORfail = true;
        targetWPM = 120;
        level6WPM = wpm;
    } else if (currentLevel == 9 && wpm <= 110) {
        passORfail = false;
    }
    if (currentLevel == 10 && wpm >= 120) {
        passORfail = true;
        targetWPM = 130;
        level6WPM = wpm;
    } else if (currentLevel == 10 && wpm <= 120) {
        passORfail = false;
    }
    if (currentLevel == 11 && wpm >= 130) {
        passORfail = true;
        targetWPM = 140;
        level6WPM = wpm;
    } else if (currentLevel == 11 && wpm <= 130) {
        passORfail = false;
    }
    if (currentLevel == 12 && wpm >= 140) {
        passORfail = true;
        targetWPM = 150;
        level6WPM = wpm;
    } else if (currentLevel == 12 && wpm <= 140) {
        passORfail = false;
    }
    finished(passORfail);

}

/*
Randomizes what string is given to the user when the game is reset

Input- Adding a certain amount of strings based on the level
*/
function changeT() {
    var sentenceAmount;

    //var ranSentences = ['a a a a a ', 'a a a a a a ', 'a a a a ', 'a a a a a ']; //Test

    document.getElementById("input_text").innerHTML = "";
    if (currentLevel == 2 || currentLevel == 3) {
        sentenceAmount = 2;
    } else {
        sentenceAmount = 3;
    }
    var ranSentences = ['I am counting my calories, yet I really want dessert.', 'The waves were crashing on the shore; it was a lovely sight.', 'Where do random thoughts come from?', 'Writing a list of random sentences is harder than I initially thought it would be.', 'Sometimes, all you need to do is completely make an ass of yourself and laugh it off to realise that life is not so bad after all.', 'A purple pig and a green donkey flew a kite in the middle of the night and ended up sunburnt.', 'Sometimes it is better to just walk away from things and go back to them later when you’re in a better frame of mind.', 'She borrowed the book from him many years ago and has not yet returned it.', 'Children must obey their parents and parents must obey their employers.', 'The limits of my language are the limits of my world.', 'It is true that he goes abroad every year.', 'Tom seems to be afraid of just about everything.', 'Mary certainly is full of energy today.', 'I pay fifty pounds a week for board and lodging.', 'The soft corner can not hang the difference.', 'The passionate flower attracts into the daring hair.', 'Is the prevent tradition better than the idea?', 'The standing bottle can not rhyme the bedroom.', 'Is the compare trip better than the individual?', 'It was then the cynical big met the impractical mistake.', 'The connection enlightens the pleasant rain.', 'When I was little I had a car door slammed shut on my hand. I still remember it quite vividly.', 'He turned in the research paper on Friday; otherwise, he would have not passed the class.', 'I checked to make sure that he was still alive.', 'She borrowed the book from him many years ago and has not yet returned it.'];
    for (var i = 0; i < sentenceAmount; i++) {
        let random = Math.floor(Math.random() * ranSentences.length);
        document.getElementById("input_text").innerHTML += ranSentences[random];
        if (i + 1 != sentenceAmount) {
            document.getElementById("input_text").innerHTML += ' ';
        }
    }
    //document.getElementById("input_text").innerHTML += "That was fun.";
}
/*
    Store the users score on the history
    */
function finished(passORfail) {
    //alert("Congratulations!\nWords per minute: " + wpm + "\nWordcount: " + wordcount + "\nErrors:" + errors);


    if (passORfail == true) {
        document.getElementById("personalLeaderboard").innerHTML += "<br>" + "Level-" + currentLevel + ".)" + "WPM: " + wpm + "&emsp;" + "Passed"; //Used to hold a local record of yo
        currentLevel += 1;
        changeHeader();
    } else if (passORfail == false) {
        document.getElementById("SubmitScore").style.display = "inline";
        document.getElementById("score").value = currentLevel;
        //document.getElementById("personalLeaderboard").innerHTML += "<br>" + "Level-" + currentLevel + ".)" + "WPM: " + wpm + "&emsp;" + "Failed"; //Used to hold a local record of yo
        document.getElementById("personalLeaderboard").innerHTML += "<br>" + "You lost on Level: " + currentLevel;
        document.getElementById("personalLeaderboard").innerHTML += "<br>" + "Better luck next time! Click Reset to try again"; //Used to hold a local record of yo

    }

}
/* Resets whole page */

function reset() {
    location.reload();

}

function changeHeader() {
    if (currentLevel <= 13) {
        document.getElementById("middleone").innerHTML = "LevelUP - Level #" + currentLevel;
    }
    /*
    else if (currentLevel == 7) {
        document.getElementById("middleone").innerHTML = "You beat LevelUP!";
    }
*/
    document.getElementById("TargetWPM").innerHTML = "Target WPM: " + targetWPM;
}


$(document).ready(function() {

    let character_length = 31; //Char showing on the screen
    let index = 0; //Spot in the paragraph
    let letters = $("#input_text").val(); //Amount of letters
    let started = false; //When to start the clock
    let current_string = letters.substring(index, index + character_length); //This is what will display in the top box
    let timer = 0; //Timer is in seconds
    let min, sec, total = 0; //Convertion of timer to seconds, minutes, and the total time

    let errors = 0; //Characters not matching prompt
    let interval_timer; //Used for calculations 
    let wordcount = 0; //Amount of words typed by user
    let historycount = 1; //Amount of history showing

    document.addEventListener('click', function(e) { if (document.activeElement.toString() == '[object HTMLButtonElement]') { document.activeElement.blur(); } }); // Added to unclick reset button

    $("#target").text(current_string); //outputted on the prompt
    2
    $(window).keypress(function(evt) {
        var charCode = evt.which || evt.keyCode;
        var charTyped = String.fromCharCode(charCode);
        if (!started && index < 2) { //Starts timer when first key is clicked .. Index < 2 is to check if the game was already started so the timer doesnt start on an ended game
            start();
            started = true;
        }
        evt = evt || window.event;
        if (charTyped == letters.charAt(index)) { //If the chars are correct..
            if (charTyped == " ") { //count the words in the paragraph
                wordcount++;
                $("#wordcount").text(wordcount); //Display word count
            }
            index++; //Incrementing "letters"
            current_string = letters.substring(index, index + character_length); //Move the current view over
            $("#target").text(current_string);
            $("#your-attempt").append(charTyped);
            if (index == letters.length) { //If you finish typing the prompt..
                wordcount++;
                $("#wordcount").text(wordcount);
                $("#timer").text(timer);

                total = timer / 60;
                min = index / 5;

                wpm = Math.ceil(min / total);

                $("#wpm").text(wpm);
                stop();
                levels();
                //finished();
                if (passORfail == true) {
                    levelReset();
                }

            }
        } else {
            $("#your-attempt").append("<span class='wrong'>" + charTyped + "</span>"); //make incorrect chars a different color
            //Only add errors if the game is in progress
            if (started) {
                errors++;
                $("#errors").text(errors);
            }

        }
    });



    function levelReset() {
        $("#your-attempt").text("");
        changeT();
        index = 0; //Clear all local varibles
        errors = 0;
        timer = 0;
        wpm = 0;
        wordcount = 0;
        clearInterval(interval_timer);
        started = false;
        letters = $("#input_text").val();
        $("#wpm").text("0"); //Clear values on the screen
        $("#timer").text("0");
        $("#wordcount").text("0");
        $("#errors").text("0");
        current_string = letters.substring(index, index + character_length);
        $("#target").text(current_string);
    }
    $("#reset").click(function() {
        reset();
    });

    /*
    Starts the game timer. Imcrementing in seconds
    */
    function start() {
        interval_timer = setInterval(function() { //Update the timer and calculate WPM every sec

            timer++;
            $("#timer").text(timer);
            total = timer / 60;
            min = index / 5;
            wpm = Math.ceil(min / total);
            $("#wpm").text(wpm);
        }, 1000)
    }

    /*
       Stop the Game timer
    */
    function stop() { //Stop the timer when done
        clearInterval(interval_timer);
        started = false;
    }

    /*
    Reset all values and stop the game when the prompt is completed
    
    function reset() {
        $("#your-attempt").text("");
        index = 0; //Clear all local varibles
        errors = 0;
        timer = 0;
        wpm = 0;
        wordcount = 0;
        clearInterval(interval_timer);
        started = false;
        letters = $("#input_text").val();
        $("#wpm").text("0"); //Clear values on the screen
        $("#timer").text("0");
        $("#wordcount").text("0");
        $("#errors").text("0");
        current_string = letters.substring(index, index + character_length);
        $("#target").text(current_string);
    }
*/


    var window_focus;

    $(window).focus(function() {
        window_focus = true;
    }).blur(function() {
        window_focus = false;
    });

    $(document).ready(function() {
        if (window_focus) {
            $("#focus").hide();
        }
        $(window).focus(function() {
            $("#focus").hide();
        });
    });

});