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

function makeInt(a) {
  return parseInt(a);
} 

function preserveDecimal(a) {
  return a.parseFloat();
}
