const inquirer = require('inquirer');
const fs = require('fs');
const { generateReadme } = require('./generateReadme');
const { generateLicense } = require('./generateLicense');

inquirer
    .prompt([
        {
            type: "input",
            message: "What is your github username?",
            name: "github"
        },
        {
            type: "input",
            message: "What is your email address?",
            name: "email"
        },
        {
            type: "input",
            message: "Project name:",
            name: "projName"
        },
        {
            type: "input",
            message: "Project description:",
            name: "projDesc"
        },
        {
            type: "input",
            message: "Prerequisites, comma-separated:",
            name: "prereq"
        },
        {
            type: "input",
            message: "Installation instructions:",
            name: "install"
        },
        {
            type: "input",
            message: "Usage instructions:",
            name: "usage"
        },
        {
            type: "input",
            message: "Contributing instructions:",
            name: "contributing"
        },
        {
            type: "input",
            message: "Tests instructions:",
            name: "tests"
        },
        {
            type: "list",
            message: "License:",
            choices: ["No License", "Apache", "GNU", "MIT", "Creative Commons", "The Unlicense"],
            name: "license"
        },
    ])
    .then( 
        answers => {

            // Create a build directory so the generated README.md doesn't clash with this script's README.md
            fs.mkdir('./build/', { recursive: true }, err => err ? console.error(err) : console.log('Created ./build/ folder'));
            
            // Write out the README.md to the new directory
            fs.writeFile(
                './build/README.md', 
                generateReadme(answers), 
                err => 
                    err ? console.error(err) : console.log('Completed ./build/README.md')
            )

            // If a license is specified, write out a license file too
            if (answers.license) {
                fs.writeFile(
                    './build/LICENSE',
                    generateLicense(answers),
                    err =>
                        err ? console.error(err) : console.log('Completed ./build/LICENSE')
                )
            }
        }

    )
    // TODO: Add a catch for other error types