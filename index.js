const inquirer = require('inquirer');
const fs = require('fs');
const { generateReadme } = require('./generateReadme')

/*
* Project Name,
GitHub,
* Description, 
Table of Contents, (generated)
* Installation, 
* Usage, 
License, (list)
* Contributing, 
Tests, 
and Questions (user's email address)
*/

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

            fs.mkdir('./build/', { recursive: true }, err => err ? console.error(err) : console.log('Created ./build/ folder'));
            
            fs.writeFile(
                './build/README.md', 
                generateReadme(answers), 
                err => 
                    err ? console.error(err) : console.log('Completed ./build/README.md')
            )
        }

    )
    // TODO: Add a catch for other error types