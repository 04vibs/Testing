let con = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_";

function toradix(x){
    if(x<0)//negative
    return "Negative number cannot be converted ";
    var result = 0;
    rixits = x.split('');
    for(var e =0 ;e< x.length;e++){
        result = (result * 64 ) + con.indexOf(x[e]);
    }
    return result;
}

function toDecimal(number){
    var result = '';
    var x = '';
    while(true){
        x = number % 64 ;
        result = con.charAt(x) + result;
        number = number/64;
        if(number<=1){
            break;
        }
        return result;
    }
}

if (process.argv[2] == 'to') {
    console.log(toDecimal(process.argv[3]));
}
else if (process.argv[2] == 'from') {
    console.log(toradix(process.argv[3]));
}
