const Mayusculas=require('./mayus')


test('hola hoy es martes', () => {
    expect(Mayusculas("bavin")).toBe("BAVIN");
})

test('hola hoy es martes', () => {
    expect(Mayusculas("bavinsin")).toBe("BAVINSIN");
})


test('hola hoy es martes', () => {
    expect(Mayusculas("peppa")).toBe("PEPPA");
})

test('hola hoy es martes', () => {
    expect(Mayusculas("juano")).toBe("JUANO");
})

test('hola hoy es martes', () => {
    expect(Mayusculas("fer")).toBe("FER");
})












