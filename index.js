//1


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

// 6. Función que se ejecutará cuando se pulse el botón de búsqueda
async function getAndPrintGitHubUserProfile() {
    const input = document.querySelector('input[type="text"]');
    const button = document.querySelector('button');

    button.addEventListener('click', async () => {
        const username = input.value;
        const userProfile = await getGitHubUserProfile(username);
        console.log(userProfile.name);
        console.log(userProfile.public_repos);
        console.log(userProfile.avatar_url);
        
        // Mostrar en el HTML
        const img = document.createElement('img');
        img.src = userProfile.avatar_url;
        document.body.appendChild(img);

        const name = document.createElement('p');
        name.textContent = userProfile.name;
        document.body.appendChild(name);

        const repos = document.createElement('p');
        repos.textContent = `Number of repos: ${userProfile.public_repos}`;
        document.body.appendChild(repos);
    });
}



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







