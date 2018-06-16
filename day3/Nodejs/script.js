if (typeof module !== 'undefined') {
    const lib = require('./lib');
    lib.myFun();
}
else {
    console.log("Its browser");
    lib();
}