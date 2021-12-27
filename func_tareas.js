let fs = require ("fs");

module.exports = functareas = {
    leerJSON: () => {
        let leerarchivo = fs.readFileSync(__dirname + "/Tareas.json", "utf-8");
        return JSON.parse(leerarchivo);
    },

    escribirJSON: (titulo, estado) => {
        let nuevatarea = {
            titulo: titulo,
            estado: estado
        }
        let archivoarray = functareas.leerJSON();
        archivoarray.push(nuevatarea);
        functareas.guardarJSON(archivoarray);
    },

    guardarJSON: (archivo) => {
        let ntarchivo = JSON.stringify(archivo);
        fs.writeFileSync("./tareas.json", ntarchivo, "utf-8");
    },

    deshacer: () => {
        let listatareas = functareas.leerJSON();
        listatareas.pop ();
        functareas.guardarJSON(listatareas);
    },

    filtrar: (estado) => {
        let tareas = functareas.leerJSON();
        let tareasfiltrar = tareas.filter(function (unatarea) {
            return unatarea.estado == estado;
        });
        return tareasfiltrar;
    }
}