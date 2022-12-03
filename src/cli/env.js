import { env } from 'process'

const parseEnv = () => {
  const rssKeys = Object.keys(env).filter(e => e.split("_")[0] === "RSS");
  const print = rssKeys.map((key) => key + '=' + env[key]).join('; ')
  console.log(print)
};

parseEnv();