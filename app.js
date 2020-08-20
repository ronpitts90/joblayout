const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");




// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

const outputPath = path.resolve(__dirname, "output", "team.html");
let role;
let name;
let id;
let github;
let email;
let number;
let school;
const employees = [];
const pickOne = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'Employee role',
            message: 'What is the persons role in this company?',
            choices: ['Engineer', 'Intern', 'Manager', 'No more employees']
        }
    ]).then(workers => {
        console.log(workers);
        role = workers['Employee role'];
        console.log(role);
        pickTwo();
    })
}

// 1. After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// 3. HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

/// use the switch statement to select one of many codes to be executed
const pickTwo = () => {
    switch(role) {
        case 'Engineer':
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'GitHub Username',
                    message: "What is the engineer github name"
                }
            ]).then(userName => {
                console.log(userName);
                github = userName["GitHub Username"];
                console.log(github);
                pickThree();
            })
            break;
        case 'Manager':
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'Office Number',
                    message: "What is the manager's phone number?"
                }
            ]).then(office => {
                console.log(office);
                number = office["Office Number"];
                console.log(number);
                pickThree();
            })
            break;
        case 'Intern':
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'School Name',
                    message: "What is the school name of an intern"
                }
            ]).then(sponsor => {
                console.log(sponsor);
                school = sponsor["School Name"];
                console.log(school);
                pickThree();
            })
            break;    
        case 'No more employees':
            render(employees)
    }
}
const pickThree = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'Employee Name',
            message: 'Enter employee name'     
        },
        {
            type: 'input',
            name: 'Employee ID',
            message: 'Enter employee ID'     
        },
        {
            type: 'input',
            name: 'Employee Email',
            message: 'Enter employee email address'     
        },
    ]).then(answers => {
        name = answers['Employee Name'];
        console.log(name);
        id = answers['Employee ID']
        console.log(id);
        email = answers['Employee Email']
        console.log(email);
        pickFour();
    })
}
const pickFour = () => {
    switch(role) {
        case 'Engineer':
            employees.push(new Engineer(name, id, email, github));
            pickOne();
            break;
        case 'Intern':
            employees.push(new Intern(name, id, email, school));
            pickOne();
            break;
        case 'Manager':
            employees.push(new Manager(name, id, email, number));
            pickOne();
            break;    
    }
}
pickOne();
module.exports = employees;

