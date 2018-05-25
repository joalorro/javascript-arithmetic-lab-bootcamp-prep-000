var a, b
var res;

function add(a , b) {
  res = a + b;
  return res;
}

function subtract (a , b) {
  res = a - b;
  return res;
}

function multiply(a , b) {
  res = a * b;
  return res;
}

function divide(a,b) {
  res = a / b;
  return res;
}

function inc(a,b) {
  a += b;
  return a;
}

function dec(a,b) {
  a -= b;
  return a;
}

function makeInt(a) {
  return parseInt(a);
} 

function preserveDecimal(a) {
  return parseFloat(a);
}
