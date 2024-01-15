const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");

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
        type: 'list',
        name: 'license',
        message: 'How to use the project',
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
        name: 'credits',
        message: 'Credits',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Tests for your project',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Contact details for questions',
    },
];

// function to initialize program
function init() {
    inquirer
    .prompt(questions)
    .then((data) => {
        const readmeTitle = `${data.title.toLowerCase().split(' ').join('')}.md`;
        fs.writeFile(readmeTitle, JSON.stringify(data, null, '\t'), (err) =>
          err ? console.log(err) : console.log('Success!')
        );
      });
};

// // function call to initialize program
init();
