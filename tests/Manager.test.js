const Manager = require('../lib/Manager');

describe('initialization', ()=>{
    it('Established Manager office number with provided argument from constructor', ()=>{
        const officeNum = 111;
        const manager = new Manager('Emily', 01, 'emily@test.com', officeNum);
        expect(manager.officeNum).toBe(officeNum);
    });
    it('returns manager when called with role()function', ()=> {
        const role = 'Manager';
        const manager = new Manager('Emily', 01, 'emily@test.com', 111);
        expect(manager.role()).toBe(role);
    });
})