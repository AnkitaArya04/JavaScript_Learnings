// immediately invoked function expression


//named iife
(function chai(){
    console.log("DB CONNECTED")
})();
// chai()

//unnamed iife
((name)=>{
    console.log(`DB connected two ${name}`)
})('ankita')