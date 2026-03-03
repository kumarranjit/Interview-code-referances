
// Closure
A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). 
In other words, a closure gives you access to an outer function’s scope from an inner function. 
In JavaScript, closures are created every time a function is created, at function creation time.

A closure is a feature in JavaScript where an inner function has access to the outer (enclosing) function's variables, a scope chain. 

The closure has three scope chains: it has access to its own scope, variables defined between its curly brackets. 
it has access to the outer function's variables.

Closures has important role in callbacks and asynchronous programming.

function create() {
   var counter = 0;
   return {
      increment: function() {
         counter++;
         console.log("increment", counter);
      },
      decrement: function() {
        counter--;
        console.log("decrement", counter);
      },
      print: function() {
         console.log(counter);
      }
   }
}
var c = create();
c.increment();
c.print();
//==============================================================================================================================================

//prototype

The prototype property allows you to add properties and methods to any object (Number, Boolean, String and Date etc.).

Note - Prototype is a global property which is available with almost all the objects.

function book(val1,val2){
this.title=val2;
this.author=val2;
}
var mybook = new book('some','name');
book.prototype.price=null;
console.log(mybook); 

var str ="abcdef";
function checkPrototype(){};
checkPrototype.prototype.ans = str.split('').concat(str.split('').reverse());

O/P: ["a", "b", "c", "d", "e", "f", "f", "e", "d", "c", "b", "a"]

//=========================================================================================================================================
// Javascript Call 

What is the difference between call(), apply() and bind()?
----------------------------------------------------
They are Function prototype methods used to:
  Control the value of this,  Reuse functions
  Borrow methods from other objects

1️⃣ call() 
  Invokes the function immediately
  Accepts arguments one by one

  Example
  function greet(city, country) {
  console.log(`Hello ${this.name} from ${city}, ${country}`);
  }
  const user = { name: 'Ranjit' };
  greet.call(user, 'Chennai', 'India');

2️⃣ apply()
  Invokes the function immediately
  Accepts arguments as an array
  Ex:
  greet.apply(user, ['Chennai', 'India']);


| Feature              | call                | apply              | bind                      |
| -------------------- | ------------------- | ------------------ | ------------------------- |
| Invokes immediately  | ✅ Yes              | ✅ Yes            | ❌ No                     |
| Returns new function | ❌ No               | ❌ No             | ✅ Yes                    |
| Arguments            | Comma-separated     | Array              | Comma-separated           |
| Use case             | Immediate execution | Dynamic args array | Event handlers, callbacks |
| `this` binding       | Temporary           | Temporary          | Permanent                 |

call and apply invoke a function immediately with a specified this, differing only in how arguments are passed,   
while bind returns a new function with this permanently bound.

3️⃣ bind()
  Does NOT invoke immediately
  Returns a new function with this permanently bound

  Example:
  const boundGreet = greet.bind(user, 'Chennai');
  boundGreet('India');

Final Summary (Perfect Interview End):
Use call or apply for immediate execution, and bind when you need to reuse a function with a fixed this context.
bind is commonly used in frameworks like Angular and React to preserve this in callbacks and event handlers.”
==========================================================================================================================================
//Arrow Function
-----------------
  👉 An arrow function is a shorter syntax for writing functions in JavaScript,No need function key word 
  its introduced in ES6, and it does not have its own this.
  👉 It inherits this from its surrounding (lexical) scope.
  example:
  const add = (a, b) => a + b;

  Final Summary
  Arrow functions simplify syntax
  No own this
  Best for callbacks and functional programming
  Not suitable for methods or constructors

============================================================================================================================================
//Anonymous Function

It is a function that has no function name. these function are declared dynamically at run time using function operator intead of 
 function declaration.
Function operator more flexiable then a function Declaration. it can be easily used in he place of expression.

Anonymous functions can be used as an argument to other functions or as an immediately invoked function execution.

Immediately invoked function execution
-------------------------------------------
If you want to create a function and execute it immediately after the declaration, you can declare an anonymous function like this:
(function () {
   //...
});

and sometimes, you may want to pass arguments into it, like this

let person = {firstName: 'John',lastName: 'Doe'};
(function () {
   console.log(person.firstName} + ' ' + person.lastName);
})(person);

For example, this function:

let show = function () {   // function expresion
   console.log('Anonymous function');
}
show();

setTimeout(function() {
   console.log('Execute later after 1 second')
}, 1000);

https://www.javascripttutorial.net/javascript-anonymous-functions/

============================================================================================================================
//Callback function
------------------
A callback function is a function passed into another function as an argument, 
which is then invoked inside the outer function to complete some kind of routine or action.

A callback function, also known as a higher-order function, is a function that is passed to another function as a parameter, 
and the callback function is called (or executed) inside the otherFunction. 

A callback is a plain JavaScript function passed to some method as an argument or option. 
Some callbacks are just events, called to give the user a chance to react when a certain state is triggered.

// simple callback function
var x = function(){
console.log("this is x ");
}
var y = function(callback){
console.log("this is y function")
callback();
}
y(x);


function add(a,b){
  return a+b;
  }
  
  function multi(a,b){
  return a*b
  }
  
  function calc(a,b,callback){
  if(typeof callback ==='function'){
  return callback(a,b);
  }
  }
  calc(4,5, multi);
===========================================================================================================================================
//Higher-Order function
-----------------------
The function that use other fuction as arguments and returns functions are named Higher-Oreder function.

===============================================================================================================================
//Recursive Function
-------------------------
A recursive function is a function that calls itself until it doesn’t. And this technique is called recursion.
A recursive function always has a condition to stop calling itself. Otherwise, it will call itself indefinitely. 
 So a recursive function typically looks like the following:

 function recurse() {
   if(condition) {
       // stop calling itself
       //...
   } else {
       recurse();
   }
}

function countDown(fromNumber) {
   console.log(fromNumber);

   let nextNumber = fromNumber - 1;

   if (nextNumber > 0) {
       countDown(nextNumber);
   }
}
countDown(3);

https://www.javascripttutorial.net/javascript-recursive-function/

===================================================================================================================================
Promise
--------
A Promise is a JavaScript object that represents the eventual result (success or failure) of an asynchronous operation.

A Promise can be in three states:
  Pending -> operation is still running
  Fulfilled -> operation completed successfully
  Rejected -> operation failed

Once fulfilled or rejected, the state cannot change.

Why Do We Need Promises in JavaScript? => Promises handle asynchronous operations
 JavaScript runs on a single thread, so long operations (API calls, timers, file access) must be handled asynchronously.

How Promises Help
  1️⃣ Avoid Callback Hell
  2️⃣ Better Error Handling
  3️⃣ Easier Async Flow Control
  4️⃣ Improves Readability & Maintainability

Final Summary
Promises handle async operations
They replace messy callbacks
Foundation for async/await
Promises handle single event, It can be success or failure but eventually completed.

Promises represents the completion of an asynchronous operation with its result. 
Promises handle single event, It can be success or failure but eventually completed.
Unless the current excution of the event loop is completed(success or failure) callback will never be called before it.
Callback added with 'then()' as after success or failure of the asynchronous operation, 
Callback function take two arguments resolve, reject.
multiple callback may be added each callback is executed one after another in the order which they were inherited.

const promiseFun = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Data loaded');
  }, 1000);
});

promiseFun
  .then(result => console.log(result))
  .catch(error => console.error(error));



  const Promise1 = Promise.resolve('Hello world');
  const Promise2 = 10;
  const Promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('goodbye');
  }, 2000);
  });
  const Promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());
  Promise.all([Promise1, Promise2, Promise3,Promise4]).then(val => console.log(val));

Promise.all() vs Promise.allSettled()
🔹 Promise.all()
  Takes an array of promises. 
  Resolves only if ALL promises resolve. 
  Rejects immediately if any one promise rejects
  Ex:
  const p1 = Promise.resolve(10);
  const p2 = Promise.resolve(20);
  const p3 = Promise.reject('Error');
  Promise.all([p1, p2, p3])
    .then(results => {
      console.log(results); // never runs
    })
    .catch(error => {
      console.error(error); // "Error"
    });
  Use Case => When all results are mandatory (e.g., page load data)

🔹 Promise.allSettled()
  Waits for ALL promises to finish
  Never rejects
  Returns result of each promise (fulfilled or rejected)
  Ex:
  const p1 = Promise.resolve(10);
  const p2 = Promise.resolve(20);
  const p3 = Promise.reject('Error');
  Promise.allSettled([p1, p2, p3])
    .then(results => {
      console.log(results);
    });
  //Output 
  [{ status: 'fulfilled', value: 10 },
  { status: 'fulfilled', value: 20 },
  { status: 'rejected', reason: 'Error' }]
  Use Case => When some failures are acceptable (e.g., dashboard widgets)

Promise.all() fails fast if any promise rejects, 
while Promise.allSettled() waits for all promises to complete and returns their individual outcomes.

🔥 Promise vs Observable
  🔹 What is a Promise?
  Handles a single asynchronous value
  Executes immediately
  Cannot be cancelled
  ex:
    getData(): Promise<User> {
    return fetch('/api/user').then(res => res.json());
    }
  🔹 What is an Observable?
    Handles multiple values over time
    Lazy (executes only on subscribe)
    Cancelable
    Supports powerful operators (RxJS)
    ex:
    getData(): Observable<User> {
      return this.http.get<User>('/api/user');
    }
Promises handle a single async value, while Observables handle streams of values and are the foundation of Angular’s reactive programming.

Promise.all vs forkJoin
🔹 What is forkJoin?
  RxJS operator (used heavily in Angular)
  Works with Observables
  Emits once, when all observables complete
  Errors if any observable errors

  Key Difference (Very Important Interview Point)
  forkJoin waits for observables to COMPLETE, not just emit.

  Example:
    forkJoin({
    user: this.userService.getUser(),
    orders: this.orderService.getOrders(),
    payments: this.paymentService.getPayments()
  }).subscribe({
    next: result => console.log(result),
    error: err => console.error(err)
  });

Promise.all works with Promises and resolves when all promises resolve, 
while forkJoin works with Observables and emits once all observables complete, making it ideal for Angular HTTP calls.
================================================================================================================================
  //Async / Await
  -------------------
Async Await is the extension of promises, It help us to write asynchronous code in a synchronous way.
Await is a new operator used to wait for a promises to resolve or reject, It can be only used inside an Async function.
Await is pretty simple its tells javascript to waits for an asynchronous action to finish before continuing the function. 
Its like a pause untile done.
Async function simply allow us to write promise based code as if it was synchronous and its checks that we are not breaking the execusion thread.
Async function always return values.

  async function asynFun(){
    await createPerson({id : 6, name : "Ranjit", tags : "Node"});
    getPerson();
  }
  asynFun();

//Async / Await /Fetch
  async function fetchUser() {
    const res =  await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);
  }
  fetchUser();

async/await improves readability but still relies on Promises under the hood.
❌ async/await does NOT replace Promises
✔ It only simplifies syntax
==========================================================================================================================================
What is the use of the "this" keyword?
--------------------------------------

The keyword ‘this’ refers to the current instance of the object when used inside a function. 
But, when used outside a function, it refers to the window object.

What is the difference between typeof and instanceof operators in Javascript?
-----------------------------------------------------------------------------

The typeof operator returns a string of what type the datatype is. Whereas, the instanceof operator does not work with primitive data types; 
but works with objects and checks on what type the object is.


What is an Event Bubbling in Javascript?
-----------------------------------------

When an event is fired on an HTML element, the execution starts from that event and goes to its parent element. From there, 
the execution passes to its parent element and so on till the body element.


Inheritance
-----------
JavaScript uses prototype based inheritance. Every object has a prototype, and when a method of the object is called then JavaScript 
tries to find the right function to execute from the prototype object.

=============================================================================================================================================
Generators 
----------

ES6 introduced a new way of working with functions and iterators in the form of Generators (or generator functions).
A generator is a function that can stop midway and then continue from where it stopped. 
In short, a generator appears to be a function but it behaves like an iterator.
Generator declaration (function keyword followed by a * asterik) which returns an object.

a generator is a function can call next(). Every invocation of next() will return an object of shape ->
{ 
  value: Any,
  done: true|false
} 

The value property will contain the value. The done property is either true or false. When the done becomes true, 
the generator stops and won't generate any more values.

https://codeburst.io/understanding-generators-in-es6-javascript-with-examples-6728834016d5

Ex:
function * generatorFunction() { 
  console.log('This will be executed first.');
  yield 'Hello, ';   
  console.log('I will be printed after the pause');  
  yield 'World!';
}
const generatorObject = generatorFunction();

console.log(generatorObject.next().value); 
console.log(generatorObject.next().value); 
console.log(generatorObject.next().value); 
===========================================================================================================================================
Mixin:

Mixin is a way properties are added to object with out using inheritance.object
JavaScript doesnt support multiple inheritance, but some time is needed to add functionality of two classes to a single object.
Mixin increasing reuse in a system. we can easily avaid duplication by maintaining this shared functionality.
//==============================================================================================================================================

What is object mutation, sealing and freezing?
----------------------------------------------------
An immutable object is an object whose state or properties cannot be changed after it is created.

Seal an object: Object.seal() method seals an object and preventing new properties from being added to it and making all existing properties as non- configurable. 
But values of present properties can still be changed as long as they are writable
	
var obj = {name : 'suriya'}
Object.seal(obj); 
obj.baz = 'age' ; //this new property will not be added since the object is sealed
obj.name = 'baz'; // by doing this we can still modify the existing property.

Freezing an Object:
----------------------
Object.freeze() prevent mutability, method wont allow to add or modify the exsiting properties.
Object.freeze() doesnt fully freeze an object when it has nested properties.
	
var example  = {name :'suriya'}
Object.freeze(example); //object freezed
Object.isFrozen(example) // will return true

example.age = 22; // fails to add
example.name = 'demo' // fails to modifiy	

===========================================================================================================================
//Destructuring Assignment
--------------------------------

ES6 provides a new feature called destructing assignment that allows you to destructure properties of an object 
or elements of an array into individual variables.

//Object-destructuring
--------------------
Object destructuring assigns the properties of an object to variables with the same names by default.

const obj = { name: 'Max', age: 20, add: '41/3', city: 'chennai', state:'TN' };
const = { name: 'Max', age: 20 };
const {name, age, city, ...rest}= obj;

//Array-destructuring
const sampleArray= ['Jane', 'John'];
const [a, b] = sampleArray;

const sampleArray= ['Jane', 'John', 'Jack', 'Aston']
const [one, two, ...rest] = sampleArray;

Please note that you still only create two variables: name and lastName. The firstName is assigned to name, 
so it won’t create a separate variable.
Just like arrays, you can destructure an object returned by a function immediately:

function myFn( { firstName, lastName  } ){
  return firstName + ' ' + lastName
}
const user = {firstName: "Jack",lastName: "Austin"}
const name = myFn(user);
https://www.javascripttutorial.net/es6/javascript-object-destructuring/
============================================================================================================================

JavaScript Event Loop
------------------------------


=============================================================================================================================
Class Inheritance
----------------
A class can be extended by another, and the new class will inherit all of its parent class methods.

The object that initialize the child class will then be able to use methods from both classes.

class Car {
  constructor(modal, name){
    this.modal = modal;
    this.name = name
  }

  brand(){
    console.log(this.name);
  }
}

class ElectricCar extends Car {

  brand(){
    super.brand();
  }
}

evCar = new ElectricCar('Tata', 'A23');
evCar.brand();

class Car {
  constructor(model, name){
    this.model = model;
    this.name = name
  }
  brand(){
    console.log(this.model);
  }
}

class ElectricCar extends Car {
  getModel(){
    this.brand();
  }
}

evCar = new ElectricCar('Tata', 'A23');
evCar.getModel();

=====================================================================================================================
Javascript DOM manipulation methods?
------------------------------------------
querySelector()  method returns first element that matches one or more css selectors. It will return NULL if no match found

querySelectorAll() � returns only the first instance of all matching element
 
addEventListener() - <button onclick=foo>hello</button>
 	
var  btn = document.querySelector('button')
btn.addEventListener(click,foo);
removeEventListener()  detach previously added event 
createElement()
appendChild() and removeChild(), replaceChild(), cloneNode()
setAttribute() and getAttribute()
===========================================================================================================
What is a module in JavaScript?
------------------------------
A JavaScript module is simply a JavaScript file with pieces of the whole code exported for use by 
other pieces of code. By using modules, you’ve implemented a modular approach into your project, 
enabling you to organize, abstract, encapsulate, and reuse your code as development requires it.

https://sebhastian.com/javascript-modules/

Understanding JavaScript import and export
------------------------------------------
The import and export statements are one of the most crucial features of JavaScript ES6. 
It allows you to import and export JavaScript classes, functions, components, constants, 
any other variables between one JavaScript file and another.

https://sebhastian.com/javascript-import-export/
===========================================================================================================
What is the out output for below code
-------------------------------------------
console.log("start");

setTimeout(() => {
    console.log("print arrow function");
}, 5000);

function cb(){
    console.log("print callback");
}
setTimeout(cb,0);

console.log("End");

new Promise((resolve, rej) => {
    resolve("promise resolve");
}).then(val => {
    console.log("val", val)
});
//output


console.log(x); O/P ; //undefined
var x = 100;   


console.log(y); //uncaught ReferenceError: Cannot access 'y' before initialization , Temporal Dead Zone
let y = 100;

console.log(foo()); O/P ; //undefined
function foo(){
  console.log(this);
}

console.log(fun()); // Uncaught TypeError: fun is not a function
var fun = function(){
    console.log("Hello");
============================================================================
//prototype function

Function.prototype.reUseFunction = function() {
  console.log("testing");
}

function func() {
  console.log(this.reUseFunction);
}
func();
func.reUseFunction();

//Array prototype constructor 

The JavaScript array prototype constructor is used to allow to add new methods 
and properties to the Array() object. If the method is constructed, 
then it will available for every array. When constructing a property, 
All arrays will be given the property, and its value, as default.

Array.prototype.flatten = function(){
console.log(this, "check this is array", Array.isArray(this));
return this.flat(Infinity);
};

console.log([1, 2, [1, 2, 3], 4, [6, 5]].flatten());

Array.prototype.flatDeep = function(){
  return this.reduce((acc, val) =>
      Array.isArray(val) ? acc.concat(val.flatDeep()) : acc.concat(val),[]);
  };
console.log([1, 2, [1, 2, 3], 4, [6, 5]].flatDeep());
console.log(arr.flatDeep());
console.log(arr1.flatDeep());
  
Array.prototype.changeUpperCase = function(){
for(let i = 0; i < this.length; i++) {
  this[i] = this[i].toUpperCase();
}
};

function myFunction(){
let strArr = ["ktr", "WEBTechnology", "Geeks", "v8", "spidermonkey", "chakra"];
strArr.changeUpperCase();
console.log(strArr);
};
myFunction();

// Strict mode
==================
Strict mode makes it easier to write “secure” JavaScript.
The statement “use strict”; instructs the browser to use the Strict mode, 
which is a reduced and safer feature set of JavaScript


//Best practices
==================
Preventing cross-site scripting (XSS) 
HTTP-level vulnerabilities
Cross-site request forgery (CSRF)
Cross-site script inclusion (XSSI) 
_______________________________________________________________________________________________________________
🔹 Topic: JavaScript Security Basics

1️⃣ What is XSS (Cross-Site Scripting)?
XSS occurs when an attacker injects malicious scripts into a trusted website.

📌 Types:
 • Stored XSS
 • Reflected XSS
 • DOM-based XSS

2️⃣ How can XSS be prevented?
 • Escape user inputs
 • Use frameworks’ built-in sanitization
 • Avoid innerHTML
 • Use Content Security Policy (CSP)

3️⃣ What is CSRF (Cross-Site Request Forgery)?
CSRF tricks a user into making unauthorized requests using their authenticated session.

4️⃣ How do you prevent CSRF?
 • CSRF tokens
 • SameSite cookies
 • Proper CORS configuration

5️⃣ Why is this important for frontend developers?
Because frontend code plays a big role in:
 • Input handling
 • API security
 • User data protection
____________________________________________________________________________________________
🔹  JavaScript Fundamentals

1️⃣ What is the difference between var, let, and const?
 • var → function scoped, can be redeclared & hoisted (initialized as undefined)
 • let → block scoped, cannot be redeclared, hoisted but not initialized
 • const → block scoped, cannot be reassigned (but objects can be mutated)

2️⃣ What is hoisting in JavaScript?
Hoisting is JavaScript’s behavior of moving declarations to the top of their scope during execution.
 • var → hoisted and initialized
 • let & const → hoisted but in Temporal Dead Zone

3️⃣ Difference between == and ===?
 • == → compares values after type conversion
 • === → compares both value and type (recommended)

4️⃣ What is scope in JavaScript?
Scope defines where variables are accessible:
 • Global scope
 • Function scope
 • Block scope (let, const)

1️⃣ What is Hoisting in JavaScript?
Hoisting is JavaScript’s behavior of moving declarations to the top of their scope during the compilation phase.

In JavaScript, during hoisting, var variables are declared and initialized with undefined,
whereas let and const are declared but not initialized, which creates a Temporal Dead Zone.

📌 Important: Only declarations are hoisted, not initializations.

2️⃣ How are var, let, and const hoisted differently?
 • var → hoisted and initialized with undefined
 • let & const → hoisted but not initialized

3️⃣ What is the Temporal Dead Zone (TDZ)?
whereas let and const remain uninitialized, creating a Temporal Dead Zone until their declaration line is executed.

The Temporal Dead Zone (TDZ) is the time between when a variable is hoisted and when it is initialized.
During this period, accessing the variable results in a ReferenceError.

4️⃣ Why was TDZ introduced?
 • Prevents accidental access before declaration
 • Encourages safer and more predictable code
 • Reduces bugs caused by var
___________________________________________________________________________________________
🔹 Topic: Event Loop, Call Stack & Async JavaScript

1️⃣ What is the Call Stack?
The Call Stack is a data structure that keeps track of function calls in JavaScript.
 • Executes code synchronously
 • Follows LIFO (Last In, First Out) order

2️⃣ What is the Event Loop?
The Event Loop constantly checks:
 • If the call stack is empty
 • If yes, it pushes pending tasks from queues to the call stack

This is how JavaScript handles asynchronous operations despite being single-threaded.

3️⃣ What are Microtasks and Macrotasks?
 • Microtasks → Promise.then, queueMicrotask
 • Macrotasks → setTimeout, setInterval, DOM events

👉 Microtasks always execute before macrotasks once the call stack is clear.

4️⃣ Order of execution?
 1. Synchronous code
 2. Microtask queue
 3. Macrotask queue

5️⃣ Why is this important in real projects?
Understanding the event loop helps to:
 • Debug async issues
 • Avoid unexpected UI freezes
 • Write predictable async code in Angular/React apps

📌 This topic is a must-know for frontend interviews and real-world performance debugging.
____________________________________________________________________________________________
🔹 Topic: Closures & Execution Context

1️⃣ What is a Closure in JavaScript?
A closure is created when an inner function remembers and accesses variables from its outer function, even after the outer function has finished executing.

👉 In simple words: Function + its lexical scope = Closure

2️⃣ Why are closures useful?
Closures are commonly used for:
 • Data encapsulation (private variables)
 • Callbacks
 • Event handlers
 • Currying and memoization

3️⃣ Real-time example of a closure?
A counter function where the count variable is not accessible directly but remembered by the inner function.

4️⃣ What is Execution Context?
Execution Context is the environment where JavaScript code is executed. It includes:
 • Variable Environment
 • Scope Chain
 • this keyword

Types:
 • Global Execution Context
 • Function Execution Context

5️⃣ Is closure a performance issue?
Closures can cause memory leaks if unused references are retained, so proper cleanup is important.

📌 Closures are one of the most frequently asked concepts in JavaScript interviews, especially for mid-level frontend roles.
__________________________________________________________________________________________________________________________
🔹 Topic: this Keyword, call, apply, bind

1️⃣ What is this in JavaScript?
this refers to the object that is executing the current function.
Its value depends on how the function is called, not where it is defined.

2️⃣ this in different scenarios:
 • Global context → refers to window (non-strict mode)
 • Object method → refers to the object
 • Function call → undefined (strict mode)
 • Arrow function → inherits this from lexical scope

3️⃣ Difference between call, apply, and bind?
 • call() → invokes function immediately, arguments passed individually
 • apply() → invokes function immediately, arguments passed as an array
 • bind() → returns a new function with bound this

4️⃣ When do we use bind() in real projects?
 • Event handlers
 • Passing methods as callbacks
 • Preventing context loss in class-based components

5️⃣ Why arrow functions don’t have their own this?
Arrow functions are designed to avoid dynamic this binding, making code more predictable.
_____________________________________________________________________________________________________________________
🔹 Topic: Shallow Copy vs Deep Copy

1️⃣ What is a Shallow Copy?
A shallow copy duplicates only the top-level properties.
Nested objects still share the same reference.

Common ways:
 • Spread operator { ...obj } 
    Example: const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { ...obj1 };
 • Object.assign()
   Example: const obj1 = { a: 1, b: { c: 2 } };
   const obj2 = Object.assign({}, obj1);

2️⃣ What is a Deep Copy?
A deep copy creates a completely independent copy, including all nested objects.

Common ways:
 • structuredClone() (recommended)
 • JSON.parse(JSON.stringify(obj)) (with limitations)

3️⃣ Difference between Shallow and Deep Copy?
 • Shallow copy → changes in nested objects affect the original
 • Deep copy → no shared references

4️⃣ Why is this important in frontend frameworks?
 • State mutation issues in React
 • Change detection problems in Angular
 • Unexpected UI bugs

5️⃣ When should you use deep copy?
 • Complex nested state updates
 • Immutable data handling
 • Preventing side effects
_____________________________________________________________________________________________________________________

🔹 Topic: Debouncing vs Throttling

1️⃣ What is Debouncing?
Debouncing ensures a function runs only after a specified delay once the event stops firing.

📌 Example use cases:
 • Search input API calls
 • Window resize events
 • Form validations

2️⃣ What is Throttling?
Throttling ensures a function runs at most once in a fixed interval, no matter how many times the event fires.

📌 Example use cases:
 • Scroll events
 • Mouse move events
 • Infinite scrolling

3️⃣ Key difference between Debounce & Throttle?
 • Debounce → waits for inactivity
 • Throttle → runs at regular intervals

4️⃣ Which one is better?
Neither is “better” universally — it depends on the use case:
 • User input → Debounce
 • Continuous events → Throttle

5️⃣ Real-world relevance?
These techniques help:
 • Improve performance
 • Reduce unnecessary API calls
 • Enhance user experience
_____________________________________________________________________________________________________________________

🔹 Topic: Mutability vs Immutability

1️⃣ What is Mutability?
Mutability means changing the original object or array directly.

📌 Examples:
 • push(), pop()
 • Direct object property assignment

2️⃣ What is Immutability?
Immutability means creating a new copy instead of modifying existing data.

📌 Examples:
 • Spread operator (...)
 • map, filter, concat

3️⃣ Why is immutability important?
 • Predictable state updates
 • Efficient change detection
 • Easier debugging and time-travel debugging

4️⃣ How does this affect React & Angular?
 • React relies on reference changes to trigger re-renders
 • Angular’s OnPush change detection benefits from immutability

5️⃣ Interview takeaway
Immutability helps avoid side effects and unexpected UI bugs.
_____________________________________________________________________________________________________________________
🔹 Topic: map, filter, reduce

1️⃣ What does map() do?
map() transforms each element of an array and returns a new array without mutating the original one.

📌 Use case: data transformation.

2️⃣ What does filter() do?
filter() returns a new array with elements that satisfy a given condition.

📌 Use case: removing unwanted data.

3️⃣ What does reduce() do?
reduce() reduces an array to a single value by applying a reducer function.

📌 Use case:
 • Sum / aggregation
 • Grouping data
 • Flattening arrays

4️⃣ Key differences interviewers look for
 • map → transform
 • filter → select
 • reduce → combine

5️⃣ Why are these preferred over loops?
 • Cleaner and more readable
 • Immutable approach
 • Easier debugging and testing
_____________________________________________________________________________________________________________________
🔹 Topic: Arrow Functions vs Normal Functions

1️⃣ What is the main difference?
Arrow functions are shorter syntax functions but behave differently from normal functions.

2️⃣ How is this different?
 • Normal function → this is dynamic (depends on call)
 • Arrow function → this is lexical (inherits from parent scope)

3️⃣ Do arrow functions have arguments object?
❌ No.
Arrow functions don’t have their own arguments; they inherit from the parent scope.

4️⃣ Can arrow functions be used as constructors?
❌ No.
Arrow functions do not have a prototype, so they cannot be called with new.

5️⃣ When should you NOT use arrow functions?
 • Object methods that rely on this
 • Constructor functions
 • When dynamic context is needed
_____________________________________________________________________________________________________________________
🔹 Day 13 Topic: JavaScript Modules

1️⃣ What are JavaScript Modules?
Modules allow splitting code into reusable, maintainable files with clear boundaries.

2️⃣ Difference between ES Modules and CommonJS?
 • ES Modules (ESM)
 • Uses import / export
 • Static imports (hoisted)
 • Supported natively in browsers
 • CommonJS
 • Uses require() / module.exports
 • Dynamic imports
 • Mainly used in Node.js

3️⃣ What is Tree Shaking?
Tree shaking removes unused code during bundling, reducing final bundle size.
👉 Works best with ES Modules.

4️⃣ Why are modules important in frontend apps?
 • Better code organization
 • Improved performance
 • Easier testing and scaling

5️⃣ Where do we use this daily?
 • Angular modules & lazy loading
 • React component-based architecture
 • Shared utility libraries
___________________________________________________________________________________________________________________
🔹 Topic: Destructuring, Rest & Spread Operators

1️⃣ What is Destructuring?
Destructuring allows extracting values from arrays or objects into variables in a clean and readable way.

📌 Helps reduce repetitive code and improves clarity.

2️⃣ Object vs Array Destructuring?
 • Object destructuring → based on property names
 • Array destructuring → based on position

3️⃣ What is the Rest Operator (...)?
The rest operator collects multiple values into a single variable.
 • Used in function parameters
 • Used while destructuring

4️⃣ What is the Spread Operator (...)?
The spread operator expands elements of arrays or objects.
 • Copy arrays/objects
 • Merge objects
 • Pass multiple arguments to functions

5️⃣ Common interview pitfall?
Spread creates a shallow copy, not a deep copy — nested objects still share references.
__________________________________________________________________________________________________________________________
🔹 Topic: Equality & Object Comparison

1️⃣ Difference between == and ===?
 • == → loose equality, performs type conversion
 • === → strict equality, compares both value and type

👉 Always prefer === in real projects.

2️⃣ Why does [] == [] return false?
Because objects (including arrays) are compared by reference, not by value.
Each array creates a new memory reference.

3️⃣ Why is {} === {} false?
Same reason — different object references in memory.

4️⃣ How do you compare objects properly?
 • Compare specific properties
 • Convert to string (limited cases)
 • Use deep comparison utilities

5️⃣ What is Object.is()?
Object.is() is similar to === but handles edge cases better:
 • NaN === NaN → false
 • Object.is(NaN, NaN) → true
 • +0 and -0 are treated differently
__________________________________________________________________________________________________________________________
🔹 Topic: Currying & Function Composition

1️⃣ What is Currying?
Currying is the technique of breaking a function with multiple arguments into a sequence of functions, each taking a single argument.

👉 Example idea:
sum(a, b, c) → sum(a)(b)(c)

2️⃣ Why is currying useful?
 • Reusability of functions
 • Partial application
 • Cleaner and more readable code

3️⃣ What is Function Composition?
Function composition is combining multiple functions where the output of one function becomes the input of the next.

👉 compose(f, g)(x) → f(g(x))

4️⃣ Where is this used in real projects?
 • Redux middleware
 • Utility/helper functions
 • Data transformations in frontend apps

5️⃣ Is this common in interviews?
Yes — especially for mid to senior frontend roles, to check how well you understand functions beyond basics.
__________________________________________________________________________________________________________________________
🔹 Topic: Prototypes & Prototype Chain

1️⃣ What is a Prototype in JavaScript?
Every JavaScript object has an internal property called [[Prototype]], which allows objects to inherit properties and methods from another object.

2️⃣ What is the Prototype Chain?
When a property is accessed:
 • JavaScript looks at the object itself
 • If not found, it looks up the prototype chain
 • This continues until null is reached

3️⃣ How does inheritance work in JavaScript?
JavaScript uses prototype-based inheritance, not class-based (classes are syntactic sugar over prototypes).

4️⃣ Difference between __proto__ and prototype?
 • __proto__ → points to an object’s prototype
 • prototype → property of constructor functions, used for inheritance

5️⃣ Why is this important?
Understanding prototypes helps:
 • Debug unexpected behavior
 • Understand classes under the hood
 • Write memory-efficient code
 • Implement inheritance patterns effectively
__________________________________________________________________________________________________________________________
🔹 Topic: Memory Management & Garbage Collection

1️⃣ How does memory management work in JavaScript?
JavaScript automatically allocates memory when objects are created and frees it when they are no longer needed using Garbage Collection.

2️⃣ What is Garbage Collection?
Garbage Collection is the process of identifying and removing objects that are no longer reachable in the program.

Most modern JS engines use the Mark-and-Sweep algorithm.

3️⃣ What are common causes of memory leaks?
 • Unused closures holding references
 • Global variables
 • Unremoved event listeners
 • Timers not cleared (setInterval)

4️⃣ How can you prevent memory leaks?
 • Clean up subscriptions and listeners
 • Avoid unnecessary global variables
 • Clear timers
 • Be careful with closures

5️⃣ Why is this asked in frontend interviews?
Because memory leaks can:
 • Slow down applications
 • Cause crashes
 • Affect user experience
