import { Tarea } from './tarea.js';
import colors from 'colors';

class Tareas {

    _listado = {};


    get listadoArr() {
        const listado = [];

        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[ key ];
            listado.push(tarea);
        });
        return listado;
    };

    constructor() {
        this._listado = {};

    }

    cargarTareasDB(tareas = []) {

        tareas.forEach(tarea => {
            this._listado[ tarea.id ] = tarea;
        });

    }

    listadoCompleto() {
        console.log();
        this.listadoArr.forEach((tarea, index) => {
            index = `${index + 1}.`.green;

            const { desc, completadoEn } = tarea;
            const estado = (completadoEn != null) ? 'Completada'.green : 'Pendiente'.yellow;
            console.log(`${index} ${desc} :: ${estado} `);
        });
    }

    crearTarea(desc = '') {
        const tarea = new Tarea(desc);
        this._listado[ tarea.id ] = tarea;
    }

    listarTareasFiltro(completadas = true) {
        console.log();

        let arrFiltro = this.listadoArr.filter(x => x.completadoEn === null);
        if (completadas) {
            arrFiltro = this.listadoArr.filter(x => x.completadoEn !== null);
        }

        arrFiltro.forEach((tarea, index) => {
            index = `${index + 1}.`.green;
            const { desc, completadoEn } = tarea;
            const estado = (completadas) ? `${completadoEn}`.green : 'Pendiente'.yellow;
            console.log(`${index} ${desc} :: ${estado} `);
            return;
        });
    }


}





export { Tareas };
