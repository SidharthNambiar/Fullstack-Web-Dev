// YOUR CODE BELOW

function countToTen(num) {

   
    if (num > 10) {

        return;
    }
    else {
        console.log(num);
        countToTen(num + 1);
    }


}
