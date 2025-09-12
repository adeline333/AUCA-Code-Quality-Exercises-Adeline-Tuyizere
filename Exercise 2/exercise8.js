// function discount(totalamount) {
//   var disc;
//   if (totalamount > 100) {
//     disc = totalamount * 0.1;
//   } else {
//     disc = totalamount * 0.05;
//   }
//   return disc;
// }


const discount= (totalamount=0)=>{
   return totalamount>100?totalamount*0.1:totalamount*0.05
}

console.log(discount(300000))