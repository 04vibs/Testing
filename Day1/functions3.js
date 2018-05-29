function sum(a,b=0)//2 variables coming into fun can have any datatype
{
    return a+b;

}
console.log(sum(2,3));
console.log(sum(4))


//you can use value of a in b but not b in a
//as values are read from left to right
function mult(a, b = a)
{
    return a*b
}


console.log(mult(3, 6));
console.log(mult(4));

console.log(sum);
console.log(typeof mult);


//anonymous functions
let greet = function x (name) {
    console.log("Hello" + name);

}
greet(" harry");

function x(name) {
    console.log("Hello" + name);

}