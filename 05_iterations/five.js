const coding = ["js", "java" , "python" , "cpp" , "ruby"]

//coding.forEach(function (lang) {
  //  console.log(lang);
//})

//coding.forEach( (item) => {
    //console.log(item);
//})

//function printme (item){
//  console.log(item);   
//}

//coding.forEach(printme)

//coding.forEach((item , index , arr) => {
//    console.log(item , index ,arr);  
//})


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: ".js"
    },
    {
        languageName: "java",
        languageFileName: ".java"
    },
    {
        languageName: "python",
        languageFileName: ".py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName); //, item.languageFileName);
} )

