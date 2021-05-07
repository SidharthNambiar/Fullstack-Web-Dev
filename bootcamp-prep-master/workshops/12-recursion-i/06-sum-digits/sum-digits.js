// YOUR CODE BELOW

function sumDigits(num) {
    
  
    let numToStr = String(num);
    let sum = 0;
    


    if(numToStr.length === 1){
        return num;
    }
    else{

        let charToDigit = Number(numToStr[numToStr.length-1]);        
        numToStr = numToStr.slice(0,numToStr.length-1);
        let strToNum = Number(numToStr);       
        sum = charToDigit + sumDigits(strToNum);
      
        return sum;
    }
  
    
}

