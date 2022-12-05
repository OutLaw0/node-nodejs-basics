import { returnPathAbs } from '../fs/utils.js';
import { cpus } from 'os';
import { Worker } from 'worker_threads';

const workerPath = returnPathAbs('worker.js', import.meta.url)

const performCalculations = async () => {
  let num = 10;
  const cpuData = cpus();
  // const resultData = [];
  const workersPromiseResponses = await Promise.allSettled(cpuData.map(() => {
    return new Promise((resolve, reject) => {
      const worker = new Worker(workerPath, {
        workerData: num++
      })

      worker.on('message', resolve)
      worker.on('error', reject)
    })
  }));
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

  const resultData = workersPromiseResponses.map((resp) => {
    return {
      status: resp.status === 'fulfilled' ? 'resolved' : 'error',
      data: resp.status === 'fulfilled' ? resp.value : null
    }
  });

  console.log(resultData);
  return resultData;
};

await performCalculations();