// YOUR CODE BELOW
function myOr(...args) {

    let result = args[args.length - 1];

    for (let i = 0; i < args.length; i++) {
        if (!!args[i]) {
            result = args[i];
            break;
        }

    }

    return result;
}

function myAnd(...args) {

    let result = args[args.length - 1];

    for (let i = 0; i < args.length; i++) {
        if (!args[i]) {
            result = args[i];
            break;
        }

    }

    return result;
}