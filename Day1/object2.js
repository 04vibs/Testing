let obj = {
    a: 10,
    b: 'hello',
    c: true,
    d: [1, 2, 3],
    p:'c'

}
console.log(obj);
console.log(obj.a);
obj.x = "Asdsd";
console.log(obj);

let ps = [1, 2, 3]

obj['e'] = 20
console.log(obj);

let a = 'b';
console.log(obj[a]);

console.log(obj[obj.p]);

obj.o = obj

obj['hello world'] = 'wow'
obj.o = obj

obj[' '] = 'space'
obj[' ']=0