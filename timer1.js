// Define a function called "timer"
const timer = function () {
  // Get the command line arguments starting from the 3rd element (index 2)
  const args = process.argv.slice(2);

  // Loop through each argument
  for (const arg of args) {
    // Parse the argument as an integer
    const time = parseInt(arg);

    // If the argument is not a positive integer, skip to the next argument
    if (isNaN(time) || time < 0) {
      continue;
    }
    // Otherwise, schedule a beep after the specified amount of time
    else {
      setTimeout(() => {
        process.stdout.write("Beep! ");
      }, time * 1000);
    }
  }
};

// Call the "timer" function to start scheduling beeps
timer();
