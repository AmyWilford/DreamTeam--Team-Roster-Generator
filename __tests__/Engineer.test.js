const Engineer = require('../lib/Engineer');

describe('initialization', ()=> {
    it('Establishes engineer github account with provided argument via constructor', () =>{
        const githubUser = 'username';
        const engineer = new Engineer ('Emily', 1, 'emily@test.com', githubUser);
        expect(engineer.github).toBe(githubUser);
    });
    it('returns engineer when called with getRole() function', ()=>{
        const role = 'Engineer';
        const engineer = new Engineer('Emily', 1, 'emily@test.com', 'username');
        expect(engineer.getRole()).toBe(role);
    });
    it('returns github username with getGitHub() function call', ()=>{
        const githubUser = 'username';
        const engineer = new Engineer ('Emily', 1, 'emily@test.com', githubUser);
        expect(engineer.getGitHub()).toBe(githubUser);
    })
})