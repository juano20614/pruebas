const vocal=require('./vocal');
test('Contar vocales mayúsculas en una cadena', () => {
  expect(vocal('Hola, juano')).toBe(5); 
  expect(vocal('peppa pig')).toBe(3); 
  expect(vocal('si')).toBe(1); 
});