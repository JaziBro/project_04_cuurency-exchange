#! usr/bin/env Node
import inquirer from "inquirer"

let conversions = {
    "PKR": {
        "PKR": 1,
        "USD": 0.0035,
        "INR": 0.29
    },
    "USD": {
        "USD": 1,
        "PKR": 287.22,
        "INR": 83.10
    },
    "INR": {
        "INR": 1,
        "PKR": 3.46,
        "USD": 83.10
    },

}

let answers = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        choices: ["PKR","USD","INR"],
        message: "Choose the Currency you want to convert: "
    },
    {
        name: "to",
        type: "list",
        choices: ["PKR","USD","INR"],
        message: "Choose the Currency you want to convert: "
    },
    {
        name: "amount",
        type: "number",
        message: "Enter your amount: "
    },
])
