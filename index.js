function receivesAFunction(callbackFunction) {
  const name = callbackFunction();
}
function returnsANamedFunction(callbackFunction) {
  function myName(name) {}
  return myName;
}
function returnsAnAnonymousFunction() {
  return function () {};
}
