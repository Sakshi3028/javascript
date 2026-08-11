//for of
const arr=[1,2,3,4,5]
for(const num of arr){
console.log(num);
}

const greetings="helllo world"
for(num of greetings){
    console.log(`each char is ${num}`)
}

//map
const map=new Map()
map.set('IN',"INDIA")
map.set('USA',"UNITED STATE")
console.log(map);


//for in
const myobject={
    js: 'javascript',
    cpp:'c++',
    swift:"swift by apple"
}
for(const key in myobject){
    console.log(`${key} shortcut is for ${myobject[key]}`);
}
const programming=["js","rv","py","java"]
for (const key  in programming){
    console.log(key);
}
