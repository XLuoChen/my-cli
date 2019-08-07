var inquirer = require('inquirer');

module.exports = () => {
  inquirer
    .prompt([
      {
        name: 'name',
        type: 'input',
        message: 'input your name'
      },
      {
        name: 'choice',
        type: 'list',
        message: 'choose your favourite fruit',
        choices: ['apple', 'banana', 'mango']
      }
    ])
    .then(answers => {
      console.log(answers)
    });
}
