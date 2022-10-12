const Manager = require('../lib/Manager');

describe('initialization', ()=>{
    it('Established Manager office number with provided argument from constructor', ()=>{
        const officeNum = 111;
        const manager = new Manager('Emily', 1, 'emily@test.com', officeNum);
        expect(manager.officeNum).toBe(officeNum);
    });
    describe('receives information', ()=>{
        it('returns manager when called with getRole()function call', ()=> {
            const role = 'Manager';
            const manager = new Manager('Emily', 1, 'emily@test.com', 111);
            expect(manager.getRole()).toBe(role);
        });
    
    })
})