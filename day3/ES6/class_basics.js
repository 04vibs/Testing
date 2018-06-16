class Person{
    constructor(name,age){
        this.name= name;
        let a = age;
        this.isAdult = () => age > 18
    }
    get firstName() {
        return this.name.split("")[0]
        console.log(this.firstName)
    }
    set firstName(val){
        if(val.length>10){
            throw new Error('Name too long')
        }
        this.name = val + '' + this.name.split('')[1]
    }
}

let p = new Person("John Doe",25)
let p1 = new Person("Prashant12333",30);