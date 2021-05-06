// YOUR CODE BELOW

function getDogBreeder(name, age) {


    return function breeder(name2, age2) {

        let newDog = {};

        if (typeof name2 === 'number') {
            age2 = name2;
            name2 = name;
        }

        if (age2 === undefined) age2 = age;
        if (name2 == undefined || typeof name2 === 'number') name2 = name;

        newDog.name = name2;
        newDog.age = age2;

        return newDog;



    }
}
