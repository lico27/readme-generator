const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your name?',
    }
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
}


// // function to initialize program (immediately called when file runs)
// function init() {
//     // where we can prompt the user via inquirer.prompt() and then get the answers back in an object with properties for each response 
//     // e.g. inquirer.prompt(questions).then(answers => do stuff with them)
//     // we can pass the answers data to our generateMarkdown function to get back the string of text for the readme with all the user's answers filled into it
//     // e.g generateMarkdown(answers) -> returns some text for the readme
//     // then we can call the writeToFile function with the file name and the data from the answers object 
//     // e.g. writeToFile('blabla.md', answers)
// }




// // function call to initialize program
init();
// generateMarkdown(123);
