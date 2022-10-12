const Employee = require('../lib/Employee');

describe('initialization', ()=> {
    it('Verifies a new employee will be an object', ()=>{
        const employee = new Employee();
        expect(typeof employee).toBe('object');
    });

    it('Confirms employee name from provided argument', ()=>{
        const name = 'Emily'
        const employee = new Employee(name);
        expect(employee.name).toBe(name);
    });
    it('Confirms emplyee ID from provided argument', ()=>{
        const id = 1;
        const employee = new Employee('Emily', id);
        expect(employee.id).toBe(id);
    })
    it('Confirms employee email from provided argument', ()=>{
        const email = 'emily@test.com';
        const employee = new Employee('Emily', 1, email);
        expect(employee.email).toBe(email);
    });
})