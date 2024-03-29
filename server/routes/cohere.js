const express = require('express');
const router = express.Router();
const { CohereClient } = require('cohere-ai');

const cohere = new CohereClient({
  token: process.env.COHERE_API_TOKEN,
});

router.post('/', (req, res) => {
  (async () => {
    // console.log(req);
    const chatStream = await cohere.chatStream({
      stream: true,
      message: 'Can you provide an answer to this input in less than 200 words ' + req.body.userInput,
      // perform web search before answering the question. You can also use your own custom connector.
      preambleOverride: 'You are a trusted big sister to help support women during their abortion process.',
      // connectors: [{ id: 'web-search' }],
    });

    // build the full response message from cohere api
    var fullMessage = '';
    for await (const message of chatStream) {
      if (message.eventType === 'text-generation') {
        // console.log(message);
        fullMessage = fullMessage + message['text'];
      }
    }
    console.log('cohere api done!');
    res.status(200).send(JSON.stringify(fullMessage));
    console.log('response sent!');
  })();
});

router.get('/', (req, res) => {
  res.status(200).send("router is working")
})

router.get('/prompts', (req, res) => {
  (async () => {
    // console.log(req);
    const firstPromptsAsk =
      'Can you generate a list of only 3 questions about abortion concerns? Please include only a list of questions with one space in between, nothing else';
    const followUpPromptsAsk =
      'Can you generate three follow up questions based on this input without proving any answers, only the questions please without any other information, just a list of three questions, but with one question that is slightly different from the two other questions';
    const promptsAsk = req.body.getFirstPrompts ? firstPromptsAsk : followUpPromptsAsk + req.body.userInput;

    const chatStream = await cohere.chatStream({
      stream: true,
      message: promptsAsk,
      // perform web search before answering the question. You can also use your own custom connector.
      preambleOverride: 'You are a trusted big sister to help support women during their abortion process.',
      // connectors: [{ id: 'web-search' }],
    });

    // build the full response message from cohere api
    var fullMessage = '';
    for await (const message of chatStream) {
      if (message.eventType === 'text-generation') {
        // console.log(message);
        fullMessage = fullMessage + message['text'];
      }
    }

    // parse cohere api response to an array of question prompts
    const separatedPrompts = fullMessage.split('\n');
    const filteredPrompts = separatedPrompts.filter(str => str && str.includes('?'));

    console.log('cohere api done!');
    res.status(200).send(JSON.stringify(filteredPrompts));
    console.log('response sent!');
  })();
});

module.exports = router;
