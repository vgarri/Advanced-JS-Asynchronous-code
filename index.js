//RESUELVE TUS EJERCICIOS AQUI
/* Utiliza la API (https://dog.ceo/dog-api/) para resolver estos ejercicios.

- [ ] 1.- Declara una funcion **getAllBreeds** que devuelva un array 
de strings con todas las razas de perro.*/
//postman hace una peticion GET http a un servidor, no hace el fetch
function getAllBreeds() {
    let breeds = fetch("https://dog.ceo/api/breeds/list/all")
        .then(res => res.json())//convierte en objeto js la respuesta de internet en json, interpreta los datos recibidos
        .then(data => Object.keys(data.message));
    return breeds;
}

//- [ ] 2.- Declara una función **getRandomDog** que obtenga una imagen random de una raza.
function getRandomDog() {
    let random = fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(data => JSON.stringify(data.message));
    return random;
}

//- [ ] 3.- Declara una función **getAllImagesByBreed** que obtenga todas las imágenes de la raza komondor.
function getAllImagesByBreed() {
    let imagesByBreed = fetch("https://dog.ceo/api/breed/komondor/images")
        .then(res => res.json())
        .then(data => JSON.stringify(data.message))
    return imagesByBreed;

}
// - [ ] 4.- Declara una funcion **getAllImagesByBreed2(breed)** que devuelva las imágenes de la raza pasada por el argumento
// usamos template string para modificar el http y hacer el fetch como el ejercicio anterior.
function getAllImagesByBreed2(breed) {
    let imagesByBreed2 = fetch(`https://dog.ceo/api/breed/${breed}/images`)
        .then(res => res.json())
        .then(data => JSON.stringify(data.message))
    return imagesByBreed2;
}
// - [ ] 5.- Declarara una función **getGitHubUserProfile(username)** que obtenga el perfil 
//de usuario de github a partir de su nombre de usuario. (https://api.github.com/users/{username}).
function getGitHubUserProfile(username) {

    let userProfile = fetch(`https://api.github.com/users/${username}`) //
        .then(res => res.json())
        .then(data => data)

    return userProfile;
}
getGitHubUserProfile('alenriquez96');
// - [ ] 6.- Declara una función **printGithubUserProfile(username)** que reciba como argumento el nombre de un 
//usuario (username), retorne {img, name} y pinte la foto y el nombre en el DOM.
function printGithubUserProfile(username) {

    let response = fetch(`https://api.github.com/users/${username}`)
        .then(res => res.json())
        .then(data => {
            let img = data.avatar_url;
            let name = data.name;
            return { img, name }
        })
    return response
}
//aqui se llama a la funcion
printGithubUserProfile('alenriquez96').then(response => {

    const imagen = document.createElement("img");
    imagen.src = response.img;
    imagen.alt = `Avatar de ${response.name}`
    const lista = document.createElement('li');
    lista.textContent = `${response.name}`;
    document.body.appendChild(lista);
    document.body.appendChild(imagen);

});
//- [ ] 7. Crea una función **getAndPrintGitHubUserProfile(username)** que contenga una petición a la API para obtener información de ese usuario y devuelva un 
//string que represente una tarjeta HTML como en el ejemplo, la estructura debe ser exactamente la misma:
function getAndPrintGitHubUserProfile(username) {
    let perfil = fetch(`https://api.github.com/users/${username}`)
        .then(res => res.json())
        .then(data => {
            let section = document.createElement("section");
            let img = document.createElement("img")
            img.setAttribute('src', data.avatar_url)
            img.setAttribute('alt', `imagen de ${data.name}`);
            let h1 = document.createElement('h1');
            h1.textContent = data.name;

            let p = document.createElement('p');
            p.textContent = `Public repos: (${data.public_repos})`

            document.body.appendChild(section);
            section.appendChild(img);
            section.appendChild(h1);
            section.appendChild(p);

            return `
                <section>
                    <img src="${data.avatar_url}" alt="${data.name}">
                    <h1>${data.name}</h1>
                    <p>Public repos: ${data.public_repos}</p>
                </section>
            `

        })
        .catch(err => console.log("MENSAJE DE ERROR: " + err.message));

    return perfil;
}




// /* ```html
// <section>
//     <img src="url de imagen" alt="imagen de usuario">
//     <h1>Nombre de usuario</h1>
//     <p>Public repos: (número de repos)</p>
// </section>
// ``` */



//Ejercicio 9 usar Promise.all
/*  9.- Dada una lista de usuarios de github guardada en una array,crea una funcion 
fetchGithubUsers(userNames) que utilice 'https://api.github.com/users/${name}' para obtener el nombre de cada usuario.
Objetivo: Usar Promise.all()
Recordatorio: Una llamada a fetch() devuelve un objeto promesa.
Pregunta. ¿cuántas promesas tendremos?
Hasta que no se resuelvan todas las promesas desencadenadas por cada fetch(), no se cargarán los datos.

Pasos:

Mapear el array y hacer un fetch() para cada usuario. Esto nos de vuelve un array lleno de promesas.
Con Promise.all() harás que se tenga que resolver todo el proceso de peticiones a GitHub a la vez.
Cuando Promise.all() haya terminado: Consigue que se imprima por consola la url del 
repositorio de cada usuario. Consigue que se imprima por consola el nombre de cada usuario.   */

// let userNames = ['octocat', 'alenriquez96', 'alejandroreyesb'];

// function fetchGithubUsers() {
//     let user = userNames.map(nombre => fetch(`'https://api.github.com/users/${nombre}'`)
//                                         .then(res => res.json()));
//     let respuesta = Promise.all(user)
//         .then(res=> res.json())
//         .then((data => {
//            let name = data.name;
//             let url = data.url
//             return {name, url}
//         }))
//         console.log(respuesta);
//         return respuesta

// };

// fetchGithubUsers();

function fetchGithubUsers(userNames) {
    Promise.all(
        userNames.map(nombre => fetch(`https://api.github.com/users/${nombre}`).then(res => res.json()))
    ).then(data => {
        for (let i = 0; i < data.length; i++) {
            return data[i].name
        }
    })
}