// YOUR CODE BELOW

function rotateArray(originalArr, rotateNum) {

    let result = originalArr.slice();

    if (rotateNum > 0) {

        while (rotateNum > 0) {

            result.unshift(result.pop());
            rotateNum--;
        }
    }
    else {

        while (rotateNum < 0) {

            result.push(result.shift());
            rotateNum++;
        }
    }
    return result;
}