"use strict";

const translate = (str) => {
  const allowedCharacters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',.!?;: ";
  const vowels = "aeiouAEIOU";
  let result = "";
  if (
    Array.from(str).some((letter) => {
      return !allowedCharacters.includes(letter);
    })
  ) {
    return str;
  }
  const strAsArray = str.split(" ");
  for (let index = 0; index < strAsArray.length; index++) {
    let word = strAsArray[index];
    let isUpperCase = word === word.toUpperCase();
    let isTitleCase = word[0] === word[0].toUpperCase();
    word = word.toLowerCase();

    // starts with a vowel
    if (vowels.includes(word[0])) {
      if (isUpperCase) {
        result += word.toUpperCase() + "way ";
      } else if (isTitleCase) {
        result += word.charAt(0).toUpperCase() + word.slice(1) + "way ";
      } else {
        result += word + "way ";
      }
    } else {
      // starts with a consonant
      let word = strAsArray[index].toLowerCase();
      for (let i = 0; i < word.length; i++) {
        // Check if the current character is a vowel
        if (vowels.includes(word[i])) {
          // take all letters before this vowel as the prefix
          let prefix = word.substring(0, i);
          if (isTitleCase) {
            prefix = prefix[0].toUpperCase() + prefix.substring(1);
          }
          // all letters from this vowel to the end of the word as the suffix
          let suffix = word.substring(i);
          result += suffix + prefix + "ay ";
          if (isUpperCase) {
            result = result.toUpperCase();
          }
          break;
        }
      }
    }
  }
  result = result.slice(0, -1);
  return result;
};

module.exports = { translate };
