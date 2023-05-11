async function getAllBreeds() {
    return fetch("https://dog.ceo/api/breeds/list/all")
        .then(response => response.json())
        .then(data => Object.keys(data.message))

};

async function getRandomDog() {
    return fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => data.message)
}

async function getAllImagesByBreed() {
    return fetch(`https://dog.ceo/api/breed/komondor/images`)
        .then(response => response.json())
        .then(data => data.message);
}

async function getAllImagesByBreed2(breed) {
    return fetch(`https://dog.ceo/api/breed/${breed}/images`)
        .then(response => response.json())
        .then(data => data.message);
}

console.log(getAllBreeds().then((data) => console.log(data)));
console.log(getRandomDog().then((data) => console.log(data)));
console.log(getAllImagesByBreed().then((data) => console.log(data)));
console.log(getAllImagesByBreed2("komondor").then((data) => console.log(data)));



// 5. Función para obtener el perfil de un usuario en GitHub
async function getGitHubUserProfile(username) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    console.log(data);
    return data;
}

// 6.- Funcion para pintar información de un usuario en el DOM

async function printGithubUserProfile(username) {
    try {
        let response = await fetch(`https://api.github.com/users/${username}`);
        let data = await response.json();

        // Crear un nuevo elemento de imagen
        let img = document.createElement('img');
        img.src = data.avatar_url;
        img.alt = `Imagen de perfil de ${data.name}`;

        // Crear un nuevo elemento de nombre
        let h1 = document.createElement('h1');
        h1.innerText = data.name;
        const name = h1.innerText

        // Añadir los elementos al cuerpo del documento
        document.body.appendChild(img);
        document.body.appendChild(h1);


        return { img, name };
    } catch (error) {
        console.error('Error:', error);
    }
}


// 7. Función que se ejecutará cuando se pulse el botón de búsqueda
async function getAndPrintGitHubUserProfile(username) {

    const userProfile = await getGitHubUserProfile(username);
    console.log(userProfile);

    return `<section>
    <img src="${userProfile.avatar_url}" alt="${userProfile.name}">
    <h1>${userProfile.name}</h1>
    <p>Public repos: ${userProfile.public_repos}</p>
</section>`

};




// 8. Función de busqueda de multiples perfiles

async function fetchGithubUsers(usernames) {
    // usernames = ['DanielMiguelez', 'javierespinosap', 'alejandroereyesb']
    const requests = usernames.map(username =>
        fetch(`https://api.github.com/users/${username}`)
            .then(response => response.json())
    );

    return Promise.all(requests)
        .then(users => {
            users.forEach(user => {
                console.log(`Nombre: ${user.name}, URL del repositorio: ${user.html_url.toLowerCase()}`);
            });
            return users;
        })
        .catch(error => console.error(`Error en fetchGithubUsers: ${error}`));
}



async function getGitHubUserProfile(username) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    console.log(data);
    return data;
}


