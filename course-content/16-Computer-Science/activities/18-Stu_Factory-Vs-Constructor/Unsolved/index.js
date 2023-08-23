// // TODO: Refactor the class to a factory function.
// class Lesson {
//   constructor() {
//     this.title = 'Unit 17 - Computer Science';
//     this.description = 'CS for JS';
//   }
//   information() {
//     console.log(this.title, this.description);
//   }
// }


// FACTORY FUNCTION WITH COMPOSITION BASED APPROACH

const information = (school) => ({
  info: () => console.log(`${school.title} ${school.description} `)
});

const Lesson = (title, description) => {
  const school = {
    title: title,
    description: description,
  };
 return {...information(school)};
}

const csForJS = Lesson("How to do stuff", "Learn to do stuff");
csForJS.info();


