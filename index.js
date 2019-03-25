function add(a, b) {
  return(a + b);
}

function subtract(a, b) {
  return(a - b);
}

function multiply(a, b) {
  return(a * b);
}


function divide(a, b) {
  return(a / b);
}

function inc(a) {
  a += 1;
  return(a);
}

function dec(a) {
  a -= 1;
  return(a);
}

function makeInt(a) {
  return(parseInt(a, 10));
}

  it('assumes base 10', function() {
    expect(makeInt('0x2328')).toEqual(0)
  })

  it('returns NaN as appropriate', function() {
    expect(isNaN(makeInt('sldkjflksjf'))).toEqual(true)
  })
})

describe('preserveDecimal(n)', function() {
  it('preserves n\'s decimals (it parses n as a floating point number) and returns the parsed number', function() {
    expect(preserveDecimal('2.222')).toBe(2.222)
  })

  it('returns NaN as appropriate', function() {
    expect(isNaN(preserveDecimal('sldkjflksjf'))).toEqual(true)
  })
})
