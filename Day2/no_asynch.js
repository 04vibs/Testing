console.log("Start");

function fun1(fun2){
    console.log("Running fun1");
    fun2()
}

function fun(){
    console.log("Running fun")
}

fun1(fun)

console.log("end")