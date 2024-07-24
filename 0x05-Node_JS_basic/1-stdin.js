// 1-stdin.js
process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.on('data', (data) => {
  process.stdout.write(`Your name is: ${data.toString()}`);
  process.exit();
});

process.on('exit', () => {
  console.log('This important software is now closing');
});
