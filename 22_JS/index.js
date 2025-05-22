const user={
    username : "ankita",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }

}
// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

// console.log(this)

// function chai(){
//     let username = "Ankita"
//     console.log(this.username)
// }

// chai()

// const chai = function(){
//     let username = "Ankita"
//     console.log(this.username)
// }
// chai()

const chai = ()=>{
    let username = "ankita"
    console.log(this)
}
// chai()

// const addTwo=(num1,num2)=>{
//     return num1+num2;
// }
// console.log(addTwo(2,3))

// const addTwo = (num1,num2)=> num1+num2

const addTwo = (num1,num2) => {username:"ankita"}
console.log(addTwo(4,6))

const myArray = [2,5,3,8,9]
// myArray.forEach(()=>{})


