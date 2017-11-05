import fs from 'fs'
import fetch from 'isomorphic-fetch'
import Form from 'form-data'
import config from './config'

const getBody = async(file) => {
  const body = new Form()
  body.append('file', (await getBuffer(file)), 'package.json')
  return body
}

const getBuffer = async(file) => {
  return new Promise((resolve, reject) =>
    fs.readFile(file, (er, buffer) =>
      er ? reject(er) : resolve(buffer)
    )
  )
}

const formatResponse = async(res) => {
  const { status, statusText } = res
  if (res.status === 200) {
    return res.json().then(body => {
      return {
        status,
        statusText,
        body
      }
    })
  } else {
    return {
      status,
      statusText
    }
  }
}

const latestStalker = async(file, options={}) => {
  const uri = options.uri || config.uri
  const method = options.method || config.method
  const body = await getBody(file)
  return fetch(uri, { method, body }).then(async(res) =>
    await formatResponse(res)
  )
}

module.exports = latestStalker
// export default latestStalker
