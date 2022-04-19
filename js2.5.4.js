function isSantaClausable(obj) {
    // TODO
    return ['sayHoHoHo', 'distributeGifts', 'goDownTheChimney'].every(function(methodName) {
      return typeof obj[methodName] == 'function';
    });
  }