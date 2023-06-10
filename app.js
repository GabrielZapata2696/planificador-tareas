import { guardarDB, leerDB } from './helpers/guardarArchivo.js';
import { inquirerMenu, pausa, leerInput } from './helpers/inquirer.js';


import { Tareas } from './models/tareas.js';

console.clear();


const main = async () => {

    let opt = '';
    const tareas = new Tareas();
    const tareasDB = leerDB();

    if (tareasDB) {
        //establecer las tareas
        tareas.cargarTareasDB(tareasDB);

    }

    do {
        //imprime el menu en la consola
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                //crear tarea
                const desc = await leerInput('Descripción:');
                tareas.crearTarea(desc);
                break;
            case '2':
                //listar tarea
                tareas.listadoCompleto();
                break;
            case '3':
                //listar tarea completadas
                tareas.listarTareasFiltro(true);
                break;
            case '4':
                //listar tarea pendientes
                tareas.listarTareasFiltro(false);
                break;
        }


        guardarDB(tareas.listadoArr);


        await pausa();

    } while (opt !== '7');




};


main();
