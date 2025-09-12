// function calculateMatrixSum(matrix) {
//   var sum = 0;
//   for (var i = 0; i < matrix.length; i++)
//     for (var j = 0; j < matrix[i].length; j++)
//       sum += matrix[i][j];
//   return sum;
// }


const matrixSum=(matrix)=>{
    let sum=0
    for(let i = 0; i<matrix.length; i++){
         for (let j = 0; j < matrix[i].length; j++){
            sum+=matrix[i][j]
    }
}
    return sum

}
