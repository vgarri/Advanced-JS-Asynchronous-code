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

async function getAllImagesForBreed() {
    return fetch(`https://dog.ceo/api/breed/komondor/images`)
        .then(response => response.json())
        .then(data => data.message);
}

async function getAllImagesForBreed2(breed) {
    return fetch(`https://dog.ceo/api/breed/${breed}/images`)
        .then(response => response.json())
        .then(data => data.message);
}

console.log(getAllBreeds().then((data) => console.log(data)));
console.log(getRandomDog().then((data) => console.log(data)));
console.log(getAllImagesForBreed().then((data) => console.log(data)));
console.log(getAllImagesForBreed2("komondor").then((data) => console.log(data)));



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


        return {img, name};
    } catch (error) {
        console.error('Error:', error);
    }
}


// 7. Función que se ejecutará cuando se pulse el botón de búsqueda
async function getAndPrintGitHubUserProfile(username) {
    const input = document.querySelector('input[type="text"]');
    const button = document.querySelector('button');
    let name = ''
    let img = ''
    let repos = ''

    button.addEventListener('click', async () => {
        const username = input.value;
        const userProfile = await getGitHubUserProfile(username);
        console.log(userProfile.name);
        console.log(userProfile.public_repos);
        console.log(userProfile.avatar_url);
        
        // Mostrar en el HTML
        img = document.createElement('img');
        img.src = userProfile.avatar_url;
        document.body.appendChild(img);

        name = document.createElement('p');
        name.textContent = userProfile.name;
        document.body.appendChild(name);

        repos = document.createElement('p');
        repos.textContent = `Number of repos: ${userProfile.public_repos}`;
        document.body.appendChild(repos);

    });
    return {name, img, repos}

}


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




