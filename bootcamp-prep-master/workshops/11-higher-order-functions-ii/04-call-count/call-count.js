// YOUR CODE BELOW

function callCount() {

    let funcCallCount = 0;
    
    return function () {

        funcCallCount += 1;
        
        return funcCallCount;
    }
}