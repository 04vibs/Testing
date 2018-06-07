/*
setTimeout(a,b)->
after b milliseconds call a()
*/


function greet(greeting,name)
{
    console.log(greeting +" "+name);
}
console.log("start");

setTimeout(greet,100,"Hello","Prashant")
console.log("End")