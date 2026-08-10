//IIFE Immediately function expressions

(function chai (){
    console.log(`DB CONNECTED`);
})();

((name)  => {
    console.log(`DB CONNECTED To ${name}`);
})('sakshi')

