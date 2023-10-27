const { translate } = require("./translate");
const promptly = require("promptly");

const promptAndTranslate = async () => {
  const input = await promptly.prompt("Enter a word: ");
  const result = translate(input);
  console.log("Pig Latin:", result);
};

// Call the function to execute the prompt and translation
promptAndTranslate();
