//  Install packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
const gm = require("./utils/generateMarkdown.js");
// const generateMarkdown = require('./utils/generateMarkdown.js');
//  An array of questions for user input
const questions = [

    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please describe this program:',
        name: 'description',
    }, {
        type: 'input',
        message: 'How should the user install this program?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'How would you like this program to be used?',
        name: 'usage',

    },
    {
        type: 'input',
        message: 'What are your contribution guidelines?',
        name: 'contributions',

    },
    // Change License choices
    {
        type: 'list',
        message: 'What License whould you like to use?',
        name: 'license',
        choices: ["Apache 2.0 License","L2","L3","L4",] 
       },
       {
        type: 'input',
        message: 'What is your GitHub User name?',
        name: 'gitHub',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    console.log(data);
    
    var text = gm.generateMarkdown(data);


    fs.writeFile(fileName, text, (err) =>
        err ? console.log(err) : console.log('Success!')
    )
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)

    .then((data) => {
        const filename = `README.md`;
        writeToFile(filename, data);
    });
 }

// Function call to initialize app
init();



