// YOUR CODE BELOW

function crazyCaps(str) {

    let strCopy = str.toLowerCase();
    let result = '';

    for (let i = 0; i < strCopy.length; i++) {

        if (i % 2 !== 0) {

            result += strCopy[i].toUpperCase();
        }
        else {
            result += strCopy[i];
        }


    }

    return result;

}