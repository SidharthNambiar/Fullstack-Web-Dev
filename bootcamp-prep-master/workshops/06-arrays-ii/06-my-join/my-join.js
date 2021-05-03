// YOUR CODE BELOW

function myJoin(arr, separator) {

    let result = '';
    if (separator === undefined) separator = ',';

    for (let i = 0; i < arr.length; i++) {

        if (!arr[i]) {
            result += '';
        }
        else{
            result += arr[i];
        }

        if(i !== arr.length-1){
            result += separator;
        }
              
    }

    return result;

}