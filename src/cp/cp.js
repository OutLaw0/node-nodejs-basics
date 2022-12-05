import { returnPathAbs } from '../fs/utils.js';
import { fork, spawn } from 'child_process';

const filePath = returnPathAbs('./files/script.js', import.meta.url);

const spawnChildProcess = async (args) => {

  fork(filePath, [...args.split(' ')]);

  // SAME result with spawn
  /*
  const childProc = spawn('node', [filePath, ...args.split(' ')], { shell: true });
  process.stdin.on('data', (d) => {
    childProc.stdin.write(d);
  })
  childProc.stdout.on('data', (d) => {
    process.stdout.write(d)
  })
  childProc.on('close', () => process.exit());
  */
};

spawnChildProcess('nvm install');