import inquirer from 'inquirer';

import colors from 'colors';

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Que desea hacer?',
        choices: [
            {
                value: '1',
                name: '1. Crear tarea'
            },
            {
                value: '2',
                name: '2. Listar tareas'
            },
            {
                value: '3',
                name: '3. Listar tareas completadas'
            }
            ,
            {
                value: '4',
                name: '4. Listar tareas pendientes'
            }
            ,
            {
                value: '5',
                name: '5. Completar tarea(s)'
            }
            ,
            {
                value: '6',
                name: '6. Borrar tarea'
            },
            {
                value: '7',
                name: '7. Salir'
            }
        ]

    }

];




const inquirerMenu = async () => {

    console.log('============================='.green);
    console.log('    Seleccione una opción    '.green);
    console.log('=============================\n'.green);

    const { opcion } = await inquirer.prompt(preguntas);
    return opcion;
};

const pausa = async () => {

    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${'ENTER'.blue} para continuar`
        }
    ];
    console.log('\n');
    await inquirer.prompt(question);


};


export { inquirerMenu, pausa };

// module.exports = {
//     inquirerMenu
// };