let tacoCatInc = {
  gourmetShell: {
    'hard treat shell': { cost: 2, quantity: 100 },
    'soft treat shell': { cost: 1.5, quantity: 100 }
  },

  gourmetFishFilling: {
    'salmon': { cost: 5, quantity: 100 },
    'tuna': { cost: 5.5, quantity: 100 },
    'sardines': { cost: 1.5, quantity: 100 }
  },

  gourmetVeggie: {
    'cat grass': { cost: 1, quantity: 100 }
  },

  gourmetSeasoning: {
    'cat nip': { cost: 0.5, quantity: 100 },
    'treat dust': { cost: 0.1, quantity: 100 }
  },

  cash: 0,

  currentInventory: function () {
    let total = 0;
    let foodItems = [this.gourmetFishFilling, this.gourmetSeasoning, this.gourmetVeggie, this.gourmetShell]

    for (let i = 0; i < foodItems.length; i++) {
        for(let food in foodItems[i]){
           total += foodItems[i][food]["cost"] * foodItems[i][food]["quantity"]
        }
    }
    return total;
  },

  sale: function (itemOrdered) {

    let priceOfOrder = 0;

    for(let item in itemOrdered){

      priceOfOrder += this[item][itemOrdered[item]].cost;
      this[item][itemOrdered[item]].quantity -= 1;

    }

    this.cash = priceOfOrder;
    return priceOfOrder;
  }
};

// YOUR CODE BELOW

