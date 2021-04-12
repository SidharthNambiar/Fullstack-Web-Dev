// YOUR CODE BELOW

function mostVowels(strOfWords) {

   let arrOfWords = splitStr(strOfWords);
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let result = '';
    let currVowelCount = 0;
    let prevVowelCount = 0;

    debugger;
    for (let i = 0; i < arrOfWords.length; i++) {

        for (let j = 0; j < arrOfWords[i].length; j++) {

            if (vowels.includes(arrOfWords[i][j])) {
                currVowelCount += 1;

            }
        }

        if (currVowelCount > prevVowelCount) {
            result = arrOfWords[i]
            prevVowelCount = currVowelCount;

        }

        currVowelCount = 0;

    }



    return result;

}

function splitStr(str) {


    let arrOfWords = [];
    let word = '';

    for (let i = 0; i < str.length; i++) {

        if(str[i] === ' ' || str[i] === '.'){
            arrOfWords.push(word);
            word = '';
            continue;
        }


        word += str[i];

        
    }

    return arrOfWords;
}

mostVowels('Give her hell from us, Peeves.')