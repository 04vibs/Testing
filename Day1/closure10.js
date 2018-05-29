let x = [10]

function createfun() {
    let y = x
    function fun() {
        return y[0]
    }
    return fun
}

let f1 = createfun();
let f2 = createfun();

console.log(f1());
x[0]++
console.log(f2());