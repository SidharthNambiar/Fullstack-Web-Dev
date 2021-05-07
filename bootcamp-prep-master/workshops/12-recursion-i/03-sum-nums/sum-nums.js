// YOUR CODE BELOW


function sumNums(num) {
    
    let sum = 0;
    if(num <= 0){
        return 0;
    }
    else{

        sum = num + sumNums(num-1);
        return sum;
    }

    
}