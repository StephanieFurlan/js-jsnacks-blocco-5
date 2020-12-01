$(document).ready(function() {

   // jsnack 3
   // Si scriva una funzione che accetti tre argomenti,
   // un array e due numeri (a più piccolo di b).
   // La funzione ritornerà un nuovo array con i
   // valori che hanno la posizione compresa tra i due numeri
   function cutArray(array, minIndex, maxIndex) {
      var newArray = [];
      for (var i = minIndex; i <= maxIndex; i++) {
         newArray.push(array[i]);
      }
      return newArray;
   }

   // test

   var array = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
   var a = 2;
   var b = 7;
   // console.log(cutArray(array, a, b));

   // ECMA6

   // 1. CONST

   // -> integer
   const constantInteger = 10;
   // constantInteger = 15;
   // Uncaught TypeError: Assignment to constant variable.

   // -> string
   const constantString = "hello";
   // constantString = "hella";
   // Uncaught TypeError: Assignment to constant variable.

   // -> array
   const constantArray = ["I", "have", "four", "elements"];
   // constantArray = ["I", "have", "five", "elements", "."];
   // Uncaught TypeError: Assignment to constant variable.

   // -> object
   const constantObject = {
      x: 1,
      y: 10,
      r: 12,
      color: "blue",
   };
   // constantObject = {
   //    x: 1,
   //    y: 11,
   //    r: 12,
   //    color: "blue",
   // };
   // Uncaught TypeError: Assignment to constant variable.

   const someArray = [];
   someArray.push(1);
   someArray.push(2);
   someArray.push(3);
   console.log(someArray);
   // [1, 2, 3];

   const object = {
      name : 'Pippo',
      age: 40
   }
   object.age = 20
   console.log(object);
   // {name: "Pippo", age: 20}

   // 2. CONST

   x = 10;
   var x;
   console.log(x);
   // no error

   // y = 14;
   let y;
   // console.log(y);
   // Uncaught ReferenceError: Cannot access 'y' before initialization

   console.log(variable);
   //undefined
   var variable = ["hello"];
   variable = 'pippo';

   // console.log(variableNew);
   // Uncaught ReferenceError: variableNew is not defined
   let variableNew = 'pluto';
   variableNew = variable + ' ' + variableNew;
   console.log(variableNew);

   // 3. IL NUOVO BLOCK SCOPE

   // Scope -> Funzioni
   var variable = 'pippo';
   let secondVariable = 10;
   const constantVariable = 'constance';
   function myFunction(params) {
      //Scope
      variable = 'pluto';
      secondVariable = 15;
      // constantVariable = 'paperino';
      //Uncaught TypeError: Assignment to constant variable.
      let s ="hello";
      var d = "hi";
   }
   myFunction();
   // console.log(s);
   // Uncaught ReferenceError: s is not defined
   // console.log(d);
   // Uncaught ReferenceError: d is not defined
   console.log(variable); //pluto
   console.log(secondVariable); //15


   function myFunction(params) {
      var r1 = 'pippo';
      let r2 = 10;
      const r3 = 'constance';
   }
   // console.log(r1);
   // Uncaught ReferenceError: variable is not defined
   // console.log(r2);
   // Uncaught ReferenceError: secondVariable is not defined
   // console.log(r3);
   // Uncaught ReferenceError: constantVariable is not defined

   // Scope -> Cicli
   for (var k = 0; k < 15; k++) {
      console.log(k);
   }

   console.log("This is value of k after for loop with var: ", k);
   for (let i = 0; i < 15; i++) {
      console.log(i);
   }

   // console.log("This is value of i after for loop with let: ", i);
   // Uncaught ReferenceError: i is not defined

   // Scope -> if
   let boolean = true;
   if (boolean) {
      console.log("hello");
      let boolean2 = false;
   }

   // console.log(boolean2);
   // Uncaught ReferenceError: boolean2 is not defined

   // 4. TEMPLATE LITERAL
   let string = 'Qui';
   let stringTwo = 'Qua';
   console.log(
   `
   ${string} Quo ${stringTwo}
   Andarono al mercato
   `
   );
   // Qui Quo Qua
   // Andarono al mercato

   function sum(a, b) {
      return a + b;
   }

   console.log(`The sum of 3 and 5 is ${sum(3,5)}`);

   var a = 5;
   var b = 10;

   function tag(strings, ...values) {
      console.log(strings);
      console.log(strings[0]); // "Par1 Par1"
      console.log(strings[1]); // "par2 "
      console.log(values[0]);  // 15
      console.log(values[1]);  // 50

      return "hello!";
   }

   tag`Par1 Par1 ${ a + b } par2 ${ a * b }`;

   // 5. ARROW FUNCTIONS

   var multiply = (a,b) => a * b;
   console.log(multiply(2,10));

   //funzione con nome
   const add = () => 1 + 1;
   const resultFunction = add();

   console.log(resultFunction);
   //funzione anonima
   document.getElementById('container').addEventListener('click',
      () => console.log($(this))
      // this is document
      // function() {
      //    console.log($(this))
      //    // this is container
      // }
   );

   // 6. REST E SPREAD

   // function text(...myArguments) {
   //    let s = ""
   //    for(let i = 0; i < myArguments.length; i++) {
   //       s += myArguments[i];
   //    }
   //    return s;
   // }

   var text = (...myArguments) => {
         let s = ""
         for(let i = 0; i < myArguments.length; i++) {
            s += myArguments[i];
         }
         return s;
      }

   console.log(text("s", "t", "e", "p", "h", "a", "n", "i", "e"));

   const arr1 = [3, 5, 1];
   const arr2 = [8, 9, 15];

   let mergedArray = [...arr1,...arr2];
   console.log(mergedArray); //[3,5,1,8,9,15]

   const obj = {name: 'palla', peso: 50};
   const copyObj = {...obj, colore: 'blue'};
   console.log(copyObj); //{name: "palla", peso: 50, colore: "blue"}

});
