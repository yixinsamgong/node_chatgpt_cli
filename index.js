const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config()

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);


const chatGPT = async (prompt) => {
  const response = await openai.createChatCompletion ({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: prompt }],
        })
    return response
}

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});


const askQuestion = () => {
  readline.question('> ', async (input) => {
    const response = await chatGPT(input);
      console.log(response["data"]["choices"][0]["message"]["content"]) ;
    askQuestion();
  });
};

console.log('Welcome to ChatGPT! Type your message below:');
askQuestion();