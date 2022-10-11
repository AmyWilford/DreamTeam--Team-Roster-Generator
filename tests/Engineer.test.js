const Engineer = require('../lib/Engineer');

describe('initialization', ()=> {
    it('Establishes engineer github account with provided argument via constructor', () =>{
        const githubUser = 'username';
        const engineer = new Engineer ('Emily', 01, 'emily@test.com', githubUser);
        expect(engineer.githubUser).toBe(githubUser);
    });
    it('returns engineer when called with role() function', ()=>{
        const role = 'Engineer';
        const engineer = new Engineer('Emily', 01, 'emily@test.com', 'username');
        engineer.role().toBe(role);
    });
})