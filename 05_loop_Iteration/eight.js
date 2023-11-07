const MyNum=[1,2,3]
//const MyTotal= MyNum.reduce(function(acc ,current){
    //console.log(`acc:${acc} and current:${current}`);
   // return acc+current},0)

    //const MyTotal=MyNum.reduce((acc,current)=>acc+current,0)
//console.log(MyTotal)



const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
const price= shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(price);