const minusculas=require('./minusculas')

test('hola hoy es martes', () => {
    expect(minusculas("BAVIN")).toBe("bavin");
})

test('hola hoy es martes', () => {
    expect(minusculas("PEPPA")).toBe("peppa");
})

test('hola hoy es martes', () => {
    expect(minusculas("BAVINSIN")).toBe("bavinsin");
})

test('hola hoy es martes', () => {
    expect(minusculas("JUANO")).toBe("juano");
})
