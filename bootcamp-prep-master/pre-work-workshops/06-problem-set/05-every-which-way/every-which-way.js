// YOUR CODE BELOW

function everyWhichWay(num1, num2, num3) {

    let sum = num1 + num2;
    let difference = num1 - num2;
    let product = num1 * num2;
    let fraction = num1 / num2;

    if (sum === num3) {
        return 'sum';
    }

    if (difference === num3) {
        return 'difference';
    }

    if (product === num3) {
        return 'product';
    }

    if (fraction === num3) {
        return 'fraction';
    }

    return null;
}