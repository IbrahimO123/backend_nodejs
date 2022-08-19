const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/playground2")
  .then(() => console.log("Connected to MongoDB playground"))
  .catch(() => console.log("Couldn't connect to MongoDB playground"));

const authorSchema = mongoose.Schema({
  name: String,
  bio: String,
  website: String,
});
const Author = mongoose.model("Author", authorSchema);

const Course = mongoose.model(
  "Course",
  mongoose.Schema({
    name: String,
    authors: [authorSchema],
  })
);

async function createCourse(name, authors) {
  const course = new Course({
    name,
    authors,
  });
  const result = await course.save();
  console.log(result);
}

async function listCourses() {
  const courses = await Course.find();
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

  const result = await course.save();
  console.log(result);
}

async function updateAuthor(courseId) {
  const course = await Course.updateOne(
    { _id: courseId },
    {
      $set: {
        "author.name": "Oliyide Ibrahim",
      },
    }
  );

  console.log(course);
}

async function removeAuthor(courseId) {
  const course = await Course.updateOne(
    { _id: courseId },
    {
      $unset: {
        author: "",
      },
    }
  );

  console.log(course);
}

async function addAuthor(courseId, author) {
    const course = await Course.findById(courseId);
    course.authors.push(author);
    const result = await course.save();
    console.log(result);
}

async function removeAuthor(courseId,authorId) {
    const course = await Course.findById(courseId);
    const author = await course.authors.id(authorId);
    author.remove();
    const result = await course.save();
    console.log(result);
}


removeAuthor('62fc3ddec1ebcb9f682274f7','62fc44a9bd5c2c292bfad42d')

//addAuthor('62fc3ddec1ebcb9f682274f7', new Author({name: "Funke"}) )

// createCourse("Node Course", [
//   new Author({ name: "Ibrahim" }),
//   new Author({ name: "Oliyide" }),
// ]);

//listCourses()

//updateAuthor('62fc3b84128a3c11d88036c0')

//removeAuthor('62fc3b84128a3c11d88036c0')
