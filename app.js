let functareas = require("./func_tareas");
let listado = require("./listado");

const process = require ("process");
let opcion = process.argv[2];

switch (opcion) {
    case "listar":
        let listar = functareas.leerJSON();
        listado (listar);
        break;

    case "agregar":
        let titulo = process.argv[3];
        let estado = process.argv[4];
        functareas.escribirJSON(titulo, estado);
        break;

    case "deshacer":
        functareas.deshacer();
        break;

    case "filtrar":
        let filtro = process.argv[3];
        let listafiltrada = functareas.filtrar(filtro);
        listado (listafiltrada);
        break;

    case undefined:
        console.log("Atención - Tienes que pasar una acción.");
        break;

    default:
        console.log("No entiendo qué quieres hacer​.");
        break;
}