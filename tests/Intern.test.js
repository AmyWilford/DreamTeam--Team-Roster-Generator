const Intern = require('../lib/Intern');

describe('initialization', ()=> {
    it('Establishes intern school with provided argument via constructor', ()=>{
        const school = 'University of Toronto';
        const intern = new Intern('Emily', 01, 'emily@test.com', school);
        expect(intern.school).toBe(school);
    });
    it('returns intern when called with role() function', ()=>{
        const role = 'Intern';
        const intern = new Intern('Emily', 01, 'emily@test.com', 'University of Toronto');
        expect(intern.role()).toBe(role);

    });
})