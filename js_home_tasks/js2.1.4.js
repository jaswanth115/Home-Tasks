function rentalCarCost(cost) {
    if (cost>=7){
      return (cost*40)-50;
    }
    else if (cost>=3){
      return (cost*40)-20;
    }
    else{
      return cost*40
    }
  }