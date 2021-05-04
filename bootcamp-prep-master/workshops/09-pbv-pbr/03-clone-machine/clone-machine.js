// YOUR CODE BELOW
function cloneMachine(animalObject){

    let animalClone = {};

    animalClone.name = animalObject.name + 'Clone';
    animalClone.species = animalObject.species;
    animalClone.offspring = [];

    animalObject.offspring.push(animalClone.name)

    return animalClone;

}