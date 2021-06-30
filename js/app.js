import * as UI from './interfaz.js';
import API from './api.js'
UI.formularioBuscar.addEventListener('submit',buscarCancion)

function buscarCancion(e)
{
    e.preventDefault();
    //obtenmer datos del formulario
    const artista=document.querySelector('#artista').value;
    const cancion=document.querySelector('#cancion').value;
    //validaciones
    if(artista===''||cancion==='')
    {
        console.log('ambos campos son necesario')
        UI.DivMensajes.textContent='Todos los campos son necesarios'
        UI.DivMensajes.classList.add('error');
        setTimeout(() => {
            UI.DivMensajes.textContent='';
            UI.DivMensajes.classList.remove('error')
        }, 3000);
        return;
    }

    const busqueda= new API(artista,cancion)
    busqueda. consultarApi();
}