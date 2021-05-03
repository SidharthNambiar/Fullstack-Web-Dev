// YOUR CODE BELOW


function myIncludes(arr, searchValue) {

    let result = false;

    for (let i = 0; i < arr.length; i++) {

        if(arr[i] === searchValue){
            result = true;
        }

    }

    return result;

}