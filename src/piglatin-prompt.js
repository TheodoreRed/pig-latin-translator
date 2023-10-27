const { translate } = require("./translate");
const promptly = require("promptly");

// AJAX - asynchronous javscript
// waiting for promise so we need to tell it to wait
// IIFE - immediately invoked function expression
const promptAndTranslate = async () => {
  const input = await promptly.prompt("Enter a word: ");
  const result = translate(input);
  console.log("Pig Latin:", result);
};

// Call the function to execute the prompt and translation
promptAndTranslate();
