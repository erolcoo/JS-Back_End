const mongoose = require('mongoose');
const { Person } = require('./models/Person');
const { Article } = require('./models/Articles');
async function start(){
    const connectionString = 'mongodb://127.0.0.1:27017/myDatabase';

    await mongoose.connect(connectionString);

    console.log('dataBase connected!');

    const dayana = await Person.findOne({ firstName: 'Dayana' });
    await Article.create({
        content: 'First Article',
        author: dayana
    });


    const result = await Article.find().populate('author', 'firstName  lastName');
    console.log(result);
    //create first way
    // await Person.create({
    //     firstName: 'Dayana',
    //     lastName: 'Uzunova',
    //     age: 21,
    //     hobbies: ['Running']
    // });

    //create second way
    // const myPerson = new Person({
    //     firstName: 'Ivan',
    //     lastName: 'Kiosev',
    //     age: 1,
    //     hobbies: ['Skiing']
    //  });

    //  try{
    //     await myPerson.save();
    //  }
    //  catch(err){
    //     for(const path in err.errors){
    //         console.log(err.errors[path].properties);
    //     }
    //  }

    //const myPerson = await Person.findOne({ firstName: 'Peter' });

    // console.log(myPerson.sayHello());
    // console.log(myPerson.fullName);

    //insert into hobbies
    // people[0].hobbies.push('Hiking');
    // await people[0].save();


    //update 
    // const ivan = await Person.findById('66630886bc330fc2197f48a5');

    // ivan.lastName = 'Kostadinov';
    // await ivan.save();
}
start();