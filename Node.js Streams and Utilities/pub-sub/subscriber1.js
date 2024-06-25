const { subscribe } = require ('./bus');

function start(){
    subscribe('message', onMessage);
}

function onMessage(data){
    console.log('Subscriber1 Receiving Message: ', data);
}

module.exports = { start };
