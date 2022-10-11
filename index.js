const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

let starterHTML= 
`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <title>Your Team</title>
</head>
<body>
    <div class="jumbotron bg-warning text-center display-3 text-uppercase font-weight-bold">The Team</div>
    <div class="d-flex flex-wrap">`

// employee questions
const questions = [
    {
        type: 'input', 
        message: 'Enter Manager name',
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
        type: 'input', 
        message: 'Enter your office number',
        name: 'officeNum',
        validate: function(officeNum)
        {
            if(!officeNum){
                console.log('\x1b[31m%s\x1b[0m', 'please enter an office Number')
                return false;
            }
            return true;
        }
    }, 
]
function otherQuestion(){
    inquirer.prompt([
        {
            type: 'list', 
            message:'Would you like to add anyone to your team? If no, select "Finish Building Team"',
            name:'team',
            choices: ['Engineer', 'Intern', 'Finish Building Team']
        },
    ])
    .then(function(response){
        console.log(response.team)
        if(response.team ==='Engineer'){
            newEngineer();
        //} else if(response.choices === 'Intern'){
            //newIntern();
        } else {
            starterHTML+=`
             </div>
            </div>
        </body>
        </html>`
            writeHTMLFile('./dist/yourteam.html', starterHTML);
        }
    })
}

function newEngineer(){
    inquirer.prompt([
        {
        type: 'input', 
        message: 'Enter Team Engineer Name',
        name: 'name',
        validate: function(name)
        {
            if(!name){
                console.log('\x1b[31m%s\x1b[0m', 'please enter engineer name')
                return false;
            }
            return true;
        }
    }, 
    {
        type: 'input', 
        message: 'Enter Team Engineer ID',
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
        message: 'Enter Team Engineer email address',
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
        type: 'input', 
        message: 'Enter Team Engineer github username',
        name: 'username',
        validate: function(username)
        {
            if(!username){
                console.log('\x1b[31m%s\x1b[0m', 'please enter an email address')
                return false;
            }
            return true;
        }
    }
])
.then(function(response){
    const newEngineer = new Engineer(
        response.name,
        response.id, 
        response.email, 
        response.username
    )
    let engineerHTML = 
    `<div class="card bg-light m-4" style="width: 300px">
    <div class="card-body p-0">
        <div class="card-title bg-info p-3 text-white">
            <h5>${newEngineer.name}</h5>
            <h5>Manager</h5>
        </div>
        <ul class="list-group list-group-flush border border-grey m-4">
            <li class="list-group-item">ID:</li>
            <li class="list-group-item">Email:</li>
            <li class="list-group-item">GitHub:</li>
          </ul>
    </div>`

    starterHTML+=engineerHTML;
    otherQuestion();
})
}

function newIntern(){
    inquirer.prompt([
        {
        type: 'input', 
        message: 'Enter Team Intern Name',
        name: 'name',
        validate: function(name)
        {
            if(!name){
                console.log('\x1b[31m%s\x1b[0m', 'please enter intern name')
                return false;
            }
            return true;
        }
    }, 
    {
        type: 'input', 
        message: 'Enter Team Intern ID',
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
        message: 'Enter Team Intern Email Address',
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
        type: 'input', 
        message: 'Enter Team Intern school',
        name: 'username',
        validate: function(username)
        {
            if(!username){
                console.log('\x1b[31m%s\x1b[0m', 'please enter a school')
                return false;
            }
            return true;
        }
    }
])
.then(function(response){
    const newIntern = new Intern(
        response.name,
        response.id, 
        response.email, 
        response.username
    )
    let internHTML = 
    `<div class="card bg-light m-4" style="width: 300px">
    <div class="card-body p-0">
        <div class="card-title bg-info p-3 text-white">
            <h5>${newIntern.name}</h5>
            <h5>Manager</h5>
        </div>
        <ul class="list-group list-group-flush border border-grey m-4">
            <li class="list-group-item">ID:</li>
            <li class="list-group-item">Email:</li>
            <li class="list-group-item">GitHub:</li>
          </ul>
    </div>`

    starterHTML+=internHTML;
    otherQuestion();
})
}
function writeHTMLFile(fileName, data) {
    fs.writeFile(fileName, data, (err)=>{
        err ? console.log(err) : console.log('Your team page is ready!')
    });
}
function init(){
    inquirer.prompt(questions)
    .then(function(response) {

        const newManager = new Manager (
            response.name,
            response.email,
            response.id,
            response.officeNum
        )
        let managerHTML = 
        `<div class="card bg-light m-4" style="width: 300px">
        <div class="card-body p-0">
            <div class="card-title bg-info p-3 text-white">
                <h5>${newManager.name}</h5>
                <h5>Manager</h5>
            </div>
            <ul class="list-group list-group-flush border border-grey m-4">
                <li class="list-group-item">ID:</li>
                <li class="list-group-item">Email:</li>
                <li class="list-group-item">GitHub:</li>
              </ul>
        </div>`

        starterHTML+=managerHTML;
            
        otherQuestion();

    })
}
init();

