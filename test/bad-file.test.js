import { latestStalker } from '../src'

describe('bad file', () => {

  let json

  beforeAll(async() =>
    json = await latestStalker(`${__dirname}/../README.md`)
  )

  it('should have correct status', () =>
    expect(json.status).toEqual(400)
  )

  it('should have correct statusText', () =>
    expect(json.statusText).toEqual('Bad Request')
  )

})
