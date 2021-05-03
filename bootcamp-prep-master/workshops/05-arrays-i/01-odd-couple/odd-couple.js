// YOUR CODE BELOW

function oddCouple(arrOfNumbers) {

    let newArr = [];

    for (let i = 0; i < arrOfNumbers.length; i++) {

        if (newArr.length === 2) {
            break;
        }

        if (arrOfNumbers[i] % 2 !== 0){
            newArr.push(arrOfNumbers[i])
        }
    }

    return newArr

}