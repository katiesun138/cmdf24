const express = require('express');
const router = express.Router();
const { CohereClient } = require('cohere-ai');

const cohere = new CohereClient({
  token: process.env.COHERE_API_TOKEN,
});

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

    // build the full response message from cohere api
    var fullMessage = '';
    for await (const message of chatStream) {
      if (message.eventType === 'text-generation') {
        console.log(message);
        fullMessage = fullMessage + message['text'];
      }
    }
    console.log('cohere api done!');
    res.status(200).send(JSON.stringify(fullMessage));
    console.log('response sent!');
  })();
});

router.post('/prompts', (req, res) => {
  (async () => {
    console.log(req);
    const firstPromptsAsk = 'Can you generate a list of 3 questions about abortion concerns? Please include only a list of questions';
    const followUpPromptsAsk =
      'Can you generate three follow up questions based on this input without proving any answers, only the questions please without any other information, just a list of three questions, but with one question that is slightly different from the two other questions';
    const promptsAsk = req.body.getFirstPrompts ? firstPromptsAsk : followUpPromptsAsk + req.body.userInput;

    const chatStream = await cohere.chatStream({
      stream: true,
      message: promptsAsk,
      // perform web search before answering the question. You can also use your own custom connector.
      preambleOverride: 'You are a trusted big sister to help support women during their abortion process.',
      connectors: [{ id: 'web-search' }],
    });

    // build the full response message from cohere api
    var fullMessage = '';
    for await (const message of chatStream) {
      if (message.eventType === 'text-generation') {
        console.log(message);
        fullMessage = fullMessage + message['text'];
      }
    }

    // parse cohere api response to an array of question prompts
    const separatedStrings = fullMessage.split('\n');

    console.log('cohere api done!');
    res.status(200).send(JSON.stringify(separatedStrings));
    console.log('response sent!');
  })();
});

module.exports = router;
