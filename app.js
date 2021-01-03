//Yargs
//Extraer solo lo necesario de yargs
const argv = require("./config/yargs").argv;

//const multiplicar = require(("./multiplicar/multiplicar"));
const {crearArchivo, listarTabla} = require(("./multiplicar/multiplicar"));

//Listar
//console.log(argv);
let comando = argv._[0];

switch( comando ){
    case "listar":
        listarTabla(argv.base, argv.limite);
    break;
    case "crear":
        crearArchivo(argv.base, argv.limite)
            .then( archivo => console.log(`Archivo creado: ${ archivo }`) )
            .catch(err => console.log(err));
    break;
    default:
        console.log("Comando no reconocido");
}

//Requireds
//Propio de una libreria de Node File System
//const fs = require('fs');

/*
//De un paquete externo
const fs = require('express');
//De archivos que nosotros creamos
const fs = require('./fs');
*/

//let base = "abc";
//console.log(multiplicar);
//console.log(process.argv)

//Yargs
//let argv2 = process.argv;
//console.log(argv.base);
//console.log("Limite", argv.limite);

//let parametro = argv[2];
//split para separar elementos para convertir de un string a un arreglo
//let base = parametro.split("=")[1]

//console.log(base);



/* Lo mandas a multiplicar.js
let data = "";

for( let i = 1; i <= 10; i++){
    data += (`${ base } * ${ i } = ${ base * i }\n`);
}

fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
    if (err) throw err;
    console.log(`El archivo tabla-${ base }.txt ha sido creado!`);
});
 */

 //node app --base=10
/* crearArchivo(base)
    .then( archivo => console.log(`Archivo creado: ${ archivo }`) )
    .catch(err => console.log(err)); */
