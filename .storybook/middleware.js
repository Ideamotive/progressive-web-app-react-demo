const proxy = require('http-proxy-middleware');

const { proxy: proxyConfigs } = require('../package.json');

module.exports = router => {
  if(typeof proxyConfigs === 'string')
    router.use(proxy('/', { target: proxyConfigs }));
  else
    Object.keys(proxyConfigs).forEach( key => router.use(key, proxy(proxyConfigs[key])) );
}