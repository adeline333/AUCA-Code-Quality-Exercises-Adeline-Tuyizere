// function findEvenNumbers(numbers) {
//   var evenNumbers = [];
//   for (var i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//       evenNumbers.push(numbers[i]);
//     }
//   }
//   return evenNumbers;
// }

const findEvenNumbers =(numbers=[]) =>{
 return numbers.filter(num=>num%2==0)

}

console.log(findEvenNumbers([2,4,8,9,10]))