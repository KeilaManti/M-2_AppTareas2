function listado(listar) {
    if (listar.length == 0) {
        console.log("La lista de Tareas esta vacia.")
    } else {
        console.log("TAREAS:");
        listar.forEach(function (unatarea) {
            console.log("Titulo: " + unatarea.titulo);
            console.log("Estado: " + unatarea.estado);
            console.log("--------------------");
        });
    }
}

module.exports = listado;