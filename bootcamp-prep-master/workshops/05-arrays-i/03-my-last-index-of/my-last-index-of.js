// YOUR CODE BELOW

function myLastIndexOf(arr, searchValue, startIdx) {

    let result = -1;
    let arrLength = arr.length;

    if (startIdx !== undefined) arrLength = startIdx;


    for (let i = 0; i <= arrLength; i++) {

        if (arr[i] === searchValue) {
            result = i;
        }

    }



    return result;

}