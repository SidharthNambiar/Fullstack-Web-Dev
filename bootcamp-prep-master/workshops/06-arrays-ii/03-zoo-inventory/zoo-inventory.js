// YOUR CODE BELOW

function zooInventory(animals) {

    let inventory = [];

    for (let i = 0; i < animals.length; i++) {

        let animalInfo = '';

        if (Array.isArray(animals[i])) {

            for (let j = 0; j < animals[i].length; j++) {

                if (Array.isArray(animals[i][j])) {

                    for (let k = 0; k < animals[i][j].length; k++) {

                        if (k === 1) {
                            animalInfo += animals[i][j][k];
                            animalInfo += '.';
                        }
                        else {
                            animalInfo += animals[i][j][k];
                            animalInfo += ' is '
                        }
                    }
                }
                else {
                    animalInfo += animals[i][j];
                    animalInfo += ' the ';
                }
            }
        }

        inventory.push(animalInfo);

    }

    return inventory;

}