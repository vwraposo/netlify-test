exports.onCreateWebpackConfig = ({ actions: { setWebpackConfig } }) => {
  setWebpackConfig({
    resolve: {
      alias: {
        react: require.resolve('react'),
        'react-dom': require.resolve('react-dom'),
      },
    },
  })
}

if (process.env.NETLIFY_HOST) {
  exports.createPages = async ({ actions: { createRedirect } }) => {
    createRedirect({
      fromPath: '/api/*',
      toPath: `${process.env.NETLIFY_HOST}/.netlify/functions/api/:splat`,
      statusCode: 200,
    })
  }
}
