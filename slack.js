const { RTMClient } = require('@slack/client');

const token = process.env.SLACK_TOKEN;

const rtm = new RTMClient(token);
rtm.start();

//Could use a dictionary to match up with chat names?????
const conversationId = ['id2', 'id1'];