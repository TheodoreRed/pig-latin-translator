const argv = require("process-argv")();
const { translate } = require("./translate");

const someWord = argv.command;
const translationOfSomeWord = translate(someWord);
console.log(translationOfSomeWord);
