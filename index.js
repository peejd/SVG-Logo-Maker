const inquirer = require('inquirer');
const fs = require('fs');
var svgCode

class Circle {
    constructor(text, textColor, fillColor) {
        svgCode = 
`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="100" fill="${fillColor}" />
    <text x="150" y="120" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
</svg>`;
    }
}
  
class Square {
    constructor(text, textColor, fillColor) {
        svgCode =
`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="50" height="200" width="200" fill="${fillColor}" />
    <text x="150" y="120" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
</svg>`;
    }
}

class Triangle {
    constructor(text, textColor, fillColor) {
        svgCode = 
`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150,0 275,200 25,200" fill="${fillColor}" />
    <text x="150" y="120" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
</svg>`;
    }
}

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter 3 letters that represent your brand:'
    },
    {
        type: 'input',
        name: 'textcolor',
        message: 'Enter a color keyword or hexadecimal color code for your text:'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape for your logo:',
        choices: ['Circle','Square','Triangle']
    },
    {
        type: 'input',
        name: 'shapecolor',
        message: 'Enter a color keyword or hexadecimal color code for your shape:'
    }
];

inquirer.prompt(questions)
  .then((answers) => {
    var svg
    if (answers.shape == 'Circle') {
        svg = new Circle(answers.text,answers.textcolor,answers.shapecolor)
    }
    else if (answers.shape == 'Square') {
        svg = new Square(answers.text,answers.textcolor,answers.shapecolor)   
    }
    else {
        svg = new Triangle(answers.text,answers.textcolor,answers.shapecolor)     
    };

    fs.writeFile('logo.svg', svgCode, (err) => {
      if (err) throw err;
      console.log('Answers saved to logo.svg');
    });
  });
