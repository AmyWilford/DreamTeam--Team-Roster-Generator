const Engineer = require('../lib/Engineer');

describe('initialization', ()=> {
    it('Establishes engineer github account with provided argument via constructor', () =>{
        const githubUser = 'username';
        const engineer = new Engineer ('Emily', 1, 'emily@test.com', githubUser);
        expect(engineer.github).toBe(githubUser);
    });
})