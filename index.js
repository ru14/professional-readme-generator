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
},
 {
    type: "input",
    message: "What does the user need to install to run this app (ie..dependencies)?",
    name: "Dependencies",
    validate: (value) => { if (value) { return true } else { return "i need value to continue" } },
}, {
    type: "input",
    message: "how is the App used ? Give instructions",
    name: "Usage",
    validate: (value) => { if (value) { return true } else { return "i need value to continue" } },
}, {
    type: "list",
    message: "What License is being used? (ie...MIT)",
    name: "License",
    choices: ['MIT License', 'GPl License', 'Apache License', 'Ibm License', 'N/A'],
    validate: (value) => { if (value) { return true } else { return "i need value to continue" } },
}, 
{
    type: "confirm",
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
    validate: (value) => { if (value) { return true } else { return "i need value to continue" } }
}
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        console.log("writeFile");
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
            //console.log(data)
            // Use user feedback for... whatever!!
            let response = generateMarkdown(data)
           // console.log(response);
          writeToFile("ReadME.md", response);
            
        })
        .catch(error => {
            if (error.isTtyError) {
                console.log("Prompt couldnt be rendered in current enviroment:" + error)
                // Prompt couldn't be rendered in the current environment
            } else {
                console.log("109Error: " + error)
                // Something else went wrong
            }
        });
    
}

// Function call to initialize app
init();