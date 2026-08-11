//for

for(let index=0;index< 10;index++){
    const element=index;
    if(element==5){
        console.log("5 is best number")
    }
    console.log(element);
}

//nested loop
for (let i = 0; i < 10; i++) {
    console.log(`outer loop value:${i}`);
    for(let j=0;j<=10;j++){
        console.log(`inner loop :${j} and inner loop ${i}`);

    }

}

//break and continue
// for (let index = 1; index < 20; index++) {
//     if(index==5){
//         console.log(`detected 5`);
//         break
//     }
//     console.log(`value of i is ${index}`);

// }
for (let index = 1; index < 20; index++) {
    if(index==5){
        console.log(`detected 5`);
        continue  //contiue me 1 baar ke liye skip karta h rest continue karta h 
    }
    console.log(`value of i is ${index}`);

}