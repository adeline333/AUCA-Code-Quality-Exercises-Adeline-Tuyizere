const recursiveSum=(arr,index=0)=>{
    if(index===arr.length){
        return 0;
    }

    return arr[index]+recursiveSum(arr,index+1);
}

console.log(recursiveSum([7,8,9,10]))