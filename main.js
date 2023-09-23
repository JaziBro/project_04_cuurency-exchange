#! usr/bin/env Node
import inquirer from "inquirer";
let answers = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        choices: ["PKR", "USD", "INR"],
        message: "Choose the Currency you want to convert"
    },
    {
        name: "to",
        type: "list",
        choices: ["PKR", "USD", "INR"],
        message: "Choose the Currency you want to convert "
    },
    {
        name: "amount",
        type: "number",
        message: "Enter your amount"
    },
]);
