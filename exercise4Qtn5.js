const fibonacci=(n)=>{
    let a=0
    let b=1
    let result=[]

    for(let i=1;i<=n;i++){
        result.push(a)
        let next=a+b
        a=b
        b=next
    }
    return result
}

console.log(fibonacci(5))