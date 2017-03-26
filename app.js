const tjbot = require('./tjbotlib');
const config = require('./config/configs');

const credentials = config.credentials;
const WORKSPACEID = config.conversationWorkspaceId;

const hardware = ['microphone', 'speaker'];

const configuration = {
  listen: {
    microphoneDeviceId: 'plughw:1,0',
    inactivityTimeout: 60,
    language: 'pt-BR'
  },
  wave: {
    servoPin: 7
  },
  speak: {
    language: 'pt-BR'
  },
  verboseLogging: true
};

const tj = new tjbot(hardware, configuration, credentials);

tj.listen((msg) => {

  // send to the conversation service
  tj.converse(WORKSPACEID, turn, (response) => {
    // speak the result
    tj.speak(response.description);
  });

  console.log('Message logger', msg);

  // check to see if they are talking to TJBot
  if (msg.startsWith('Sara')) {
    // remove our name from the message
    var turn = msg.toLowerCase().replace('Sara'.toLowerCase(), "");

    console.log('Turn logger', turn);
    // send to the conversation service
    tj.converse(WORKSPACEID, turn, (response) => {
      // speak the result
      tj.speak(response.description);
    });
  }
})
