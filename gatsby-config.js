const getStaticPaths = () => require('./staticPaths.json')

const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'https://marinbrasil.netlify.app/',
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env

const isNetlifyProduction = NETLIFY_ENV === 'production'
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL

const transformHeaders = (headers, path) => {
  const DEFAULT_SECURITY_HEADERS = [
    'X-XSS-Protection: 1; mode=block',
    'X-Content-Type-Options: nosniff',
    'Referrer-Policy: same-origin',
  ]

  if (path.includes('/preview')) {
    return [
      ...DEFAULT_SECURITY_HEADERS,
      'Content-Security-Policy: frame-src https://*.myvtex.com/',
      ...headers,
    ]
  }

  if (path.includes('/account')) {
    return [...DEFAULT_SECURITY_HEADERS, ...headers]
  }

  return ['X-Frame-Options: DENY', ...DEFAULT_SECURITY_HEADERS, ...headers]
}

module.exports = {
  siteMetadata: {
    author: 'VTEX',
    siteUrl,
  },
  plugins: [
    {
      resolve: require.resolve('@vtex/gatsby-theme-vtex'),
      options: {
        title: 'Marin Brasil Revendedor Tramontina',
        description:
          'Cubas, Tanques, Cadeiras, Lixeiras, Eletrodomésticos, Utilidades Domésticas Tramontina você encontra na Marin Brasil, loja Exclusiva Tramontina. Confira!',
        getStaticPaths,
        localizationThemeOptions: {
          messagesPath: './i18n/messages',
          locales: ['pt'],
          defaultLocale: 'pt',
        },
      },
    },
    {
      resolve: require.resolve('gatsby-plugin-manifest'),
      options: {
        name: 'Marin Brasil Revendedor Tramontina',
        short_name: 'Marin Brasil',
        start_url: '/',
        icon: 'src/images/icon.png',
        background_color: '#16397b',
        theme_color: '#16397b',
        display: 'minimal-ui',
      },
    },
    {
      // This plugin works in conjunction with the
      // '@vtex/gatsby-theme-vtex' and sources the cms's json files
      resolve: require.resolve('gatsby-source-filesystem'),
      options: {
        path: './src/cms/',
      },
    },
    {
      resolve: require.resolve('gatsby-plugin-robots-txt'),
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: '*' }],
          },
          'branch-deploy': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
          'deploy-preview': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
    {
      resolve: require.resolve('gatsby-plugin-netlify'),
      options: {
        headers: {
          '/preview': [
            'Content-Security-Policy: frame-src https://*.myvtex.com/',
          ],
        },
        transformHeaders,
        mergeSecurityHeaders: false,
        generateMatchPathRewrites: true,
      },
    },
    {
      resolve: require.resolve('@vtex/gatsby-plugin-vtex-nginx'),
      options: {
        transformHeaders,
      },
    },
  ],
}
