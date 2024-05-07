// 🚀 Day 39 Challenge: Start Coding! 🚀

// Question 115: Use a switch statement to log the days of the week based on a number (1-7).

// Explain & TIP: A switch statement is a great way to select one of many code blocks to be executed. It's particularly useful for scenarios like mapping numbers to days of the week.




// This function logs the day of the week based on a number (1-7)
function logDayOfWeek(dayNumber: number): void {
    switch (dayNumber) {
      case 1:
        console.log("Sunday");
        break;
      case 2:
        console.log("Monday");
        break;
      case 3:
        console.log("Tuesday");
        break;
      case 4:
        console.log("Wednesday");
        break;
      case 5:
        console.log("Thursday");
        break;
      case 6:
        console.log("Friday");
        break;
      case 7:
        console.log("Saturday");
        break;
      default:
        console.log("Invalid day number");
        break;
    }
  }
  
  logDayOfWeek(3); // Outputs: Tuesday
  // Uses a switch statement to select the appropriate day based on the provided number.

console.log(`\n`);















// Question 116: Create a switch case that matches several cases to the same code block, representing seasons.

// Explain & TIP: You can group multiple case statements together when they should execute the same block of code, which is handy for categorizing items into broader groups.

// Explain & TIP: The default case in a switch statement provides a way to execute a block of code when none of the other case labels match the expression's value.


// This function logs the season based on the month
function logSeason(month: number): void {
    switch (month) {
      case 12:
      case 1:
      case 2:
        console.log("Winter");
        break;
      case 3:
      case 4:
      case 5:
        console.log("Spring");
        break;
      case 6:
      case 7:
      case 8:
        console.log("Summer");
        break;
      case 9:
      case 10:
      case 11:
        console.log("Fall");
        break;
      default:
        console.log("Invalid month");
        break;
    }
  }
  
  logSeason(4); // Outputs: Spring
  // Multiple cases share the same code block to represent each season.
  console.log(`\n`);















//   Question 117: Implement a switch statement that evaluates an expression and uses the default case if none of the cases match.

//   Explain & TIP: The default case in a switch statement provides a way to execute a block of code when none of the other case labels match the expression's value.





  // This function evaluates a grade and logs the corresponding remark
function evaluateGrade(grade: string): void {
    switch (grade) {
      case "A":
        console.log("Excellent");
        break;
      case "B":
        console.log("Good");
        break;
      case "C":
        console.log("Fair");
        break;
      case "D":
        console.log("Poor");
        break;
      case "F":
        console.log("Fail");
        break;
      default:
        console.log("Invalid grade");
        break;
    }
  }
  
  evaluateGrade("B"); // Outputs: Good
  // Uses a switch statement to evaluate the grade and defaults to "Invalid grade" if no match is found.