// "node gemini.js" to run

require('dotenv').config()
const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

// Choosing Gemini model
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

// DataFrames, Normalized Mutual Information, Sentence splitting using NLTK
// Correlation, Linear Regression, Decision Tree Classifier, Read/Write CSV files

async function run() {
  var prompt = "Create a Python script about reading and writing CSV files with the context being koalas without any code comments";
  // Starting a full chat
  const chat = model.startChat({ history: [] })
  let result = await chat.sendMessage(prompt);
  console.log(result.response.text());

  prompt = prompt.concat("that's different from the last one");

  result = await chat.sendMessage(prompt);
  console.log(result.response.text());
}

run();

