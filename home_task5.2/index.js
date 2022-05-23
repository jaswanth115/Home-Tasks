

const prompt = require("prompt-sync")({ sigint: true });
const symbol = prompt("Enter 1 Symbol among * + - /   : ");
if (symbol==='*' || symbol==="+"){
    n=prompt("How many numbers you want :");
    while (n<2){
        console.log("Enter more than 1 ")
        n=prompt("How many numbers you want :");
    }
}

else if (symbol==='/'||symbol==="-") {
    n=2;
}

else if (symbol!=='/'||symbol!=="-" || symbol!=='*' || symbol!=="+"){
    console.log("WRONG INPUT please restart")
    process.exit(0);
}

l=[];
for (var i=1;i<=n;i++){
    a=prompt("enter "+i+" th number  : ");
    l.push(a);
}

if (symbol==="+"){
    var result=0;
    for (var j=0;j<n;j++){
        result +=Number(l[j]);
    }
    
    console.log(result);
    process.exit(0);
}
if (symbol==="*"){
    var result=1;
    for (var j=0;j<n;j++){
        result *=l[j];
    }
    console.log(result);
    process.exit(0);
}
if (symbol==="/"){
    var result;
    result =l[0]/l[1];

    console.log(result);
    process.exit(0);
}
if (symbol==="-"){
    var result;
    result =l[0]-l[1];

    console.log(result);
    process.exit(0);
}
