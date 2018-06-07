function greet() {
    console.log(new Date().getTime());
    console.log("HI");
}
function bye(){
    console.log("GoodBye");
}

let x = setInterval(greet,1000)
let y= setInterval(bye,2000)

setTimeout(()=>{
    clearInterval(x);
    clearInterval(y);
    
},10000)