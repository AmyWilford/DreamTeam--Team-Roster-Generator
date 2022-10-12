const Manager = require('../lib/Manager');

describe('initialization', ()=>{
    it('Established Manager office number with provided argument from constructor', ()=>{
        const officeNum = 111;
        const manager = new Manager('Emily', 1, 'emily@test.com', officeNum);
        expect(manager.officeNum).toBe(officeNum);
    });
})