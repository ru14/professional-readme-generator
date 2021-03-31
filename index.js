const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const generateMarkdown = require('./util/generatorMarkdown')
const writeFileAsync = util.promisify(fs.writeFile)

// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: "What is the title of the project?",
    name: "Title"
}, {
    type: "input",
    message: "What is the project about? Give a detailed description of your project.",
    name: "Description"
}, {
    type: "input",
    message: "Table of Contents",
    name: "Table of Contents"
}, {
    type: "input",
    message: "What does the user need to install to run this app (ie..dependencies)?",
    name: "Installation"
}, {
    type: "input",
    message: "how is the App used ? Give instructions",
    name: "Usage"
}, {
    type: "input",
    message: "What License is being used? (ie...MIT)",
    name: "License"
}, {
    type: "input",
    message: "What Commands are needed to test this app?",
    name: "Tests"
}, {
    type: "input",
    message: "Are there Any Contibutors? ",
    name: "Contributor"
}, {
    type: "input",
    message: "Who contibuted to this project ?",
    name: "Contributors"
}, {
    type: "input",
    message: "link of Github of Contibutors",
    name: "ContributorGithubLink"
}, {
    type: "input",
    message: "Contact info for inquiries.",
    name: "Questions"
}, {
    type: "input",
    message: "what is yourGithub username",
    name: "Username"
}, {
    type: "input",
    message: "What is your email address?",
    name: "Email"
}, {
    type: "input",
    message: "list of Features in your project",
    name: "Features"
}, {
    type: "input",
    message: "",
    name: "Badges"
},
];
inquirer
    .prompt([

    ])
    .then(answers => {
        // Use user feedback for... whatever!!
    })
    .catch(error => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });

// TODO: Include packages needed for this application



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log("success")
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data){
        writeToFile("ReadME.md", generateMarkdown(data));
    })
}

// Function call to initialize app
init();
