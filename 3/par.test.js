const esPar=require('./par')

test ( 'es par', ()=>{
    expect(esPar(9)).toBe("impar")
});

test ( 'es par', ()=>{
    expect(esPar(7)).toBe("impar")
});


test ( 'es par', ()=>{
    expect(esPar(6)).toBe("par")
});

test ( 'es par', ()=>{
    expect(esPar(4)).toBe("par")
});

test ( 'es par', ()=>{
    expect(esPar(2)).toBe("par")
});