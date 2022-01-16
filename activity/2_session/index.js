// Ejercicio 1

let person = {
  name: "Jaime Rodriguez",
  age: 27,
  profession: "Developer",
} 

function getParams(customObject){
  let keys = Object.keys(customObject);
  return keys;
}

console.log(getParams(person));

// Ejercicio 2
console.log(this === window);

console.log(this);

function f1(){ return this; }
console.log(f1());

let obj = {
  name: "Jaime Rodriguez",
  f() {
    console.log('This => ', this.name);
  }
};
obj.f();

let obj2 = {
  name: "Humberto Solis",
  f: () => {
    console.log('This => ', this.name);
  }
};
obj2.f();

var name = "test name"; //Global
let obj3 = {
  name: "Humberto Solis",
  f: () => {
    console.log('This => ', this.name);
  }
};
obj3.f();

let obj4 = {
  name: "Jaime",
  f: function() {
    return this;
  }
};
console.log(obj4);

let obj5 = {
  name: "Humberto",
  f: function() {
    return this.name;
  }
};
console.log(obj5);


// Ejercicio 3
let reversedString = originalString => originalString.split("").reverse().join("");

let cadena = "Jaime Humberto";
console.log("Cadena original => ", cadena);
console.log("Cadena invertida => ", reversedString(cadena));

// Ejercicio 4

// Ejercicio 5

// Ejercicio 6

let loginWitUsername = (username, password) => {
  return new Promise(function (resolve, rejected) {
    setTimeout(() => {
      if (username === "admin" && password === "passwd") {
        resolve("User logged in");
      } else {
        rejected("Error: invalid username or password");
      }
    }, 200);
  });
};
