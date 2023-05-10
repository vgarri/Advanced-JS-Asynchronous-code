// it('La función pinta la info del usuario', async function () {
//     const response = await printGithubUserProfile('alenriquez96');

//     expect(response.img.src).toContain('https://avatars.githubusercontent.com/u/');
//     expect(response.name).toEqual('Alberto Enríquez');
// });

// it('la funcion devuelve la info del usuario', async function () {
//     const response = await getAndPrintGitHubUserProfile('alenriquez96');
//     expect(response.img.src).toContain('https://avatars.githubusercontent.com/u/');
//     expect(response.name).toEqual('Alberto Enríquez');
//     expect(response.repos).toEqual(59)
// })


// describe('GitHub User Profile', () => {
//     describe('getGitHubUserProfile', () => {
//         it('should return a user profile from GitHub', async () => {
//             const username = 'octocat';
//             const userProfile = await getGitHubUserProfile(username);

//             expect(userProfile.name).toEqual('The Octocat');
//             // Adicionalmente puedes agregar más expectaciones para los repos y el avatar_url si quieres
//         });
//     });

//     describe('displayUserProfile', () => {
//         it('should display a user profile on the DOM', () => {
//             const userProfile = {
//                 name: 'The Octocat',
//                 public_repos: 10,
//                 avatar_url: 'https://avatars.githubusercontent.com/u/583231?v=4'
//             };
//             const display = displayUserProfile(userProfile);

//             expect(display.name.textContent).toEqual(userProfile.name);
//             expect(display.img.src).toEqual(userProfile.avatar_url);
//             expect(display.repos.textContent).toContain(userProfile.public_repos);
//         });
//     });
// });







