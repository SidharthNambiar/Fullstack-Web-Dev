// YOUR CODE BELOW

function veryOddMutant(arrOfNumbers){

    let evenCount = 0;
    
    for(let i = 0; i<arrOfNumbers.length; i++){

        if(arrOfNumbers[i]%2 === 0){
            arrOfNumbers[i] = 'normie'
            evenCount++;
        }
    }

    return evenCount;
}