const Employee = require('../lib/Employee');

class Manager extends Employee {
    constructor (name, id, email, officeNum){
    super(name, id, email);
    this.officeNum = officeNum;
}
    role(){
        return 'Manager';
    }
    getOfficeNum(){
        return this.officeNum;
    }
}

module.exports = Manager;