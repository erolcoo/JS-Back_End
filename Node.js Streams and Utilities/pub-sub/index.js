const { start: startSubscriber1 } = require ('./subscriber1');
const { start: startSubscriber2, unsub } = require ('./subscriber2');
const { start: startPublisher } = require ('./publisher');

function start(){
    startSubscriber1();
    startSubscriber2();
    startPublisher();

    unsub();
    startPublisher();
}

start();