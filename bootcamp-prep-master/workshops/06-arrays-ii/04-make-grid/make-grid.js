// YOUR CODE BELOW

function makeGrid(col, row) {

    let grid = [];
    // make columns first

    let colArr = [];

    for (let i = 0; i < col; i++) {

        colArr.push(i + 1);
    }

    // add rows

    for (let j = 0; j < row; j++) {

        grid.push(colArr)
    }

    return grid;

}