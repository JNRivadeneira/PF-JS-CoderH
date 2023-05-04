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

`Nueva Partida` inicia solicitando el nombre del jugador, y comienza el juego dando paso al Rosco.

`Ranking` muestra el ranking de jugadores ordenados por puntaje, de mayor a menor.

### Rosco
El jugador contará con 300 segundos para resolver el rosco. Este consta de 26 letras. Dentro de él se encuentra una pista que indica si la palabra a adivinar comienza con esa letra, o si forma parte de ella. También se muestra una breve definición de la palabra, obtenida del diccionario español -*atención a los acentos*- 😉  

Más abajo se encuentra el input donde el jugador deberá ingresar su respuesta.
Una vez ingresada, el jugador deberá proceder a chequear su respuesta haciendo click en el botón `Check` (o presionando la tecla `Enter`). Si es correcta, su letra se pintará de verde, mietras que si es incorrecta lo hará de rojo. Inmediatamente se presentará la pista y deficinión de la próxima palabra.

En caso de querer pasar a la siguiente palabra, dejando su respuesta sin contestar, el jugador deberá hacer click en el botón `SaltaPalabra` (o presionar la tecla `Espacio`). Más tarde podrá volver a ella, si aún le resta tiempo en el reloj.

>El jugador puede pasar a la siguiente palabra, aún sin contestarla, y volver a ella luego.

Si el jugador desease finalizar el juego sin tener que esperar a que se acabe el tiempo, simplemente deberá hacer click en el `Reloj`. Luego de ello, su marcador se guardará y será agregado al ranking.

