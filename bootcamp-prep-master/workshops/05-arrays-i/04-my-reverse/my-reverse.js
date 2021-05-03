// YOUR CODE BELOW

function myReverse(arr) {

    let reversedArr = [];

    for (let i = 0; i < arr.length; i++) {

        reversedArr.unshift(arr[i])
    }

    return reversedArr;
}