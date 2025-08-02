function calculateCartPrice(val1,val2,...num1){
    return num1;

}
// console.log(calculateCartPrice(200,400,500))

const user={
    username: "ankita",
    price :199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}
// console.log(handleObject(user))
handleObject({
    username:"sam",
    price:3829
})

const newArray=[200,300,292,3929]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(newArray))
console.log(returnSecondValue([200,400,2829]))