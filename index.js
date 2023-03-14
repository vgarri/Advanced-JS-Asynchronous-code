//1


function getAllBreeds() {
    return fetch("https://dog.ceo/api/breeds/list/all")
        .then(response => response.json())
        .then(data => Object.keys(data.message))

};

function getRandomDog() {
    return fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => data.message)
}

function getAllImagesForBreed(breed) {
    return fetch(`https://dog.ceo/api/breed/${breed}/images`)
        .then(response => response.json())
        .then(data => data.message);
}

console.log(getAllBreeds().then((data) => console.log(data)));
console.log(getRandomDog().then((data) => console.log(data)));
console.log(getAllImagesForBreed("komondor").then((data) => console.log(data)));



function getGitHubUserProfile(username) {
    return fetch(`https://api.github.com/users/${username}`)
        .then(response => response.json())
        .then(data => data)

}




