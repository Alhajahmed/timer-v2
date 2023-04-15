const args = process.argv.slice(2);

for (const arg of args) {
  const time = parseInt(arg);
  if (isNaN(time) || time < 0) {
    continue;
  } else if ([3, 5, 9, 10, 15].includes(time)) {
    setTimeout(() => {
      process.stdout.write("Beep! ");
    }, time * 1000);
  }
}
