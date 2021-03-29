// YOUR CODE BELOW

function lastCharacter(str1, str2){

    let str1LastIndex = str1.length - 1;
    let str2LastIndex = str2.length - 1;

    if(str1[str1LastIndex] === str2[str2LastIndex]){
        return true;
    }

    return false;
}