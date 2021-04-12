// YOUR CODE BELOW

function mySlice(originalStr, startIdx, endIdx) {

    let result = '';

    if (endIdx !== undefined) {

        for (let i = startIdx; i < endIdx; i++) {
            result += originalStr[i];
        }
    }
    else if (startIdx !== undefined) {

        for(let j = startIdx; j < originalStr.length; j++){
            result += originalStr[j];
        }
    }
    else {
        return originalStr;
    }

    return result;
}