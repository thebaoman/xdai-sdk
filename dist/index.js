
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./uniswap-xdai-sdk.cjs.production.min.js')
} else {
  module.exports = require('./uniswap-xdai-sdk.cjs.development.js')
}
