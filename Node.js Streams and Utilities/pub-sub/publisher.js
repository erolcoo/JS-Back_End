const { publish } = require('./bus');

function start(){
    const data = 'Deycheto is working really hard!';
    
    publish('message', data);
    publish('login', 'Hello World!');
}

module.exports = { start };