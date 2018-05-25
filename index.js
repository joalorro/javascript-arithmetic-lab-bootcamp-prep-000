var a, b
var res;

function addTwo(a , b) {
  res = a + b;
  return res;
}


function subtTwo (a , b) {
  res = a - b;
  return res;
}


function multTwo(a , b) {
  res = a * b;
  return res;
}

it('divide(a, b) divides a by b and returns the result', function() {
  expect(divide(a, b)).toEqual(a / b)
})

function divTwo(a,b) {
  res = a / b;
  return res;
}

function incTwo(a,b) {
  a += b;
  return a;
}

function decTwo(a,b) {
  a -= b;
  return a;
}

describe('makeInt(n)', function() {
  it('parses n as an integer and returns the parsed integer', function() {
    expect(makeInt(a.toString())).toEqual(a)
  })

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
