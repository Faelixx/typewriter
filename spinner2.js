const spinner = '\\\|/-\\|/-\\\|/-\\|/-\\\|/-\\|/-\\\|/-\\|/-\\\|/-\\|/-\\\|/-\\|/-\\\|/-\\|/-$'

const letterPrint = function(string) {
  for (const letter in string) {
    setTimeout(() => {
      process.stdout.write(`\r ${string[letter]}`);
    }, letter * 100);
  }
};
letterPrint(spinner);

setTimeout(() => {
  console.log('');
}, 6000);