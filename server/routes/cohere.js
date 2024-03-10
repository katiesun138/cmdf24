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

module.exports = router;
