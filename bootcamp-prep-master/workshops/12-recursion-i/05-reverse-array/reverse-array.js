// YOUR CODE BELOW

function reverseArray(arr) {

    let reverseArr = [];

    if (arr.length === 0) {
        return [];
    }
    else {

        reverseArr.push(arr[arr.length-1]);
        reverseArr = reverseArr.concat(reverseArray(arr.slice(0,arr.length-1)));
       
        
    }

   
    return reverseArr;
}