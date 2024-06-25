const { emitter } = require('./emitter');

function start(){
    emitter.on('login', onMessage);
}

function unsub(){
    emitter.off('login', onMessage);
}

function onMessage(data){
    console.log('Subscriber2 Receiving Message: ', data);
}

module.exports = { start, unsub };
