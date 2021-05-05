// YOUR CODE BELOW

function chainReaction(startVal, arrOfFunctions) {

    let result;
    for(let i = 0; i< arrOfFunctions.length; i++){

        if(i === 0){
            result = arrOfFunctions[i](startVal);
        }
        else{
            result = arrOfFunctions[i](result);
        }
    }

    return result;
    
}