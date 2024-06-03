// TODO: Include packages needed for this application

const fs = require('fs');
const inquirer = require('inquirer');
const { default: Choices } = require('inquirer/lib/objects/choices');

// TODO: Create an array of questions for user input
const questions = [
    {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a short description of your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please describe the process of installation.'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Who is contibuting to this project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How will this project be utilized?'
    },

 
    {
        type: 'input',
        name: 'tests',
        message:'How will this project be tested?'
    },

    {
        type: 'list',
        name: 'license',
        message:'Please select the appropriate license for this project.',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    {
        type: 'input',
        name: 'questions',
        message:'What should I do if I have any questions?'
    },

    {
        type: 'input',
        name: 'username',
        message:'Please enter your GitHub username.'
    },
    {
        type: 'input',
        name: 'email',
        message:'Please provide your email address.'
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
        err ? console.error(err) : console.log('Your README file has been created!')
);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        const readmeContent = `# ${answers.title}

        ## Description
        ${answers.desccription}

        ##Installation
        ${answers.installation}

        ##Usage
        ${answers.usage}

        ##Contributing
        ${answers.contributing}`;

        //Write to README file
        writeToFile('README.md', readmeContent);
});

}
// Function call to initialize app
init();