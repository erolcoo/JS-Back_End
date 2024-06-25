const { emitter } = require('./emitter');

function start(){
    const data = 'Deycheto is working really hard!';
    
    emitter.emit('message', data);
    emitter.emit('login', 'Hello World!');
}

module.exports = { start };