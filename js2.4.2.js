function add(n){
    // Let the currying begin!
    const f = x => add(n + x);
    f.valueOf = () => n;
    return f;
  }