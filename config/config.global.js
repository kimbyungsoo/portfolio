let config = {
   'info': {
      'name': '',
      'env_type': ''
   },
   "key": {
      "baas": ""
   },
   'pm2': {
      'max_memory': 512,
      'instance': 1
   }
};

let isDev = process.env.NODE_ENV === 'dev';

if (isDev) { //개발 환경
   config.info.name = '';
   config.info.env_type = 'dev';
   config.key.baas = '';
   config.pm2.max_memory = 512;
   config.pm2.instance = 1;
} else { //릴리즈 환경
   config.info.name = process.env.APP_NAME;
   config.env_type = 'production';
   config.key.baas = process.env.BAAS_API_KEY;
   config.pm2.max_memory = process.env.MAX_MEMORY;
   config.pm2.instance = process.env.INSTANCE;
}

module.exports = config;