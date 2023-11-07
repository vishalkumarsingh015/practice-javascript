//for of
//["","",""]
//[{},{},{}]
const arr=[1,2,3,4,5] //array
for (const num of arr) {
   // console.log(num);
    
}

const greeting="hy vishal"  //string
 for (const greet of greeting) {
    //console.log(`Each charater is ${greet}`);
    
 }

 //map
 const map= new Map()
 map.set('IN',"India")
 map.set('usa',"UNITED STATE OF AMERICA")
 map.set('far',"FRANCE")
 map.set ('IN',"INDIA")// not gate repeate key value
 //console.log(map)

 // map for loop

for (const [key, value] of map) {
    //console.log(key, ':-', value)
    
}

//Object hota to
const Object={
    'game1':'nfs',
    'game2':'spiderman'
}
for (const [key,value] of object) {
    console.log(key,':-',value);  //object is not defined so for of not use this object
    
}

