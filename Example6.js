function test() {
  function foo() {
    return 100;
  }
  return foo();
  function foo()
  {
    return 10;
  }
}

test();
