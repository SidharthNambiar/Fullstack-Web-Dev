// YOUR CODE BELOW

function evenAndOdd(arr) {

    let evenArr = [];
    let oddArr = [];
    let result = [evenArr, oddArr];

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] % 2 === 0){
            evenArr.push(arr[i]);
        }
        else{

            oddArr.push(arr[i]);
        }
    }

    return result;

}
