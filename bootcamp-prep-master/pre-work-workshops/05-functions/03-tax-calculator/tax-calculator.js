// YOUR CODE BELOW
const NY_TAX = 1.04;
const NJ_TAX = 1.06625;

let finalPrice;

function taxCalculator(price, state) {

    if (state === 'NY') {
        finalPrice = price*NY_TAX;
    }
    else{
        finalPrice = price*NJ_TAX;
    }

    return finalPrice;
}