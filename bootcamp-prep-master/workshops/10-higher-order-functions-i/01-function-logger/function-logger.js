// YOUR CODE BELOW

function functionLogger(callback, value) {
    console.log("Function starting");

    let result = callback(value);
    console.log("Function complete");

    return result;

}