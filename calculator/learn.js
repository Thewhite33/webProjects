// conditionals -if else elseif
//agar magar ke bate

//loops 
// var a = 12;
// while(a<20){
//     a++;
//     console.log(a);
// }

// function pannipeyo(){
//     console.log("chai peyo");
// }
// pannipeyo();

//push-Add a element in last of array
//pop-Removes a element in last of array
//unshift-Add a element from first
//shift-Removes a element from first
//splice-Removes from any index like .splice(2,1)
//var old js me the
// var adds to window itself so its risky
// var a = [1,2,3,4,5];
// var b = [...a]  //... spread operator 
// b.pop();
// console.log(a);

//falsy val = 0 false undefined null NaN document.all
//rest all truthy
//for each only in array main array mai nahi hota
// var a = [1,2,3,4,5,6]
// a.forEach(function(val){
//     console.log(val+2);
// })

//forin objects par loop karne ke liye
// var obj = {
//     name: "Ram",
//     age:24,
//     city:"Bhopal"
// }

// for(var key in obj){
//     console.log(key);
//     console.log(obj[key]);
// }

// do while

// var a = 12;
// do{
//     console.log("hey");
//     a++;
// }
// while(a<15);


//callbacks fxn
//esa code jo baad me chalta hai  to js ko yeh pata nahi hota ki wo complete hai ya nhi ye batane ka kaam callback fxn karta hai

// setTimeout(function(){
//     console.log("2 sec baad chalega");
// },3000) //3 sec baad chalega 
//aisa code jo baad me chalta ho 

//first class fxn
//fxn ko use kar sakte ho as a value

//higher order fxn aisa fxn jo accept kar le ek aur fxn

// function sachaofbisc(){
//     this.width = 12; //this is property of window
//     this.height = 22;
//     this.color = "brown";
// }

// var bis1 = new sachaofbisc()
// console.log(bis1);
//normal fxn jis me this ka istemal ho aur fxn use karte wakt new keyword use hoga

//DOM

// var a = document.querySelector("h1 for id #box ") h1 gets selected

// to change html
// var a = document.querySelector("h1").innerHTML = "aga"
// a.innerHTML = "Changed html"

//to change css
// a.style.color = "red"
// a.style.backgroundColor = "black"

// to add a event
// var a = document.querySelector("h2")
// a.addEventListener("click",function(){
//     //write all fxn here
//     a.innerHTML = "Hi"
//     a.style.color = "red"
// })

// var bulb = document.querySelector("#bulb");
// var Btn = document.querySelector("button");
// var click = 0;
// Btn.addEventListener("click",function(){
//     if (click == 0){
//         bulb.style.backgroundColor = "yellow";
//         click = 1;
//     }else{
//         bulb.style.backgroundColor = "transparent";
//         click = 0;
//     }
    
// })
//for selecting all element
// document.querySelectorAll

//async js

// console.log("hey");
// setTimeout(function(){
//     console.log("hey2");
// },3000) callback fxn

//callback fxn tab xhalta hau jab async code ka completion ho jata hai

// asyn code likhna
// fetch
// XMLHttpRequest
// axios
// promises
// setTimeout
// setInterval

//for answers
// callbacks
// then catch
// async await

// var ans = new Promise((res, rej)=>{
//     if(false){
//         return res();
//     }
//     else{
//         return rej();
//     }
// })

// ans
// .then(function(){
//     console.log("Resolved");
// })
// .catch(function(){
//     console.log("Rejected");
// })


async function abcd(){
    await fetch('https://randomuser.me/api/')
}