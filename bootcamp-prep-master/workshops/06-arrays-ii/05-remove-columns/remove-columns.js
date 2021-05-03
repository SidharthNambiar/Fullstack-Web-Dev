// YOUR CODE BELOW


function removeColumns(originalGrid, numColumns) {

    let gridCopy = originalGrid.slice();
   

    while (numColumns > 0) {

        for (let i = 0; i < gridCopy.length; i++) {

            if(Array.isArray(gridCopy[i])){
                gridCopy[i].pop();
            }

        }

        numColumns--;
    }

    return gridCopy;

}