// YOUR CODE BELOW

function bacteriaTime(currentNum, targetNum) {

    if (targetNum < currentNum) return 'targetNum must be larger than currentNum';

    let numOfMin = 0;
    
    while (currentNum < targetNum) {
        numOfMin += 20;
        currentNum *= 2;
    }

    return numOfMin;

}
