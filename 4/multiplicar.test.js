const multiplicar=require('./multiplicar')

test('adds 6*6 es igual a 36',() =>{
    expect(multiplicar(6,6)).toBe(36)
});