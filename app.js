import { inquirerMenu, pausa, leerInput } from './helpers/inquirer.js';


import { Tareas } from './models/tareas.js';

console.clear();


const main = async () => {

    let opt = '';
    const tareas = new Tareas();
    do {
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                //crear tarea
                const desc = await leerInput('Descripción:');
                tareas.crearTarea(desc);
                break;
            case '2':
                //listar tarea
                console.log(tareas._listado);
                break;

        }

        await pausa();

    } while (opt !== '7');




};


main();
