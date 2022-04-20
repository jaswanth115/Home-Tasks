//description
/*We want to find out, whether a given object fulfils the requirements to implement the "SantaClausable" interface. We need to implement a method which checks for this interface.*/
/*The SantaClausable interface is implemented, if all of the following methods are defined on an object:

sayHoHoHo() / say_ho_ho_ho
distributeGifts() / distribute_gifts
goDownTheChimney() / go_down_the_chimney*/




function isSantaClausable(obj) {
    // TODO
    return ['sayHoHoHo', 'distributeGifts', 'goDownTheChimney'].every(function(methodName) {
      return typeof obj[methodName] == 'function';
    });
  }

  //example
  /*describe('SantaClausable Interface', function() {
  var santa = {
    sayHoHoHo: function() { console.log('Ho Ho Ho!') },
    distributeGifts: function() { console.log('Gifts for all!'); },
    goDownTheChimney: function() { console.log('*whoosh*'); }
  };
  
  var notSanta = {
    sayHoHoHo: function() { console.log('Oink Oink!') }
  };

  it('should implement the SantaClausable interface', function() {
    Test.assertEquals(isSantaClausable(santa), true);
  });

  it('should not implement the SantaClausable interface', function() {
    Test.assertEquals(isSantaClausable(notSanta), false);
  });
});*/