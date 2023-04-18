> PF-JS-CoderH: Proyecto final de curso de JavaScript de Coder House.
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
El rosco consta de 26 letras. Dentro de él se encuentra una pista que indica si la palabra a adivinar comienza con esa letra, o si forma parte de ella. También se muestra una breve definición de la palabra, obtenida del diccionario español.
Más abajo se encuentra el input donde el jugador debe ingresar su respuesta.
Una vez ingresada, el jugador debe proceder a chequear su respuesta haciendo click en el botón `Check`. Si es correcta, la letra del rosco correspondiente se pintará de verde, mietras que si es incorrecta lo hará de rojo.
Para continuar con la siguiente palabra, el jugador debe hacer click en el botón `Siguiente`. Y así hasta finalizar.
>El jugador puede pasar a la siguiente palabra, aún sin contestarla, y volver a ella luego.

Cuando el jugador desee finalizar el juego, simplemente debe hacer click en `Fin Juego`. Luego de ello, su marcador se guarda y será agregado al top 10, si lo amerita.

