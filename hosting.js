 // hosting- Hoisting is JavaScript’s default behavior of moving declarations to the top of the current scope (either the global scope or a function scope) during the compilation phase.

//In simple words:

//You can use variables and functions before they are declared — because JavaScript “hoists” the declarations to the top of their scope.
 
 function saymyname(name){

    console.log(name);
 }

 saymyname("aditya");

 // variable hosting
 {
  console.log(age);
  var age=25;
 }
