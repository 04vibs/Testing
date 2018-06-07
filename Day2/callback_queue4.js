let start = new Date().getTime()

setTimeout(()=>console.log("Hi prashant"),3000)

console.log("start")
while(new Date().getTime() < start + 5000);
console.log("End")