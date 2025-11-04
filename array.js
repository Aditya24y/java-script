// object

let obj= {
    "name":"aditya",
    weight:"72 kg",
    height:6,
}

console.log(obj);

//arrays
let arr=[1,2,3,4,5,6]
console.log(arr);

//array constructor

let brr=new Array("aditya",1,"hello");
brr.push(10);
brr.push(47);
brr.push("rahul");
brr.pop();

brr.shift();//use to remove element at first position

brr.unshift("deepak");//use to add element at first position.

console.log(brr);

console.log(brr.slice(2,4));// use to cut in part ,here starting index is considerd and last index is not considerd

//splice is use to add,remove,replace.

brr.splice(1,2,"kunal");
console.log(brr);

//mapping
let crr=[10,20,30];
crr.map((number)=>{
    console.log(number+1);
});

//filter

let drr=[10,24,35,67,90]
let evenArray =drr.filter((number)=>{
    if(number%2===0){
       return true
    }
    else{
        return false
    }
});
console.log(evenArray);
  

//reduce
let err=[10,20,35,60]
let ans=err.reduce((acc,curr)=>{
    return acc+curr;
});
console.log(ans);

//sort

let grr=[9,4,7,0,2,6,8,1]

grr.sort();
console.log(grr);

//indexof
console.log(arr.indexOf(0));
