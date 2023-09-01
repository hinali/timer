let input = process.argv.slice(2);

const timer = function(input) {

  for (let time of input) {
    if ((time === undefined) && (time < 0) && (isNaN(time))) {
      continue;
    }
    setTimeout(() => {
      process.stdout.write('\x07')
    }, 1000 * time);
  }
}
timer(input);