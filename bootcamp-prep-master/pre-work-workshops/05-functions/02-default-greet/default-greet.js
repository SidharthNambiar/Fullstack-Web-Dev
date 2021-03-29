// YOUR CODE BELOW

function defaultGreet(first, last) {
    if (last !== undefined) {
        return `Hi ${first} ${last}!`;
    }
    else {
        return `Hi ${first} Doe!`;
    }
}