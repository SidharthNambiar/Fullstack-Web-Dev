// YOUR CODE BELOW

function onlyOdds(num) {

    let sum = 0;

    while (num >= 1) {
        
        if (num % 2 === 0) {
            num--;
            continue;
        }

        sum += num;
        num--;
    }

    return sum;

}