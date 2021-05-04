// YOUR CODE BELOW

function veryOdd(arrOfNumbers) {

    let oddOnly = [];

    for (let i = 0; i < arrOfNumbers.length; i++) {
        if (arrOfNumbers[i] % 2 !== 0) {
            oddOnly.push(arrOfNumbers[i]);
        }


    }

    return oddOnly;

}