// YOUR CODE BELOW

function isTruthy(arg) {


    switch (arg) {
        case null:
            return 'The null value is falsey';
        case undefined:
            return 'undefined is falsey';
        case 0:
            return 'The number 0 is falsey (the only falsey number)';
        case '':
            return 'The empty string is falsey (the only falsey string)';
        case false:
            return 'The boolean value false is falsey';
        default:
            return true;
    }


}