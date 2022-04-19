// partition the items array so that all values for which pred returns true are
// at the end, returning the index of the first true value
function partitionOn(pred, items) {
    var sum_par = 0,
      sum_impar = 0;
  var x = 0;    
  for (var i in items) {
     if (pred(i) == true) {
         if (items[i] != undefined) {
            var par = items.splice(items[i]+1, 1);
            var impar = items.splice(par, 1);
            items.splice(1,0,par[0],impar[0]);
         }
     } else {
       sum_par += 1;
       items = sum_par;
     }
     x++;
  }
  return items;
  }