// TODO: Include packages needed for this application
const inquirer = require ('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project'
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Provide installation instructions for your project'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide usage information for your project'
      },
      {
        type: 'input',
        name: 'contributions',
        message: 'Provide contribution guidelines for your project'
      },
      {
        type: 'input',
        name: 'test',
        message: 'Provide test instructions for your project'
      },
      {
        type: 'checkbox',
        name: 'licenses',
        message: 'What did you this project with? (Check which one applies)',
        choices: ['Apache License 2.0', 'BSD 3-Clause "New" or "Revised" license', 'BSD 2-Clause "Simplified" or "FreeBSD" license', 'GNU General Public License (GPL)', 'GNU Library or "Lesser" General Public License (LGPL)', 'MIT license', 'Mozilla Public License 2.0']
      },
      {
        type: 'input',
        name: 'github',
        message: 'Provide a GitHub repo for your project'
      },
      {
        type: 'input',
        name: 'email',
        message: 'Provide an email address for your project'
      },
    ]);
  };

// TODO: Create a function to write README file
//Const generateMarkdown(fileName, data) {}

// TODO: Create a function to initialize app
questions().then(answers => console.log(answers))


// Function call to initialize app
//init();