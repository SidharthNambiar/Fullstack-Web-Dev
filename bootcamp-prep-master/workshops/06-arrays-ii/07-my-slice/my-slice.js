// YOUR CODE BELOW

function mySlice(originalArr, startIdx, endIdx) {

    let copyOfArr = [];
    if( startIdx < 0) startIdx = originalArr.length + startIdx;
    if(endIdx < 0) endIdx = originalArr.length + endIdx;

    if (endIdx !== undefined) {

        for (let i = startIdx; i < endIdx; i++) {

            copyOfArr.push(originalArr[i]);
        }
    }
    else if (startIdx !== undefined) {

        for (let i = startIdx; i < originalArr.length; i++) {

            copyOfArr.push(originalArr[i]);
        }

    }
    else {
        for (let i = 0; i < originalArr.length; i++) {

            copyOfArr.push(originalArr[i]);
        }
    }

    return copyOfArr;
}