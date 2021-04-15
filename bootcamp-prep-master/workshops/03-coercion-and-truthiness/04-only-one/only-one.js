// YOUR CODE BELOW

// function onlyOne(arg1, arg2, arg3) {

//    let tally = -1;

//    if(!!arg1) tally++;
//    if(!!arg2) tally++;
//    if(!!arg3) tally++;

//    if(!tally){
//        return true;
//    }
//    else{
//        return false;
//    }

// }

function onlyOne(arg1, arg2, arg3) {


    if (arg1 && !arg2 && !arg3) return true;
    if (!arg1 && arg2 && !arg3) return true;
    if (!arg1 && !arg2 && arg3) return true;

    return false;

}