// play with different variables
let name = 'kazi';
let age = 11;
let isMarried = "monkey";

let num = 0

if (isMarried == false) {
    console.log(name + " is married")
}

if (isMarried==true) {
    console.log(name + ' is not married')
}


for (let i=0; i<10; i++){
  num = num + 1  
}
console.log(num)


// create an array

const personArray = ["kazi",'raj',"shyam"]
 
 for (i=0; i<personArray.length; i++){
    console.log(personArray[i])
 }


 // reverse a an array

 let numArray = [5,3,4,61,2]
 let max = 0

 for(i=0; i<numArray.length/2;i++){
    temp = numArray[numArray.length -i -1]
    numArray[numArray.length -i -1] = numArray[i] 
    numArray[i] = temp
 }
 console.log(numArray)


 // write a function