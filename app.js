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
  verboseLogging: true,
  voice: 'pt-BR_IsabelaVoice'
};

const tj = new tjbot(hardware, configuration, credentials);

//tj.listen(function(msg) {

// send to the conversation service
//tj.converse(WORKSPACEID, turn, function(response) {
// speak the result
//    tj.speak(response.description);
//  });

tj.speak('Mahhh oe, Roda o báu da felicidade')
  /*
  // check to see if they are talking to TJBot
  if (msg.startsWith(tj.configuration.robot.name)) {
    // remove our name from the message
    var turn = msg.toLowerCase().replace(tj.configuration.robot.name.toLowerCase(), "");

    // send to the conversation service
    tj.converse(WORKSPACEID, turn, function(response) {
      // speak the result
      tj.speak(response.description);
    });
  }
  */
//})
