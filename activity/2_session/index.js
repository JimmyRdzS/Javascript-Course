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
class Login {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    login() {
      (this.username === "username" && this.password === "passwd") ?
      alert("User logged in") :
      alert("User or password incorrect");
    }
}

const login_success = new Login("username","passwd");
const login_failure = new Login("Jaime", "1234");

// Ejercicio 5

const success = document.getElementById("loginSuccess");
const failure = document.getElementById("loginFailure");

success.addEventListener('click', event => {
  login_success.login();
});

failure.addEventListener('click', event => {
  login_failure.login();
});

// Ejercicio 6
const successAsync = document.getElementById("loginSuccessAsync");
const failureAsync = document.getElementById("loginFailureAsync");

successAsync.addEventListener('click', async event => {
  loginWitUsername("admin", "passwd").then( (resolved) => {
        console.log(resolved);
    })
    .catch( (rejected) => {
        console.log(rejected);
    })
});

failureAsync.addEventListener('click', async event => {
  loginWitUsername("Jaime", "1234").then( (resolved) => {
        console.log(resolved);
    })
    .catch( (rejected) => {
        console.log(rejected);
    })
});

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
