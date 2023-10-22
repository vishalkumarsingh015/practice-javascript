function SayMyName(){
    console.log("v");
    console.log("i");
    console.log("s");
    console.log("h");
    console.log("a");
    console.log("l")
}
SayMyName  ()  //refrans //
// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))


function calculateCartprice(val1,val2, ...num1)
{
    return num1
}
//console.log(calculateCartprice(110,120,130,200)); 
const user={
username:"vishal",
age: 28
}
function handleobject(anyuser){
    //console.log(`username is ${anyuser.username} and age is ${anyuser.age}`);

}
  //handleobject (user)
  handleobject({
    username:"ankit",
    age :21
  })

  const mynewArray=[200,300,400]
  function  returnsecondvalue(getsendvalue){
    return getsendvalue[1]
  }
  //console.log(returnsecondvalue(mynewArray))
  console.log(returnsecondvalue([200,5000,400]));
