// TODO: Include packages needed for this application
const inquirer = require ('inquirer')


// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project'
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
      }
    ]);
  };

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();