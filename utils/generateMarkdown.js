// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
https://github.com/${data.Username}/${data.title}
#Description
${data.description}
# Table of Contents.
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Tests](#tests)
- [Features](#features)
- [Question](#question)
## Installation
The following necessary dependencies mut be installed to run the application. ${data.Dependencies}

## Usage
In order to use this app, ${data.Usage}

## Credits
List your contributors with links to their GitHub profiles.
Contributers: ${data.Contributor}
Link of github: ${data.ContributorGithubLink}

## License
This project is licensed under the ${data.License} license.

## Tests
The following in needed to run the test : ${data.Tests}

## Badges

## Features
List of features in this project : ${data.Features}

## Question
If you have any question about Repo, open an issue or contact ${data.Question}

`;
}

module.exports = generateMarkdown;
