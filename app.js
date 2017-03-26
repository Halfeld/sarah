const colors = require('colors/safe');
const tjbot = require('./tjbotlib');
const config = require('./config/configs');
const EnumHelper = require('./config/enum-helper');

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
  console.log('');
  console.log(colors.red('Message logger'), msg);

  // check to see if they are talking to TJBot
  const name = msg.split(' ')[0];
  console.log(colors.red('Name logger'), name);
  console.log('');
  if (EnumHelper.namePossibles.indexOf(name) !== -1) {
    // send to the conversation service
    tj.converse(WORKSPACEID, msg, (response) => {
      // speak the result
      if (response.description !== '') {
        tj.speak(response.description);
      }
    });
  }
})
