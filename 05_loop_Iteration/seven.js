const Mynumber=[1,2,3,4,5,6,7,8]
//const newNum= Mynumber.map((num)=>num+10)
//const newNum=Mynumber.map((num)=>{return num+10})
const newNum=Mynumber.map((num)=>num*10)
                     .map((num)=>num+1)
                     .filter((num)=>num>40)
console.log(newNum);