let arr = [1,2]
console.log(arr);
console.log(typeof (arr));

arr[2] = 20;
console.log(arr);

arr[4] = 40
console.log(arr);
arr[3] = "happy"
console.log(arr);

console.log(typeof arr[2]);
console.log(typeof arr[3]);


//REPL
//Read Evaluate print Line
console.log(arr.join('-'));

let x = "john's not here"
let y = 'john said, "No one is here"'

let a1=arr.splice(2, 1);
console.log(a1);
console.log(arr);

let arr2 = ["a", 1, 5, "b", 7, "d"]
arr2.slice();
arr2.slice(3, 4)
arr2.slice(3, 1)
arr2.slice(3,5)