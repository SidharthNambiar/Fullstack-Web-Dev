// YOUR CODE BELOW


function callThemAll(obj, value) {

    let returnedValues = [];

    for (let keys in obj) {

        if (typeof(obj[keys]) === 'function') {
            returnedValues.push(obj[keys](value));
        }
    }

    return returnedValues;
}