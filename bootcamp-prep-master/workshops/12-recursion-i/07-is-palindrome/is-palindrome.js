// YOUR CODE BELOW


function isPalindrome(str) {

    let strCopy = str.toLowerCase();

    if (str.length === 1) {
        return true;
    }


    if (strCopy[0] === strCopy[strCopy.length - 1]) {

        strCopy = strCopy.slice(1,strCopy.length-1)
        return isPalindrome(strCopy)
        
    }
    else {
        return false;
    }


}
