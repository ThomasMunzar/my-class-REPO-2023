const inquirer = require("inquirer");
const fs = require('fs')

const questions = [
    {name: "name",
    message: "what is your name?",
},
    {name:"language",
    message:"What languages do you know?"
},
    {name:'method',
    message:"What is your preferred method of communication?"
},
]


async function init(){
    const answers = await inquirer.prompt(questions)
fs.writeFile("answers.txt", JSON.stringify(answers), (err) =>
{if (err){
    console.error(error)
}else {
    console.log("Success!")
}}
)
}

init()

/// can do TYPE MESSAGE and NAME to identify more clearly. TYPE can be more specific and i didnt use it.
// If you to TYPE-option will give user OPTIONS to select.
// TYPE List is selectable list -> choices https://www.npmjs.com/package/inquirer#installation
