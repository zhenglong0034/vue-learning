var advance = document.write('<script src="./vue2.0-advanced/js/advance.js"><\/script>')

describe('advance', () => {
  it('sets the correct default data', () => {
    expect(typeof advance.data).toBe('function')
    const defaultData  = advance.data()
    expect(defaultData.message).toBe('hellp')
  })
})
