// YOUR CODE BELOW

function finderFunction(arr, callback) {

    let result = -1;

    for (let i = 0; i < arr.length; i++) {

        if(callback(arr[i])){
            result = i;
            break;
        }
    }

    return result;
}