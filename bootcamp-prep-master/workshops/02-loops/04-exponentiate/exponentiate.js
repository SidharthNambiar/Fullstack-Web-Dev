// YOUR CODE BELOW

function exponentiate(base, power) {

    let result = 1;

    if (power === 0) return result;



    for (let i = 0; i < power; i++) {
        result *= base;
    }

    return result;

}