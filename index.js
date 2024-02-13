const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Project title',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Description of project',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license does your project use?',
        choices: [
            'MIT',
            'GNU',
            'Apache',
            'BSD',
            'Mozilla',
            'Eclipse',
            'Creative Commons',
            'Unlicense',
        ]
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation instructions',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How to use the project',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can others contribute?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Tests for your project',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Your GitHub profile',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Your email address',
    },
];

// function to initialize program
function init() {

// set variables
    let data;
    let fileName;

// use the inquirer library to prompt the user with questions from the array above
inquirer.prompt(questions)
    .then((userData) => {

        // store user input
        data = userData;

        // generate file name based on user input
        fileName = `${data.title.toLowerCase().split(' ').join('')}`;

        // write generated markdown content to the file
        return writeFileAsync(fileName + ".md", generateMarkdown(data));
    })

    // log success message with generated file name (or throw error)
    .then(() => console.log("Successfully wrote to " + fileName + ".md"))
    .catch((err) => console.error(err));

}

// function call to initialize program
init();


    
