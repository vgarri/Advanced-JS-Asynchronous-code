


let randomize = (maxNum = 177, min = 0) => {
    return (Math.floor(Math.random() * maxNum) + min);
}

let generateArray = (elementos = randomize(), min = 0, max = randomize()) => {
    let array = [];
    for (let i = 0; i < elementos; i++) {
        array.push(randomize(max) - min);
    }
    return (array);
}

let printArray = (array) => {
    return ("[" + array.map(element => element).join(", ") + "]");
}

let randomizeArrayOrder = (array) => {
    let rndArray = generateArray(array.length);
    for (let i = 0; i < array.length; i++) {
        if (rndArray[i] < rndArray[i + 1]) {
            let temp = rndArray[i];
            rndArray[i] = rndArray[i + 1];
            rndArray[i + 1] = temp;
            temp = array[i];
            array[i] = array[i + 1];
            array[i + 1] = temp;
        }
    }
    return (array);
}

// describe("The new DIV element", function() {
//     beforeAll(function() {
//       //DOMCustomMatchers is the global window object got from dom-matchers.js
//       jasmine.addMatchers(DOMCustomMatchers);    
//       this.newDiv = document.createElement('DIV');
//     });
//     it("should be empty.", function() {
//       expect(this.newDiv).toBeEmpty();    //do the magic with new DOM matchers
//     });
//   })

// beforeEach(function (done) {
//     setTimeout(function () {
//         done();
//     }, 1000)
// })





describe('Ejercicios asincronía', function () {
    describe('Ejercicio 1', function () {

        describe('a) Declara una funcion getAllBreeds que devuelva todas las razas de perro', function () {
            it('La función devuelve todas las razas de perro', async function () {
                expect((await getAllBreeds()).length).toEqual(98);
                expect(await getAllBreeds()).toContain('affenpinscher', 'african', 'airedale', 'akita', 'appenzeller', 'australian', 'basenji', 'beagle', 'bluetick', 'borzoi', 'bouvier', 'boxer', 'brabancon', 'briard', 'buhund', 'bulldog', 'bullterrier', 'cattledog', 'chihuahua', 'chow', 'clumber', 'cockapoo', 'collie', 'coonhound', 'corgi', 'cotondetulear', 'dachshund', 'dalmatian', 'dane', 'deerhound', 'dhole', 'dingo', 'doberman', 'elkhound', 'entlebucher', 'eskimo', 'finnish', 'frise', 'germanshepherd', 'greyhound', 'groenendael', 'havanese', 'hound', 'husky', 'keeshond', 'kelpie', 'komondor', 'kuvasz', 'labradoodle', 'labrador', 'leonberg', 'lhasa', 'malamute', 'malinois', 'maltese', 'mastiff', 'mexicanhairless', 'mix', 'mountain', 'newfoundland', 'otterhound', 'ovcharka', 'papillon', 'pekinese', 'pembroke', 'pinscher', 'pitbull', 'pointer', 'pomeranian', 'poodle', 'pug', 'puggle', 'pyrenees', 'redbone', 'retriever', 'ridgeback', 'rottweiler', 'saluki', 'samoyed', 'schipperke', 'schnauzer', 'segugio', 'setter', 'sharpei', 'sheepdog', 'shiba', 'shihtzu', 'spaniel', 'spitz', 'springer', 'stbernard', 'terrier', 'tervuren', 'vizsla', 'waterdog', 'weimaraner', 'whippet', 'wolfhound')
            })


        })

        describe('b)  Obten una imagen random de una raza', function () {
            it('La función devuelve una imagen de un perro ', async function () {
                expect(await getRandomDog()).toContain("https://images.dog.ceo/breeds")
                expect(await getRandomDog()).toContain(".jpg");

                //how do I know it is random??
            })
        })
        describe('c) Obten todas las imágenes de una raza ', function () {
            it('La función devuelve todas las fotos de una raza', async function () {
                await expect(await getAllImagesForBreed("komondor")).toContain("https://images.dog.ceo/breeds/komondor/n02105505_4143.jpg", "https://images.dog.ceo/breeds/komondor/n02105505_4260.jpg")


            })
            /*     it('La función devuelve error para una raza que no existe', async function () {
                    await expect((async () => { return await getAllImagesForBreed("Dsevr$34").catch((error) => error) })().toEqual('Breed not found (master breed does not exist)'))
                }) */
        })
        describe('d) Obten las imagenes de una raza pasada como argumento a la función', function () {
            it('La función devuelve todas las fotos de una raza pasada como argumento', async function () {
                await expect(await getAllImagesForBreed2("komondor")).toContain("https://images.dog.ceo/breeds/komondor/n02105505_4143.jpg", "https://images.dog.ceo/breeds/komondor/n02105505_4260.jpg")
            })
        })
    })

    describe('Ejercicio 2 - API gitHub', function () {
        it('La función busca usuarios correctamente en la API de gitHub', async function () {
            const userProfile = await getGitHubUserProfile('alenriquez96');
            expect(userProfile.name).toEqual('Alberto Enríquez');
        });
    
        it('La función pinta la info del usuario', async function () {
            const response = await printGithubUserProfile('alenriquez96');
            expect(response.img.src).toContain('https://avatars.githubusercontent.com/u/');
            expect(response.name).toEqual('Alberto Enríquez');
        });
    
        // it('la funcion devuelve la info del usuario', async function () {
        //     const response = await getAndPrintGitHubUserProfile('alenriquez96');
        //     expect(response.img.src).toContain('https://avatars.githubusercontent.com/u/');
        //     expect(response.name).toEqual('Alberto Enríquez');
        //     expect(response.repos).toEqual(59)
        // })
    });
    
    
    describe('Ejercicio 3 - Promesas, promesas y más promesas', function () {
        it('La función devuelve un array con la url y el nombre de cada usuario', function (done) {
            const userNames = ['octocat', 'alenriquez96', 'alejandroereyesb'];
            const realNames = ['The Octocat', 'Alberto Enríquez', 'Alejandro Reyes']
            const expectedUsers = userNames.map((username, i) => ({
                name: `${realNames[i]}`,
                url: `https://github.com/${username}`,
            }));
    
            fetchGithubUsers(userNames).then(actualUsers => {
                expect(Array.isArray(actualUsers)).toBe(true);
                expect(actualUsers.length).toBeGreaterThan(0);
    
                actualUsers.forEach((user, i) => {
                    expect(user.name).toBe(expectedUsers[i].name);
                    expect(user.html_url.toLowerCase()).toBe(expectedUsers[i].url);
                });
    
                done();
            });
        });
    });


})








