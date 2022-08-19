const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
.then( () => console.log('Connected to Playground...'))
.catch( () => console.log('Error connecting to Playground...'));


const Author = mongoose.model('Author', mongoose.Schema({
    name: String,
    bio: String,
    website: String
}));

const Course = mongoose.model('Course', mongoose.Schema({
    name: String,
    author : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author'
    }
}));

async function createAuthor(name, bio, website) {
const author = new Author({
    name,
    bio,
    website
})
const result = await author.save();
console.log(result);
}


async function createCourse(name, author) {
    const course = new Course({
        name,
        author
    });
    const result = await course.save();
    console.log(result);
}

async function listCourses() {
    const courses = await Course
    .find()
    .populate('author', 'name -_id')
    .select('name author');

    console.log(courses);
}

//createAuthor('Ibrahim', 'My Bio', 'My Website');
//createCourse('Node JS Course', '62fc25104ffcb3e524bebf80');
listCourses();