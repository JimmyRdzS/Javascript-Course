// Ejercicio 1
import {template} from "./aboutme.js";
console.log("Ejercicio 1");

// Ejercicio 2
/*
¿Qué se ejecuta antes, la llamada a console.log() o el contenido del fichero aboutme.js?
- Se ejecuta el contenido del fichero aboutme.js, con los breakpoints añadidos se puede confirmar el comportamiento de la ejecución.
- Se adjunta una impresión de pantalla de los breakpoints y el resultado en consola, el archivo se encuentra en activity > 1_session > ejercicio2.png
*/

// Ejercicio 3
/*
Enumera 3 herramientas útiles dentro de las herramientas de desarrollo de Google Chrome o Mozila Firefox (inspector, consola, networking…) y explica su funcionamiento.
Google Chrome - Herramientas de desarrollador:
1.	Network: En la pestaña de network vamos a poder encontrar todos los elementos que se cargan en un sitio web, así como poder monitorear llamadas a recursos externos, saber su tamaño, tiempo de carga y el status de la respuesta, etc. Cada que se cargue el sitio se van a ir enumerando los elementos mostrando en forma de cascada la información de cada petición o llamada.
2.	Application: Dentro de este apartado o pestaña de el panel de desarrolladores vamos a poder encontrar múltiples elementos respecto al almacenamiento, cache, servicios en segundo plano, o servicios del sitio web que estemos visualizando, cada que haya alguna interacción o el sitio cuente con un elemento de los mencionados anteriormente, vamos a poder visualizarlo, así como poder modificarlo. Esta herramienta se vuelve muy útil ya que muchos de estos elementos no se pueden visualizar de muchas maneras, por lo que este panel facilita al desarrollador tener el acceso a la información desde una interfaz más sencilla.
3.	Sources: En esta sección vamos a poder encontrar todos los archivos que se llaman en el proyecto, así como recursos que se solicitan o se utilizan, aún si estos archivos pertenecen a algún CDN o hosting externo. Se mostrarán los recursos en una estructura de árbol, que además de permitir visualizarlos, puedes acceder a estos archivos o descargarlos de una manera más sencilla.
*/

// Ejercicio 4
let num_array = [];
for (var i = 1; i <= 100; i++) {
	if(i%7 == 0){
		num_array.push(i);
	}
}
console.log('Números divisibles por 7 en el rango 1 - 100: ', num_array);

// Ejercicio 5
/*
¿Cuál es la diferencia entre ejecutar un fichero JavaScript en un navegador web en formato <script> y en formato <script type=”module”>?.
- El fichero de tipo modulo puede importar otros módulos dentro de él, siendo entonces el módulo padre de los módulos importados, permitiendo dar una estructura modular a la aplicación, y permitiendo indicar qué variables y funciones pueden ser accesadas desde afuera del módulo, esto permite un mejor manejo y control de las secciones de un módulo.
*/

// Ejercicio 6
/*
let formatter = {
	prefix: 'Hello ',
	append: function(string){
		console.log(this.prefix + string);
	}
};
*/
function Formatter(){
	this.prefix = 'Hello ';
	this.append = function(string){
		console.log(this.prefix + string);
	}
};

let formatter = new Formatter();
formatter.append('World');
//Result: Hello World

Formatter.prototype.toLowerString = function(string){
	console.log(string.toLowerCase());
};

formatter.toLowerString("I'm Lucas");
//Result: i’m lucas