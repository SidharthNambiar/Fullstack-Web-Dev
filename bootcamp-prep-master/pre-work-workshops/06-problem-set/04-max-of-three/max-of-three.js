// YOUR CODE BELOW

function maxOfThree(num1, num2, num3) {

    let largestNum = num1;

    if (largestNum < num2){
        largestNum = num2;
    }

    if (largestNum < num3){
        largestNum = num3;
    }

    return largestNum;
}