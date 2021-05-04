let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let leetChars = ['@', '8', '(', '|)', '3', 'ph', 'g', '#', 'l', '_|', '|<', '1', "|'|'|", '/\/', '0', '|D', '(,)', '|2', '5', '+', '|_|', '|/', "|/|/'", '><', 'j', '2'];

// YOUR CODE BELOW

function leetTranslator(originalString) {

    //create a leetCodex lookup table

    let leetCodex = {};

    for (let i = 0; i < letters.length; i++) {

        leetCodex[letters[i]] = leetChars[i];
    }

    // translate original string

    let strCopy = originalString.slice();
    strCopy = strCopy.toLowerCase();
    let result = '';

    for (let k = 0; k < strCopy.length; k++) {

        result += leetCodex[strCopy[k]]

    }

    return result;

}