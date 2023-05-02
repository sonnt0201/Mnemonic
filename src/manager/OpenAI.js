
class OpenAI {
  constructor() {
    if (!OpenAI.instance) {
      const { Configuration, OpenAIApi } = require("openai");
     const apiKey = process.env.REACT_APP_OPENAI_APIKEY;
     console.log(apiKey)
      const configuration = new Configuration({
        apiKey:  process.env.REACT_APP_OPENAI_APIKEY,
      });

      this.openAI = new OpenAIApi(configuration);

      OpenAI.instance = this;
    }
    return OpenAI.instance;
  }

  getAnswerFor(messages) {
    return new Promise((resolve, reject) => {
      this.openAI
        .createChatCompletion({
          model: "gpt-3.5-turbo",
          messages: messages
        })
        .then((completion) => {
            // console.log(completion.data.choices)
          resolve(completion.data.choices[0].message);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  
}


export const openAI = new OpenAI();
Object.freeze(openAI)
