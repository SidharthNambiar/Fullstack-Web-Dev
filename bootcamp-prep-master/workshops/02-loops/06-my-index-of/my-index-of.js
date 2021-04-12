// YOUR CODE BELOW

function myIndexOf(source, searchVal, startIdx) {

    let indexFound;
    let strCmp;
    
    if (startIdx !== undefined) {

        for (let i = startIdx; i < source.length; i++) {

            indexFound = -1;
            strCmp = '';

            if (source[i] === searchVal[0]) {
                indexFound = i;

                for (let j = 0; j < searchVal.length; j++) {
                    strCmp += source[i + j];
                }

                if (strCmp === searchVal) return indexFound;

            }
        }

    }
    else {

        for (let i = 0; i < source.length; i++) {

            indexFound = -1;
            strCmp = '';

            if (source[i] === searchVal[0]) {
                indexFound = i;

                for (let j = 0; j < searchVal.length; j++) {
                    strCmp += source[i + j];
                }

                if (strCmp === searchVal) return indexFound;


            }
        }


    }

    return indexFound

}


