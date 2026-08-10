// let a=300
// if(true){
//     let a=10
//     const b=20
//     console.log("INNER",a);
// }
// for (let i=0; i<Array.length;i++){
//    const element = array[i];
// }
// console.log(a);


function one(){
    const username = "hitesh"

    function two(){
        const website="youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
one()

if(true){
    const username="sakshi"
    if(username=="sakshi"){
        const website=" youtube"
        console.log(username + website);
    }

}