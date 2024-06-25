const { emitter } = require('./emitter');

function start(){
    emitter.on('message', onMessage);
}

function onMessage(data){
    console.log('Subscriber1 Receiving Message: ', data);
}

module.exports = { start };
