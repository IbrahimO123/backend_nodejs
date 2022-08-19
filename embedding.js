const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/playground1')
.then(() => console.log('Connected to MongoDB playground'))
.catch(() => console.log('Couldn\'t connect to MongoDB playground'));

const authorSchema =new mongoose.Schema({
    name: String,
    bio: String,
    website: String,

})
//const Author = mongoose.model('Author', authorSchema)


const Course = mongoose.model('Course',new mongoose.Schema({
    name: String,
    author: authorSchema
}))


async function createCourse(name,author) {
    const course = new Course({
        name,
        author
    })
    const result = await course.save()
    console.log(result)
}

async function listCourses() {
    const courses = await Course.find()
    console.log(courses);

}

async function updateAuthor(courseId) {
    const course = await Course.findById(courseId);
    // course.author({
    //     $set: {
    //         name: 'Ibrahim'
    //     }
    // })
    course.author.name = "Ibrahim";
    
    const result =await course.save();
    console.log(result)
}

async function updateAuthor(courseId) {
    const course = await Course.updateOne({_id : courseId}, {
        $set: {
            'author.name': 'Oliyide Ibrahim',
        }
    })

    console.log(course)
}

async function removeAuthor(courseId) {
    const course = await Course.updateOne({_id : courseId}, {
        $unset: {
            'author': '',
        }
    })

    console.log(course)
}
createCourse('Node Course', new Author({name:'Ibrahim'}))

//listCourses()

//updateAuthor('62fc3b84128a3c11d88036c0')

//removeAuthor('62fc3b84128a3c11d88036c0')