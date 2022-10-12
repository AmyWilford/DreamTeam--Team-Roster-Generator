const Intern = require('../lib/Intern');

describe('initialization', ()=> {
    it('Establishes intern school with provided argument via constructor', ()=>{
        const school = 'University of Toronto';
        const intern = new Intern('Emily', 1, 'emily@test.com', school);
        expect(intern.school).toBe(school);
    });
})