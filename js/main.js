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





});
