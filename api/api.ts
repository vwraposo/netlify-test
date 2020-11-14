import axios from 'axios'
import queryString from 'query-string'
import { APIGatewayEvent, Context } from 'aws-lambda'

const HEADERS_TO_SEND = [
  'accept',
  'accept-language',
  'content-length',
  'content-type',
  'cookie',
]

export async function handler(
  {
    headers,
    path: rawPath,
    httpMethod,
    body,
    queryStringParameters,
  }: APIGatewayEvent,
  _: Context
) {
  const headersToSend = HEADERS_TO_SEND.reduce((acc, header) => {
    if (headers[header]) {
      acc[header] = headers[header]
    }

    return acc
  }, {} as Record<string, string>)

  headersToSend['x-forwarded-host'] = headers.host

  const path = rawPath.replace('/.netlify/functions', '')
  const querystring = queryString.stringify(queryStringParameters)
  const response = await axios({
    method: httpMethod,
    url: `http://marinbrasil.vtexcommercestable.com.br${path}?${querystring}`,
    data: body,
    headers: headersToSend,
  })

  return {
    statusCode: Number(response.status),
    body: JSON.stringify(response.data),
  }
}
