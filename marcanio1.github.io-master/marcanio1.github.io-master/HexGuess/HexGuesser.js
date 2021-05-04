function GenerateHex() {
    const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
    let hexCode = "#";

    while (hexCode.length < 7) {
        hexCode += digits[Math.round(Math.random() * digits.length)];
    }
    document.body.style.backgroundColor = hexCode;


    return hexCode;

}