
// You should implement your task here.

module.exports = function towelSort (matrix) {

    if (!Array.isArray(matrix) || matrix.length == 0 || matrix == undefined) {
    return [];
    }

    let array = [];

    for (i = 0; i < matrix.length; i++){

    if(i % 2 === 0) {
        array.push(matrix[i]);
    } else {
        array.push(matrix[i].reverse());
    }
}
return array.flat();
}
