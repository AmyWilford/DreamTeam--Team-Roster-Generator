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
    })
    describe('receive information', ()=>{
        it('retrieves current employee name with getName() function call', ()=>{
            const name = 'Emily';
            const employee = new Employee('Emily');
            expect(employee.getName()).toBe(name);
        });
        it('retrieves current employee id with getId() function call', ()=>{
            const id = 1;
            const employee = new Employee('Emily', id);
            expect(employee.getId()).toBe(id);
        });
        it('retrieves current employee email with getEmail() function call', ()=>{
            const email = 'emily@test.com';
            const employee = new Employee('Emily', 1, email);
            expect(employee.getEmail()).toBe(email);
        })
    })
})