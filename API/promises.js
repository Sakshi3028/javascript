const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
})
promiseOne.then(function(){
    console.log("promise consumed");
})

const promiseTwo = new Promise(function (resolve,reject){
    setTimeout(function(){
       resolve({ username: "chai", email: "chai@example.com"})
    },1000)
})
promiseTwo.then(function(user){
    console.log(user);

})


  const promisefour = new Promise(function (resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
 resolve({ username: "chai", email: "chai@example.com"})
        }else{
            reject('ERROR " something Went Wrong')
        }
      
    },1000)
}) 
 promisefour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=> console.log("The promise is either reject or resolve"))

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
 resolve({ username: "javascript", email: "chai@example.com"})
        }else{
            reject('ERROR " JS Went Wrong')
        }
      
    },1000)

})
async function consumepromiseFive(){
    try{
const response = await promiseFive
   console.log(response);

    } catch(error)
{
    console.log(error);
}   
}
consumepromiseFive()

// async function getAllUsers(){
//     const response= await fetch ('')
// }

fetch('https://api.github.com/users/sakshi3028')
.then((response)=>{
    return response.json()
})
.then((data) => {

})
.catch((error) => console.log(error))