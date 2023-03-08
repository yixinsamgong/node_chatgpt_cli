const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config()

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

let chatGPT = async (prompt) => {
  const response = await openai. createChatCompletion ({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: prompt }],
        })
    return response;
};
  chatGPT ("Hello, how are you?")
      .then((response) => {
      console.log(response["data"] ["choices"] [0] ["message"] ["content"]) ;
      })
      .catch((err) => {
        console.error (err);
})