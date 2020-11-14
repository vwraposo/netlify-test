const VTEXLHConfig = require('@vtex/lighthouse-config').default

const urls = [
  '',
  '/banqueta-alta-naturalle-quadra-branca-tramontina-91454072/p',
  '/cozinha',
]

module.exports = VTEXLHConfig({ urls, server: process.env.BASE_SITE_URL })
