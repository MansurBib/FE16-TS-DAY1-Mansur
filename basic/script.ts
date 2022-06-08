// basic ex1
var myArray : number[]= [];

for (let i = 0; i < 11; i++) {
     myArray.push(i);
}

for (let i = 1; i < myArray.length; i++) {
    for (let j = 1; j < myArray.length; j++) {
        console.log(`${i} X ${j}`);
        
    }
    
}

// basic ex2
let myName: string[] = ["Mansur", "Bibulatov"]

 setTimeout(() => {myName.forEach(function() {
    for (let i = 0; i < 5; i++) {
        console.log(`${myName[0]}`),5000;
    }
})
    
}, 5000);

// basic ex3
let ourArray: string[]= ["Andrew", "Berth", "Cody", "Derick", "Erick"];

for (let prop in ourArray) {
   console.log(`${prop}`)
}

for (const key of ourArray) {
    console.log(`${key}`)
}

ourArray.forEach(function(value,index){
    console.log(`value: ${value}, index: ${index}`)
})