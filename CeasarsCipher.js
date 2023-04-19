function rot13(str) {
    let decoded = "";
    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i);
        if (char.match(/[A-Za-z]/)) {
            let asciiValue = char.charCodeAt(0);
            if (char === char.toUpperCase()) {
                let decodedChar = String.fromCharCode((asciiValue - 65 + 13) % 26 + 65);
                decoded += decodedChar;
            } else {
                let decodedChar = String.fromCharCode((asciiValue - 97 + 13) % 26 + 97);
                decoded += decodedChar;
            }
        } else {
            decoded += char;
        }
    }
    return decoded;
}

console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."))