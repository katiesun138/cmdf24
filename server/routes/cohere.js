const express = require('express');
const router = express.Router();
const { CohereClient } = require('cohere-ai');

const cohere = new CohereClient({
  token: process.env.COHERE_API_TOKEN,
});

router.get('/', (req, res) => {
  (async () => {
    const chatStream = await cohere.chatStream({
      stream: true,
      message: 'What is the first thing I should check to know if Im pregnant?',
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

    res.status(200).send(fullMessage);
  })();
});

module.exports = router;
