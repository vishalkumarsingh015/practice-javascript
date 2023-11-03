//for
for(let index=1; index<=10;index++){
    //const element= index;
    //console.log(element);
}
for(let i=0; i<=10 ; i++){
    const element=i;
    //console.log(element);
}
//console.log(element);
for(let i=0; i<=10 ; i++){
    const element=i;
    if(element==5){
        //console.log("5 is best number");

    }
    //console.log(element);
}

for (let i = 1; i <=10; i++) {
   // console.log(`outer loop value ${i}`)
   for (let j = 1; j <=10; j++) {
    //console.log(`inner loop value ${j} and inner value ${i} `)
   // console.log(i + '*' + j + '=' + i*j);
   }
}
let MyArray=["vishal","Adi","pk"]
//console.log(MyArray.length)
for (let index = 0; index < MyArray.length; index++) { //ctrl + C :close loop
    const element = MyArray[index];
   // console.log(element);
}
//break and continue

for (let index = 1; index<=20; index++) {
    if(index==5){
        console.log(`Detected 5`);
           // break   
           continue
        
    }
    console.log(`value of i is ${index}`);
    
}