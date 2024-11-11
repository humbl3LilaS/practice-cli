#!/user/bin/env node

import {Command} from "commander";
import * as process from "node:process";

// Declare Program
const program = new Command();


// Add actions to the cli
program
    .argument("<string>", "string to log")
    .option("-C, --capitalize", "Capitalize message")
    .action((message: string, opts: { capitalize?: boolean }) => {
        if(opts.capitalize) {
            console.log(`Commander Said ${message.toUpperCase()}`);
        } else {
            console.log(`Commander Said ${message}`);
        }
    })
    .description("Commander Said <message>")

program.command("add <numbers...>").action((numbers: string[]) => {
    const total = numbers.reduce((a, b) => a + parseInt(b), 0);
    console.log(`Total: ${total}`);
}).description("Add the numbers")


program.command("get-max <numbers...>").action((numbers: string[]) => {
    const max = numbers.reduce((a, b) => {
        if (a === parseInt(b)) {
            return a
        }
        return a > parseInt(b) ? a : parseInt(b)
    }, 0);
    console.log(`Max: ${max}`);
}).description("Get the max number")
// Execute the cli
program.parse(process.argv);