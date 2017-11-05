import stalker from '../src'

describe('missing file', () => {

  let er 

  beforeAll(async() => {
    try {
      await stalker('package.missing')
    } catch (_er) { er = _er }
  })

  it('should fail', () =>
    expect(er.message).toEqual("ENOENT: no such file or directory, open 'package.missing'")
  )

})
