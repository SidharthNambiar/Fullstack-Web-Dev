// YOUR CODE BELOW

function cacheSavings(callback) {

    let cachedMemory = {};

    return function (arg) {

        let result = null;

        if (cachedMemory.hasOwnProperty(arg)) {

            result = cachedMemory[arg];
        }
        else {
            result = callback(arg);
            cachedMemory[arg] = result;
        }

        return result;


    }
}