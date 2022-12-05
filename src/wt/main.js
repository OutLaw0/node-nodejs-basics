import { returnPathAbs } from '../fs/utils.js';
import { cpus } from 'os';
import { Worker } from 'worker_threads';

const workerPath = returnPathAbs('worker.js', import.meta.url)

const performCalculations = async () => {
  let num = 10;
  const cpuData = cpus();
  let resultData = [];
  await Promise.allSettled(cpuData.map(() => {
    return new Promise((resolve, reject) => {
      const worker = new Worker(workerPath, {
        workerData: num++
      })

      worker.on('message', resolve)
      worker.on('error', reject)
    })
  })).then(res => {
    resultData = res.map((r) => {
      return {
        status: r.status === 'fulfilled' ? 'resolved' : 'error',
        data: r.status === 'fulfilled' ? r.value : null
      }
    });
    console.log(resultData);
  });
  /*  worker.on('message', msg => {
      resolve();
      resultData.push({
        status: 'resolved',
        data: msg
      });
    })
    worker.on('error', () => {
      reject();
      resultData.push({
        status: 'error',
        data: null
      });
    })
  })
}))*/
};

await performCalculations();