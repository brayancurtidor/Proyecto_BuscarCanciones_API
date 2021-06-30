import * as UI from './interfaz.js';
class API{
    constructor(artista,cancion){
        this.artista=artista;
        this.cancion=cancion;
    }
    consultarApi(){
        const urls= `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;
        fetch(urls)
        .then(respuesta=>respuesta.json())
        .then(datos=>{
            if(datos.lyric)
            {
                const {lyric}=datos;
                UI.DivResultado.textContent=lyric;
                UI.HedinResultado.textContent=`Letra de la cancion: ${this.cancion} de ${this.artista}`
            }else
            {
                UI.DivMensajes.textContent='La cancion no existe'
                UI.DivMensajes.classList.add('error');
                setTimeout(() => {
                    UI.DivMensajes.textContent='';
                    UI.DivMensajes.classList.remove('error')
                }, 3000);

            }

            
        })
       
    }
}

export default API;