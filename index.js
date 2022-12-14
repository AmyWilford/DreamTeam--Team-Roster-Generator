// import dependency packages for application
const inquirer = require('inquirer');
const fs = require('fs');

// import classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// establish base HTML code. Genreated team member HTML will be concated to base code.
let fileHTML= 
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Libre+Barcode+39+Text&family=Source+Sans+Pro:wght@200;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="../src/style.css">
    <title>The Dream Team</title>
</head>
<body class="bg-light">
    <div class="jumbotron text-center display-1 text-uppercase custom-jumbtron">The Dream Team</div>
    <div class="d-flex flex-wrap justify-content-center">`

// Initial inquirier prompt questions for team Manager
const questions = [
    {
        type: 'input', 
        message: "Enter Your Team Manager's Name:",
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
        message: "Enter Your Team Manager's Employee ID:",
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
        message: "Enter Your Team Manager's Email Address:",
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
        message: "Enter Your Team Manager's Office Number:",
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

// Function to add team members or finish building team
function addToTeam(){
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
        } else if(response.team === 'Intern'){
            newIntern();
        } else {
            fileHTML+=`
            </div>
        </body>
        </html>`

        // write HTML file with provided file path&name - use fileHTML variable to populate file 
            writeHTMLFile('./dist/dreamteam.html', fileHTML);
        }
    })
}
// function to ask Engineer prompts and create newEngineer object to embed within HTML
function newEngineer(){
    inquirer.prompt([
        {
        type: 'input', 
        message: "Enter Team Engineer's Name:",
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
        message: "Enter Team Engineer's Employee ID:",
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
        message: "Enter Team Engineer's Email Address:",
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
        message: "Enter Team Engineer's GitHub username:",
        name: 'github',
        validate: function(github)
        {
            if(!github){
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
        response.github
    )

    let engineerHTML = 
    `<div class="card bg-light m-4" style="width: 350px">
        <div class="card-body p-0">
            <div class="card-title custom-background p-3">
                <h5 class="text-uppercase font-weight-bold">${newEngineer.name}</h5>
                <h5 class="text-lowercase">${newEngineer.getRole()}</h5>
            </div>
            <ul class="list-group list-group-flush border border-grey m-4">
                <li class="list-group-item"><b>EMPLOYEE ID: </b>${newEngineer.id}</li>
                <li class="list-group-item"><b>EMAIL: </b><a href="mailto:${newEngineer.email}">${newEngineer.email}</a></li>
                <li class="list-group-item"><b>GITHUB: </b><a href="https://github.com/${newEngineer.github}" target="_blank">https://github.com/${newEngineer.github}</a></li>
            </ul>
        </div>
    </div>`

    fileHTML+=engineerHTML;
    addToTeam();
})
}

// function to ask Intern prompts and create newIntern object to embed within HTML
function newIntern(){
    inquirer.prompt([
        {
        type: 'input', 
        message: 'Enter Team Intern Name:',
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
        message: "Enter Team Intern's Employee ID:",
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
        message: "Enter Team Intern's Email Address:",
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
        message: "Enter Team Intern's School:",
        name: 'school',
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
        response.school
    )

    let internHTML = 
    `<div class="card bg-light m-4" style="width: 350px">
    <div class="card-body p-0">
        <div class="card-title custom-background p-3">
            <h5 class="text-uppercase font-weight-bold">${newIntern.name}</h5>
            <h5 class="text-lowercase">${newIntern.getRole()}</h5>
        </div>
        <ul class="list-group list-group-flush border border-grey m-4">
            <li class="list-group-item"><b>EMPLOYEE ID: </b>${newIntern.id}</li>
            <li class="list-group-item"><b>EMAIL: </b><a href="mailto:${newIntern.email}">${newIntern.email}</a></li>
            <li class="list-group-item"><b>SCHOOL: </b>${newIntern.school}</li>
        </ul>
    </div>
    </div>`

    fileHTML+=internHTML;
    addToTeam();
})
}

// function to write HTML file with a provided file name and input data
function writeHTMLFile(fileName, data) {
    fs.writeFile(fileName, data, (err)=>{
        err ? console.log(err) : console.log('Your team page is ready!')
    });
}

// function to initiate app and ask initial inquirier.prompt questions
function init(){
    inquirer.prompt(questions)
    .then(function(response) {

        // create Manager object with initial prompt responses and embed within HTML
        const newManager = new Manager (
            response.name,
            response.id,
            response.email,
            response.officeNum
        )
        let managerHTML = 
        `<div class="card bg-light m-4" style="width: 350px">
        <div class="card-body p-0">
            <div class="card-title custom-background p-3">
                <h5 class="text-uppercase font-weight-bold">${newManager.name}</h5>
                <h5 class="text-lowercase">${newManager.getRole()}</h5>
            </div>
            <ul class="list-group list-group-flush border border-grey m-4">
                <li class="list-group-item"><b>EMPLOYEE ID: </b>${newManager.id}</li>
                <li class="list-group-item"><b>EMAIL: </b><a href="mailto:${newManager.email}">${newManager.email}</a></li>
                <li class="list-group-item"><b>OFFICE #: </b>${newManager.officeNum}</li>
            </ul>
        </div>
        </div>`
        fileHTML+=managerHTML;
        // run addToTeam function to determine if anyone will be added to the team
        addToTeam();
    })
}

// Call init() function to start application
init();

