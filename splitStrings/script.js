function solution(string) {
    arraySplit=string.split("")
    const newArray=[]

    for (let i = 0; i < arraySplit.length; i+=2) {
     let pair=arraySplit[i]+(arraySplit[i+1] || "")
     if (pair.length %2 !==0) {
        pair +="-"
     }
     newArray.push(pair)
     

    }
    console.log(newArray)
    return newArray
}
 //console.log(newArray)   

console.log(solution("Hello World"))