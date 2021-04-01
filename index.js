const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: "What is the title of the project?",
    name: "Title",
    validate: (value) => { if (value) { return true } else { return "i need value to continue" } },
}, {
    type: "input",
    message: "What is the project about? Give a detailed description of your project.",
    name: "Description",
    validate: (value) => { if (value) { return true } else { return "i need value to continue" } },
}, {
    type: "input",
    message: "Table of Contents",
    name: "Table of Contents",
    validate: (value) => { if (value) { return true } else { return "i need value to continue" } },
}, {
    type: "input",
    message: "What does the user need to install to run this app (ie..dependencies)?",
    name: "Installation",
    validate: (value) => { if (value) { return true } else { return "i need value to continue" } },
}, {
    type: "input",
    message: "how is the App used ? Give instructions",
    name: "Usage",
    choices: ['MIT License', 'GPl License', 'Apache License', 'Gmi License', 'N/A'],
    validate: (value) => { if (value) { return true } else { return "i need value to continue" } },
}, {
    type: "input",
    message: "What License is being used? (ie...MIT)",
    name: "License",
    validate: (value) => { if (value) { return true } else { return "i need value to continue" } },
}, {
    type: "input",
    message: "What Commands are needed to test this app?",
    name: "Tests",
    validate: (value) => { if (value) { return true } else { return "i need value to continue" } },
}, {
    type: "input",
    message: "Are there Any Contibutors? ",
    name: "Contributor",
    validate: (value) => { if (value) { return true } else { return "i need value to continue" } },
}, {
    type: "input",
    message: "Who contibuted to this project ?",
    name: "Contributors",
    validate: (value) => { if (value) { return true } else { return "i need value to continue" } },
}, {
    type: "input",
    message: "link of Github of Contibutors",
    name: "ContributorGithubLink",
    validate: (value) => { if (value) { return true } else { return "i need value to continue" } },
}, {
    type: "input",
    message: "Contact info for inquiries.",
    name: "Questions",
    validate: (value) => { if (value) { return true } else { return "i need value to continue" } },
}, {
    type: "input",
    message: "what is yourGithub username",
    name: "Username",
    validate: (value) => { if (value) { return true } else { return "i need value to continue" } },
}, {
    type: "input",
    message: "What is your email address?",
    name: "Email",
    validate: (value) => { if (value) { return true } else { return "i need value to continue" } },
}, {
    type: "input",
    message: "list of Features in your project",
    name: "Features",
    validate: (value) => { if (value) { return true } else { return "i need value to continue" } },
},
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log("successfully created README file ")
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (data) {
            // Use user feedback for... whatever!!
            writeToFile("ReadME.md", generateMarkdown(data));
        })
        .catch(error => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else went wrong
            }
        });
    
}

// Function call to initialize app
init();
