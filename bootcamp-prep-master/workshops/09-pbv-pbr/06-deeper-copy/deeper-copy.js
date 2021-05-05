// YOUR CODE BELOW

function deeperCopy(originalArr) {

    let deepCopiedArray = [];

    for (let i = 0; i < originalArr.length; i++) {

        if (Array.isArray(originalArr[i])) {

            let tempArray = [];

            for (let j = 0; j < originalArr[i].length; j++) {
                tempArray.push(originalArr[i][j]);
            }
            deepCopiedArray.push(tempArray);


        }
        else {
            deepCopiedArray.push(originalArr[i])
        }
    }

    return deepCopiedArray;
}