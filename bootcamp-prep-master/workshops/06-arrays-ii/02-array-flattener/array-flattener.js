// YOUR CODE BELOW

function arrayFlattener(twoDimensionalArr) {

    let result = [];

    for (let i = 0; i < twoDimensionalArr.length; i++) {

        if (Array.isArray(twoDimensionalArr[i])) {

            for (let j = 0; j < twoDimensionalArr[i].length; j++) {

                result.push(twoDimensionalArr[i][j]);
            }
        }
        else {
            result.push(twoDimensionalArr[i])
        }
    }

    return result;

}