for(let i=1; i<=10; i++){
    console.log("aditya");
}


for(let i=1;i<=5;i++){
    console.log(i);
}

for(let i=5;i>=0;i--){
    console.log(i);
}

// break statement

for(let i=1;i<=6;i++){
    if(i==5){
        break;
    }
    else{
        console.log(i);
    }
}

//continue statement

for(let i=1;i<5;i++){
    if(i==3){
        continue;
    }
    else{
        console.log(i);
    }
}

//string concatination

let a ="aditya";
let b="yadav";

let c=a+b;
console.log(c);
console.log(c.length);
console.log(c.toUpperCase());


//string backtracing

let d ="aditya";
let e="yadav";

let f=`${a}${b}`;
console.log(f);

