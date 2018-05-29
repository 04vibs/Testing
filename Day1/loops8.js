//primitive loops
for (let i = 0; i < 10; i++)
{
    console.log(i);
}

let j = 5;
while (j > 0)
{
    j--;
    console.log(j);
}

//for each loop
//2 type in loop and of loop
//in loop -index of each item
let a = ['a', 'b', 'c']
for (let p in a)
{
    console.log(p);//p is index
    console.log(p+':'+a[p]);
}

//of loop
for (let q of a)
{
    console.log(q);
}

//
let o = { x: 1, y: 2, z: 3 }

for (let r in o)
{
    console.log(r);
}
//in objects you cant directly access the value
for (let s in o) {
    console.log(o[s]);
}