
function displayResult(result) {
  const resultText = document.getElementById("resultText");
  resultText.textContent = result;
}

function toUpperCase() {
  const input = document.getElementById("inputText").value;
  const result = input.toUpperCase();
  displayResult(result);
}

function toLowerCase() {
  const input = document.getElementById("inputText").value;
  const result = input.toLowerCase();
  displayResult(result);
}

function camelCase() {
  const input = document.getElementById("inputText").value;
  const result = input
    .split(" ")
    .map((word, index) =>
      index === 0
        ? word.toLowerCase()
        : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join("");
  displayResult(result);
}

function reverseString() {
  const input = document.getElementById("inputText").value;
  const result = input.split("").reverse().join("");
  displayResult(result);
}

function countVowels() {
  const input = document.getElementById("inputText").value.toLowerCase();
  const vowels = input.match(/[aeiou]/g);
  const result = `Number of vowels: ${vowels ? vowels.length : 0}`;
  displayResult(result);
}

function countConsonants() {
  const input = document.getElementById("inputText").value.toLowerCase();
  const consonants = input.match(/[bcdfghjklmnpqrstvwxyz]/g);
  const result = `Number of consonants: ${consonants ? consonants.length : 0}`;
  displayResult(result);
}

function countWords() {
  const input = document.getElementById("inputText").value.trim();
  const words = input.split(/\s+/);
  const result = `Number of words: ${input ? words.length : 0}`;
  displayResult(result);
}

function mostFrequentCharacter() {
  const input = document.getElementById("inputText").value;
  const freqMap = {};
  for (const char of input.replace(/\s+/g, "")) {
    freqMap[char] = (freqMap[char] || 0) + 1;
  }
  const mostFrequent = Object.keys(freqMap).reduce((a, b) =>
    freqMap[a] > freqMap[b] ? a : b
  );
  const result = `Most frequent character: '${mostFrequent}' (${freqMap[mostFrequent]} times)`;
  displayResult(result);
}

function checkForAnagrams() {
  const input1 = document.getElementById("inputText").value.replace(/\s+/g, "").toLowerCase();
  const input2 = document.getElementById("secondInputText").value.replace(/\s+/g, "").toLowerCase();
  const sorted1 = input1.split("").sort().join("");
  const sorted2 = input2.split("").sort().join("");
  const result = sorted1 === sorted2 ? "The texts are anagrams!" : "The texts are not anagrams.";
  displayResult(result);
}

function longestWord() {
  const input = document.getElementById("inputText").value.trim();
  const words = input.split(/\s+/);
  const longest = words.reduce((a, b) => (a.length > b.length ? a : b), "");
  const result = `Longest word: '${longest}'`;
  displayResult(result);
}
