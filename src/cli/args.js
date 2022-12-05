import { argv } from 'process'

const parseArgs = () => {
  const print = argv.slice(2)
    .filter(arg => arg.slice(0, 2) === '--')
    .map((arg) => {
      return arg.slice(2) + ' is ' + argv[argv.indexOf(arg) + 1];
    })
    .join(', ');
  console.log(print);
};

parseArgs();