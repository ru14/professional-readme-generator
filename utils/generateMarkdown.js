// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const mitBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
const apacheBadge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
const gplBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
const ibmBadge = "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
const naBadge = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
function renderLicenseBadge(License) {
  if (License === 'MIT License'){
    return mitBadge
  }
  if (License === 'GPl License'){
    return gplBadge
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(License) {
if (License === 'MIT License'){
  return "https://opensource.org/licenses/MIT"
}
if (License === 'GPl License'){
return "https://www.gnu.org/licenses/gpl-3.0"
}
if (License === 'Apache License'){
  return "https://opensource.org/licenses/Apache-2.0"
}
if (License === 'Ibm License'){
  return "https://opensource.org/licenses/IPL-1.0"
}
if (License === 'N/A'){
  return "http://unlicense.org/"
}
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(License) {
  return`
  ## License
  This project is licensed under the ${License} license.
  ${renderLicenseLink(License)}
  ${renderLicenseBadge(License)}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
  return `## ${data.Title}
https://github.com/${data.Username}/${data.Title}

## Description
${data.Description}
## Table of Contents.
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

${renderLicenseSection(data.License)}

## Tests
The following in needed to run the test : ${data.Tests}

## Badges

## Features
List of features in this project : ${data.Features}

## Question
If you have any question about Repo, open an issue or contact ${data.Questions}

`;
}

module.exports = generateMarkdown, renderLicenseBadge, renderLicenseLink, renderLicenseSection;
