const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "team.html");

const outputPath = path.resolve(__dirname, "output", "team.html");
const render = require("./lib/htmlRenderer");

const teamMembers = [];
const idArray = [];

function appMenu() {
    function createManager(){
        console.log("Please enter your manager");
        inquirer.prompt([ 
            {
                type: "input",
                name: "managerName",
                message: "What is your manager's name?"                                
            },{
                type: "input",
                name: "managerId",
                message: "What is your manager's id?"
            },{
                type: "input",
                name: "managerEmail",
                message: "What is your manager's email?"
            },{
                type: "input",
                name: "managerOfficeNumber",
                message: "What is your manager's office number?"
            }
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber)
            teamMembers.push(manager);
            idArray.push(answers.managerId);
            createTeam();
        })
    }

    function createTeam() {
        inquirer.prompt([
            {
              type: "list",
              name: "memberChoice",
              message: "Which type of team member would you like to add?",
              choices: [
                "Engineer",
                "Intern",
                "I don't want to add any more team members"
              ]
            }
            ]).then(userChoice => {
            switch(userChoice.memberChoice) {
            case "Engineer":
              addEngineer();
              break;
            case "Intern":
              addIntern();
              break;
            default:
              buildTeam();
            }
        });
    }

    function addEngineer() {
      inquirer.prompt([
      {  
          type: "input",
          name: "engineerName",
          message: "What is your engineer's name?"                                
      },{
        type: "input",
          name: "engineerId",
          message: "What is your engineer's ID?"                                
      },{
        type: "input",
          name: "engineerEmail",
          message: "What is your engineer's Email?"                                
      },{
        type: "input",
          name: "engineerGithub",
          message: "What is your engineer's Github?"                                
      },{
      }
    ]);

    }

    function addIntern() {
      inquirer.prompt([
        {  
            type: "input",
            name: "internName",
            message: "What is your intern's name?"                                
        },{
          type: "input",
            name: "internId",
            message: "What is your intern's ID?"                                
        },{
          type: "input",
            name: "internEmail",
            message: "What is your intern's Email?"                                
        },{
          type: "input",
            name: "internSchool",
            message: "What is your intern's School?"                                
        },{
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
            message: 'What is the persons role in this comoany?',
            choices: ['Engineer', 'Intern', 'Manager', 'No more employees']
        }
      ]);
    ]).then(workers => {
        console.log(workers);
        role = workers['Employee role'];
        console.log(role);
        pickTwo();
    })
}
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

    function buildTeam() {

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
            type: 'email',
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
            employees.push(new Manager(name, id, email, school));
            pickOne();
            break;    
    }
}
pickOne();
module.exports = employees;


    createManager();

}

appMenu();