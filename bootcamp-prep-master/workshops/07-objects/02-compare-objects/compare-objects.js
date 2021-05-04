// YOUR CODE BELOW

function compareObjects(obj1, obj2) {

    let result = true;

    if (Object.keys(obj1).length !== Object.keys(obj2).length) result = false;

    for (let key in obj1) {
        if (obj1[key] !== obj2[key]) {
            result = false;
        }
    }

    return result;

}