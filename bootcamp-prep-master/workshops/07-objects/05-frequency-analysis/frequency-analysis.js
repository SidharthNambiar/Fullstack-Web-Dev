// YOUR CODE BELOW

function frequencyAnalysis(strOfLowerCaseLetters) {

    let result = {};

    for (let i = 0; i < strOfLowerCaseLetters.length; i++) {

        if(result[strOfLowerCaseLetters[i]]){
            result[strOfLowerCaseLetters[i]] += 1;
        }
        else{
            result[strOfLowerCaseLetters[i]] = 1;
        }
    }

    return result;
}