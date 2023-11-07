const coding=["js","c#","java","html"]
coding.forEach(function(item){
    //console.log(item);
})
coding.forEach( (item)=>{
   // console.log(item);
}
)

function Printme(item){
   // console.log(item)

}
coding.forEach(Printme)


// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )
const Mycoding=[
    {
        languageName:"java",
        language_File:"js"
    },
    {
        languageName:"python",
        language_File:"py"
    },
    {
        languageName:"html",
        language_File:"html1"
    }
    
]
Mycoding.forEach((item)=>{
    console.log(item.language_File);
} )