//We want to create a function that will add numbers together when called in succession.
//We also want to be able to continue to add numbers to our chain.

function add(n){
    // Let the currying begin!
    const f = x => add(n + x);
    f.valueOf = () => n;
    return f;
  }