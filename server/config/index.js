const dev = require('./dev');
const prod = require('./prod');

process.env.NODE_ENV === 'production' ? module.exports = prod : module.exports = dev;
