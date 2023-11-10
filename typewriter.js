const sentence = "hello there from lighthouse labs";

// Our goal is to animate the sentance one character at a time.
// Like someone is typing to you.

const letterPrint = function(string) {
  for (const letter in string) {
    setTimeout(() => {
      process.stdout.write(string[letter]);
    }, letter * 100);
  }
};


letterPrint(sentence);
setTimeout(() => {
  console.log('');
}, 5000);




// console.log(sentence);