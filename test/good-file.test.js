import { latestStalker } from '../src'

describe('good file', () => {

  let json

  beforeAll(async() =>
    json = await latestStalker(`${__dirname}/../package.json`)
  )

  it('should have status', () =>
    expect(json.status).toEqual(200)
  )

  it('should have correct name', () =>
    expect(json.body.name).toEqual('latest-stalker')
  )

})
