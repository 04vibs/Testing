//Prashant Puri


function myFun() {
    console.log("It's working");
}

if (typeof module !== 'undefined') {
    module.exports = {
        myFun
    }
}
else {
    window.lib = myFun;
}