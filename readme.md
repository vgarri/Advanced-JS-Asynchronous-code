![logotipo de The Bridge](https://user-images.githubusercontent.com/27650532/77754601-e8365180-702b-11ea-8bed-5bc14a43f869.png  "logotipo de The Bridge")

# :european_castle: :crossed_swords: Bikram #

## Introducción ##
Un bikram es una combinación de ejercicios de programación para perfeccionar la conexión entre el programador interior que llevas dentro y el alma del lenguaje de programación. Aprovecha los checkboxes en el enunciado para ir marcando que ejercicios llevas realizados.

Estas pruebas cubren un espectro de dificultad incremental, dotada de tests que cubrirán la correcta resolución para ayudarte a encontrar posibles errores en tu código.

La soluciones a los bikrams deberán hacerse en **./index.js** y tienen que subirse a GitHub, además, deberá incluirse una captura de pantalla de los tests.

En esta ocasión, el bikram se dividirá en :crossed_swords: Pair Programming :crossed_swords: y :european_castle: proyecto individual :european_castle:

## Iteraciones :crossed_swords: Pair Programming :crossed_swords: ##

(Abre index.html para ver el resultado de los tests)

### Dog API - Quiero un perrito, pero no se qué raza escoger, ¿me ayudas? ###

- [ ] 1.- Declara una funcion **getAllBreeds** que devuelva todas las razas de perro.

- [ ] 2.- Declara una función **getRandomDog** que obtenga una imagen random de una raza.

- [ ] 3.- Declara una función **getAllImagesForBreed** que obtenga todas las imágenes de una raza.

- [ ] 4.- Declara una funcion **getAllImagesForBreed2** que devuelva las imágenes de la raza pasada por el argumento

### GitHub API (I) - ¿Quieres saber mi información? Aquí la tienes ###

- [ ] 5.- Declarara una función **getGitHubUserProfile** que obtenga el perfil de usuario de github a partir de su nombre de usuario. (https://api.github.com/users/{username}).

- [ ] 6.- Declara una función **printGithubUserProfile** que reciba como argumento el nombre de un usuario (username), retorne {img, name} y pinte la foto y el nombre en el DOM.

- [ ] 7.- Crea un input de tipo texto, y un botón buscar. El usuario escribirá en el input el nombre de usuario de GitHub que quiera buscar. Después crearemos una función **getAndPrintGitHubUserProfile** que se ejecute cuando se pulse el botón buscar y que contenga una petición a la API para obtener información de ese usuario y así mostrarla en nuestra página. 
Deberá imprimir por consola el nombre del usuario, su número de repos y su imagen avatar, y se deberán mostrar en el DOM.

### GitHub API (II)- Promesas, promesas y más promesas ###

- [ ] 8.- Dada una lista de usuarios de github guardada en una array, utiliza 'https://api.github.com/users/${name}' para obtener el nombre de cada usuario. \
Objetivo: Usar Promise.all()\
Recordatorio: Una llamada a fetch() devuelve un objeto promesa.\
Pregunta. ¿cuántas promesas tendremos?

Hasta que no se resuelvan todas las promesas desencadenadas por cada fetch(), no se cargarán los datos.

Pasos:

- Mapear el array y hacer un fetch() para cada usuario. Esto nos de vuelve un array lleno de promesas.
- Con Promise.all() harás que se tenga que resolver todo el proceso de peticiones a GitHub a la vez.
- Cuando Promise.all() haya terminado:
Consigue que se imprima por consola la url del repositorio de cada usuario.
Consigue que se imprima por consola el nombre de cada usuario.