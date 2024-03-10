const express = require('express');
const router = express.Router();
const { CohereClient } = require('cohere-ai');

const cohere = new CohereClient({
  token: process.env.COHERE_API_TOKEN,
});

var lastCohereAnswer = "";
var firstPromptCall = true;

router.post('/', (req, res) => {
  (async () => {
    console.log(req);
    const chatStream = await cohere.chatStream({
      stream: true,
      message: req.body.userInput,
      // perform web search before answering the question. You can also use your own custom connector.
      preambleOverride: 'You are a trusted big sister to help support women during their abortion process.',
      connectors: [{ id: 'web-search' }],
    });

    var fullMessage = '';
    for await (const message of chatStream) {
      if (message.eventType === 'text-generation') {
        console.log(message);
        fullMessage = fullMessage + message['text'];
      }
    }
    lastCohereAnswer = fullMessage;
    console.log('cohere api done!');
    res.status(200).send(JSON.stringify(fullMessage));
    console.log('response sent!');
  })();
});



router.post('/prompts', (req, res) => {
  
  (async () => {
    console.log(req);
    const promptsString = "Can you generate three follow up questions based on this input without proving any answers, only the questions please without any other information, just a list of three questions, but with one question that is  slightly different from the two other questions";
    const chatStream = await cohere.chatStream({
      stream: true,
      message: firstPromptCall ? "Please generate three questions to help someone who wants support with abortion" : promptsString + lastCohereAnswer,
      // perform web search before answering the question. You can also use your own custom connector.
      preambleOverride: 'You are a trusted big sister to help support women during their abortion process.',
      connectors: [{ id: 'web-search' }],
    });

    var fullMessage = '';
    for await (const message of chatStream) {
      if (message.eventType === 'text-generation') {
        console.log(message);
        fullMessage = fullMessage + message['text'];
      }
    }

    const separatedStrings = fullMessage.split('\n');
    console.log(separatedStrings);

    console.log('cohere api done!');
    res.status(200).send(JSON.stringify(separatedStrings));
    console.log('response sent!');

    firstPromptCall = false;
  })();
});

module.exports = router;
