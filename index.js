const inquirer = require('inquirer');
const fs = require('fs');
const generateTeam = require('./src/generateTeam');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// employee questions
const questions = [
    {
        type: 'input', 
        message: 'Enter your name',
        name: 'name',
        validate: function(name)
        {
            if(!name){
                console.log('\x1b[31m%s\x1b[0m', 'please enter your name')
                return false;
            }
            return true;
        }
    }, 
    {
        type: 'input', 
        message: 'Enter your employee ID',
        name: 'id',
        validate: function(id)
        {
            if(!id){
                console.log('\x1b[31m%s\x1b[0m', 'please enter a valid employee ID')
                return false;
            }
            return true;
        }
    }, 
    {
        type: 'input', 
        message: 'Enter your email address',
        name: 'email',
        validate: function(email)
        {
            if(!email){
                console.log('\x1b[31m%s\x1b[0m', 'please enter an email address')
                return false;
            }
            return true;
        }
    }, 
    {
        type: 'list', 
        message:'What is your company role?',
        name:'role',
        choices: ['Engineer', 'Intern', 'Manager']
    },
    {
        type: 'list', 
        message:'Would you like to add anyone to your team? If no, select "Finish Building Team"',
        name:'team',
        choices: ['Engineer', 'Intern', 'Finish Building Team']
    },
]

if(answers.role === 'Manager') {
    
}

function init(){
    inquirer.prompt(questions)
    .then(function(response) {
        console.log(response)
    })
}
init();