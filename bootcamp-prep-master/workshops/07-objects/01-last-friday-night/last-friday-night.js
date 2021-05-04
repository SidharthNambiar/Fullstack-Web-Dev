// YOUR CODE BELOW


function lastFridayNight(transactions) {

    let total = 0;

    for (let i = 0; i < transactions.length; i++) {
        total += transactions[i].amount;
    }

    return total;
}