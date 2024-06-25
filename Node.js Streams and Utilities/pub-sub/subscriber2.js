const { subscribe, unsubscribe } = require ('./bus');

function start(){
    subscribe('login', onMessage);
}

function unsub(){
    unsubscribe('login', onMessage);
}

function onMessage(data){
    console.log('Subscriber2 Receiving Message: ', data);
}

module.exports = { start, unsub };
