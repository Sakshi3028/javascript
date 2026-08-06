const name="sakshi"
const repocount=10
console.log(`hello my name is ${name} and my repo count is ${repocount}`);
const gameName=new String('chess')

console.log(gameName.charAt(2));//find the position of the character
console.log(gameName.length);//find the length of the string
console.log(gameName.toUpperCase());//convert the string to uppercase
console.log(gameName.toLowerCase());//convert the string to lowercase
console.log(gameName.indexOf('e'));
const newString=gameName.substring(0,3)
console.log(newString);

const anotherString="   sakshi   "
console.log(anotherString.trim());//remove the white spaces from the string

const url="https://sakshi.com/sakshi%20kumari"
console.log(url.replace('%20','-'));

