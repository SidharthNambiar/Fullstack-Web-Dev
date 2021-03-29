// YOUR CODE BELOW

function myMnemonic(...strings) {
    // console.log("string length is",strings.length)
    let result = '';
    for (i = 0; i <= strings.length - 1; i++) {

        result += strings[i][0];

    }
    return result;
}