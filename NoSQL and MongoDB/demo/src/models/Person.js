const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true 
    },
    age: {
        type: Number,
        min: [0, 'Age must be non-negative number (current value is {VALUE}']
    },
    hobbies: {
        type: [String],
        enum: {
            values: ['Hiking', 'Skiing', 'Biking', 'Running'],
            message: 'Unacceptable hobby!'
        }
    },
});

personSchema.methods.sayHello = function(){
    return `${this.firstName} says Hello!`;
};

personSchema.virtual('fullName').get(function() {
    return this.firstName + ' ' + this.lastName;
});

const Person = mongoose.model('Person', personSchema);

module.exports = {
    Person
}