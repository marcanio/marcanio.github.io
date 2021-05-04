var saveHex;


function showRedVal(redValue) {
    document.getElementById("redSlideValue").innerHTML = redValue;
    document.getElementById("rSpanValue").innerHTML = redValue + ",";
}

function showGreenVal(greenValue) {
    document.getElementById("greenSlideValue").innerHTML = greenValue;
    document.getElementById("gSpanValue").innerHTML = greenValue + ",";
}

function showBlueVal(blueValue) {
    document.getElementById("blueSlideValue").innerHTML = blueValue;
    document.getElementById("bSpanValue").innerHTML = blueValue;
}

function rgbToHex(r, g, b) {
    r = document.getElementById("r").value;
    g = document.getElementById("g").value;
    b = document.getElementById("b").value;
    //change rgb values to integers
    let rHex = parseInt(r)
    let gHex = parseInt(g)
    var bHex = parseInt(b)
        //puts Hex vars into HEX format eg #00FF00
    let hexColor = ("#" + ((1 << 24) + (rHex << 16) +
        (gHex << 8) + bHex).toString(16).slice(1).toUpperCase());
    document.getElementById("HEXValueBox").innerHTML = hexColor;
    //changes background color to HEX value
    document.body.style.backgroundColor = hexColor;
    //document.getElementById("test").innerHTML = localStorage.getItem('SaveHex');

    var invertedHex = invertColor(hexColor);

    document.getElementById("HexGuessHead").style.color = invertedHex;
    document.getElementById("submitGuess").style.color = invertedHex;

}


function GenerateHex() {
    const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
    let hexCode = "#";

    let length = digits.length - 1;
    while (hexCode.length < 7) {
        hexCode += digits[Math.round(Math.random() * length)];
    }
    document.body.style.backgroundColor = hexCode;

    localStorage.setItem('SaveHex', hexCode);
    return hexCode;

}


function submitGuess() {
    var ActualHex = localStorage.getItem('SaveHex');
    //All of the color values to calculate points
    var RealScore = parseInt(ActualHex.substr(1, 2), 16) + parseInt(ActualHex.substr(3, 4), 16) + parseInt(ActualHex.substr(5, 6), 16);

    var ActualValue = parseInt(ActualHex.substr(1, 6), 16);

    var HEXValue = document.getElementById("HEXValueBox").innerHTML;
    localStorage.setItem('userHex', HEXValue);
    var userScore = parseInt(HEXValue.substr(1, 2), 16) + parseInt(HEXValue.substr(3, 4), 16) + parseInt(HEXValue.substr(5, 6), 16);

    var RealHex = parseInt(HEXValue.substr(1, 6), 16);


    var RedScore = Math.abs(parseInt(document.getElementById("redSlideValue").innerHTML) - parseInt(ActualHex.substr(1, 2), 16));
    var GreenScore = Math.abs(parseInt(document.getElementById("greenSlideValue").innerHTML) - parseInt(ActualHex.substr(3, 2), 16));
    var BlueScore = Math.abs(parseInt(document.getElementById("blueSlideValue").innerHTML) - parseInt(ActualHex.substr(5, 2), 16));


    var finalScore = RedScore + GreenScore + BlueScore;
    //var newScore = document.getElementById("rSpanValue").innerHTML + document.getElementById("gSpanValue").innerHTML + document.getElementById("bSpanValue").innerHTML;
    //var CurrentScore = Math.abs(ActualValue - RealHex);
    localStorage.setItem('score', finalScore);



    window.location.href = "Score.html";
}

function getResults() {

    let localScore = localStorage.getItem('score');
    localScore = 765 - localScore;
    document.getElementById("displayScore").innerHTML += (localScore);


}

function setColors() {
    let OriginalScore = localStorage.getItem('SaveHex');
    let userScore = localStorage.getItem('userHex');
    document.getElementById("Ocolor").style.backgroundColor = OriginalScore;
    document.getElementById("Ucolor").style.backgroundColor = userScore;

}

function invertColor(hex) {
    if (hex.indexOf('#') === 0) {
        hex = hex.slice(1);
    }
    // convert 3-digit hex to 6-digits.
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    if (hex.length !== 6) {
        throw new Error('Invalid HEX color.');
    }
    // invert color components
    var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
        g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
        b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
    // pad each with zeros and return
    return '#' + padZero(r) + padZero(g) + padZero(b);
}

function padZero(str, len) {
    len = len || 2;
    var zeros = new Array(len).join('0');
    return (zeros + str).slice(-len);
}