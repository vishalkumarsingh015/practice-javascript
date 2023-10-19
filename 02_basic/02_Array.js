const marvel_heros=["Ironman","thor","spiderman"]
const Dc_heros=["superman","flash","queaman"]
//marvel_heros.push(Dc_heros)
//console.log(marvel_heros);
//console.log(marvel_heros[3][2])
//const allheros =  marvel_heros.concat(Dc_heros)
//console.log(allheros);
const all_heros=[ ...marvel_heros,...Dc_heros]//spradd oprater
//console.log(all_heros);

const real_Arrary=[1,2,[3,4],5,[6,7,[6,9]]]
 const all_real_Arrary= real_Arrary.flat(Infinity)
 //console.log(all_real_Arrary);
 console.log(Array.isArray("vishal"));
 console.log(Array.from("vishal"));
 console.log(Array.from({name:"vishal"}));//intrested arrys

 let scor1=100
 let scor2=300
 let scor3=400
 console.log(Array.of(scor1,scor2,scor3));


