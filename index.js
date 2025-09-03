#!/usr/bin/env node

const axios = require('axios');
const chalk = require('chalk');
const figlet = require('figlet');

function logFunMessage() {
  figlet('Hello Dev!', (err, data) => {
    if (!err) {
        console.log(chalk.cyan(data));
    }else{
      console.log(chalk.red('Could not render ASCII art'));
    }
    getJoke();
  });
}

async function getJoke() {
    try{
        const res = await axios.get('https://v2.jokeapi.dev/joke/Any?safe-mode&type=single');
        const joke = res.data.joke;

        console.log(chalk.green.bold('\nHere\'s a dev joke for you'));
        console.log(chalk.yellow(` ${joke}\n`));
    }catch(error){
        console.error(chalk.red('Failed to fetch a joke:'), error.message);
    }
}

logFunMessage();

