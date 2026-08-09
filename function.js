function addTwonum(number1,number2){
    console.log(number1+number2);
}
addTwonum(3,4)

function loginUserMessage(username){
    if(username==undefined){
  console.log("pleasr enter usenmae");
    }
    return `${username} just loggged in`
}
console.log(loginUserMessage("hitesh"))