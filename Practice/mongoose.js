const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/playground')
 .then( () => console.log('Connected to Mongo DB..' ))
 .catch(err => console.log("Error: " + err.message));


 const courseSchema = new  mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: {type: Date, default: Date.now},
    isPublished: Boolean
 });


 const Course = mongoose.model('Course', courseSchema);

// async function createCourse() {
//     const course = new Course({
//         name: "Augular js",
//         author: "Oliyide Ibrahim",
//         tags: ["frontend", "augular"],
//         isPublished: true
//     });
    
//     const result = await course.save();
//     console.log(result);
// }

// createCourse();

async function updateCourse(id) {
    const course = await Course.findById(id)
    if (!course) { return console.log("Course not found..."); }
    else {
        course.set({
            isPublished: true,
            author: "Ibrahim",
        })
    }
    const result = await course.save();
    console.log(result);
}

// async function updateCourse(id) {
//     const result = await Course.findOneAndUpdate(id,{
//         isPublished: false,
//         author: "Owolabi",
//     })

//     const updatedCourse = await result.save();
//     console.log(updatedCourse);
// }

updateCourse("62f741620b770119fe2879a2")
async function removeCourse(id) {
const course = await Course.findByIdAndRemove(id);
console.log(course);
}