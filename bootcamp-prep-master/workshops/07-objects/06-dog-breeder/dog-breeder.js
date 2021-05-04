// YOUR CODE BELOW

function dogBreeder(name, age) {

    let newDog = {};

    if (typeof name === 'number') {
        age = name;
        name = 'Steve';
    }

    if (age === undefined) age = 0;
    if (name == undefined || typeof name === 'number') name = 'Steve';

    newDog.name = name;
    newDog.age = age;

    return newDog;
}