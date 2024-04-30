// 🚀 Day 21 Challenge: Start Coding! 🚀

// Question 61: Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.

// Explain & TIP: Enums are like special lists in your code that help you categorize things. They make your code cleaner and easier to understand.




enum VehicleType {
    CAR,
    TRUCK,
    MOTORCYCLE
}


// Showing the student's information
console.log(VehicleType);
// We're using the blueprint to make sure our student has a name, age, and list of courses.

console.log(`\n`);









// Question 62: Making a Student Template: Create a blueprint for student information, including their name, age, and the classes they're taking, and then fill in this blueprint with an example student.

// Explain & TIP: This blueprint, called an interface, helps ensure all students have the same kind of information, making your code more organized.



// Creating a blueprint (interface) for student information
interface Student {
    name: string;
    age: number;
    courses: string[];
}

// Filling in the blueprint with an example student
let student: Student = {
    name: "Alice",
    age: 22,
    courses: ["Math", "Science", "History"]
};

// Showing the student's information
console.log(student);
// We're using the blueprint to make sure our student has a name, age, and list of courses.
console.log(`\n`);













// Question 63: Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, including properties unique to each shape.

// Explain & TIP: A type alias lets you create a custom type. It's like a shortcut for describing more complex information, such as the details of different shapes.



// Creating a custom type (type alias) for shapes that could be circles or rectangles
type Shape = {
    kind: "circle" | "rectangle";
    radius?: number; // Only for circles
    width?: number; // Only for rectangles
    height?: number; // Only for rectangles
};

// Describing a circle using our Shape type
let circle: Shape = {
    kind: "circle",
    radius: 5
};

// Describing a rectangle using our Shape type
let rectangle: Shape = {
    kind: "rectangle",
    width: 10,
    height: 20
};

// Showing what we described
console.log(circle); // Here's the circle
console.log(rectangle); // And here's the rectangle
// We made a flexible program that can describe different shapes in detail.
