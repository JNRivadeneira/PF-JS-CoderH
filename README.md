![Imagen Portada](https://github.com/JNRivadeneira/PF-JS-CoderH/blob/f54ee064ac0fc0f914ebc92ca26dae70c8e8c0ce/img/readme01.png)
> PF-JS-CoderH: Proyecto final de curso de JavaScript de CoderHouse.
*Autor/alumno: Jorge Rivadeneira - Comisión: 51170*
# SALTAPALABRA

## Descripción del proyecto
Se trata de un juego interactivo donde el jugador deberá acertar la mayor cantidad de palabras en un tiempo determinado.

## Juego

### Menú principal
- Nueva Partida
- Top 10

`Nueva Partida` inicia solicitando el nombre del jugador mediante un prompt, y comienza el juego dando paso al Rosco.

`Top 10` muestra el ranking de jugadores ordenados por puntaje, de mayor a menor.

### Rosco
El rosco consta de 26 letras. Dentro de él se encuentra una pista que indica si la palabra a adivinar comienza con esa letra, o si forma parte de ella. También se muestra una breve definición de la palabra, obtenida del diccionario español -*atención a los acentos*- 😉  

Más abajo se encuentra el input donde el jugador deberá ingresar su respuesta.
Una vez ingresada, el jugador deberá proceder a chequear su respuesta haciendo click en el botón `Check` (o presionando la tecla `Enter`). Si es correcta, la letra del rosco correspondiente se pintará de verde, mietras que si es incorrecta lo hará de rojo.

Para continuar con la siguiente palabra, el jugador deberá hacer click en el botón `SaltaPalabra` o presionar la tecla `Espacio`. Y así hasta finalizar.
>El jugador puede pasar a la siguiente palabra, aún sin contestarla, y volver a ella luego.

Si el jugador desease finalizar el juego sin esperar a que se acabe el tiempo, simplemente deberá hacer click en el `Reloj`. Luego de ello, su marcador se guardará y será agregado al ranking.

