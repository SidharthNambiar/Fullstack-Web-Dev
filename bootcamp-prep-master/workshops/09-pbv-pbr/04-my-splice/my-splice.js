// YOUR CODE BELOW

function mySplice(arr, startIndx, numberOfElementsToAdd, elementsToAdd) {

    let counter1 = numberOfElementsToAdd;
    let removedElements = [];
    let resultCopy = [];
    let storageElements = [];

    if (elementsToAdd === undefined) {

        for (let i = startIndx; i < startIndx + numberOfElementsToAdd; i++) {

            removedElements.push(arr[i]);
            arr[i] = null;

        }

        //create copy of answer (to remember the order)

        for (let i = 0; i < arr.length; i++) {

            if (arr[i] === null) continue;
            resultCopy.push(arr[i])

        }

        //rotate till null reaches end of array
        for (let k = 0; k < arr.length; k++) {

            if (arr[arr.length - 1] !== null) {
                arr.unshift(arr.pop());
            }
            else {
                break;
            }

        }

        // remove null from array

        while (counter1 > 0) {
            arr.pop();
            counter1--;
        }


        //re-order the array

        while (arr[0] !== resultCopy[0]) {
            arr.unshift(arr.pop());
        }




    }
    else {

        if (numberOfElementsToAdd === 0) {

            //make a copy of all the elments to put back in the array
            for (let i = startIndx; i < arr.length; i++) {

                storageElements.push(arr[i])

            }

            //remove all elements up until and including the startIndex

            while(arr.length-1 !== startIndx-1){
                arr.pop();
            }

            // add the elements to the array
            arr.push(elementsToAdd)

            // add the remaining elements from storage

            while(storageElements.length > 0){
                arr.push(storageElements.shift());
            }

         
        }
        else {
            for (let i = startIndx; i < startIndx + numberOfElementsToAdd; i++) {

                removedElements.push(arr[i]);
                arr[i] = elementsToAdd;

            }
        }

    }


    return removedElements;


}