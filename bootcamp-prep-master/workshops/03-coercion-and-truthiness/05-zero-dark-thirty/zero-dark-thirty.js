// YOUR CODE BELOW

function zeroDarkThirty(num){

    if(num === 0) return NaN;

    let numToStr = String(num);
    let strResult = '';

    for(let i = 0; i < numToStr.length; i++){
        if(numToStr[i] !== '0'){
            strResult += numToStr[i]
        }
    }

    return Number(strResult)

}