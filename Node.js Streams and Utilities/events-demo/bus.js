//масив, за да имаме повече subscribers
let subscribers = {};
 
//взимаме string-а, който е в type
function subscribe(type, callback){
    //търсим същото свойство type в обекта със същото име 
    if(!subscribers[type]){
        subscribers[type] = [];
    }
    subscribers[type].push(callback);
}

function unsubscribe(type, callback){
    if(!subscribers[type]){
        return;
    }

    console.log('Removing Subscriber!');
    const index = subscribers[type].indexOf(callback);
    subscribers[type].splice(index, 1);
}

function publish(type, message){
    if(!subscribers[type]){
        return;
    }
    for(const callback of subscribers[type]){
        callback(message);
    }
}

module.exports = {
    subscribe,
    publish,
    unsubscribe
}