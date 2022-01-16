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

// Ejercicio 3

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
