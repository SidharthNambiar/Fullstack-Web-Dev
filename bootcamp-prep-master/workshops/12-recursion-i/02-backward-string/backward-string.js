// YOUR CODE BELOW


function backwardString(originalStr) {
    
    if(originalStr.length === 0){
        return;
    }
    else{

        console.log(originalStr[originalStr.length-1]);
        backwardString(originalStr.slice(0,originalStr.length-1));
    }
}