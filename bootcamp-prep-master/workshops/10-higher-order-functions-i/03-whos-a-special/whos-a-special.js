// YOUR CODE BELOW

function whosASpecial(pets) {

    let result = '';

    pets.forEach((pet, index) => {
        result += `${pet.name} the ${pet.species} is very special!`;
        if (index !== pets.length - 1) {
            result += ' ';
        }
    })

    return result;

}