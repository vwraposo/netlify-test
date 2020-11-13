exports.handler = async (event, context) => {
  console.log('Hello')
  return {
    statusCode: 200,
    body: `Hello, World\nPATH: ${event.path}\nQS: ${JSON.stringify(event.queryStringParameters)}`
  }
}