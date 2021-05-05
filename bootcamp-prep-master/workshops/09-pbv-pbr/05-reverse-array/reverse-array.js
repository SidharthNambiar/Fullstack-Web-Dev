// YOUR CODE BELOW

function reverseArray(originalArr) {

    let tempArr = [];

    while (originalArr.length > 0) {
        tempArr.push(originalArr.pop());
    }

    while (tempArr.length > 0) {
        originalArr.push(tempArr.shift());
    }

    return originalArr;

}