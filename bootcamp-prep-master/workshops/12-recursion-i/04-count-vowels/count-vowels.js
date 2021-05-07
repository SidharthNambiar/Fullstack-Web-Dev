// YOUR CODE BELOW

let vowels = ['a', 'e', 'i', 'o', 'u'];

function countVowels(originalStr) {

    let sumOfVowels = 0;

    if (originalStr.length <= 0) {
        return 0;
    }
    else {

        if (vowels.includes(originalStr[originalStr.length - 1])) {

            sumOfVowels += 1;
          
        }

        sumOfVowels += countVowels(originalStr.slice(0, originalStr.length - 1))
        
    }

  

    return sumOfVowels;

}
