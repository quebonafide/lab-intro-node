class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item)    
    this.items = this.items.sort(function compareNumbers(a, b) {
      return a - b;
    });
    this.length = this.items.length;

  }
  

  get(pos) {
    if(pos < this.items.length) {
      return this.items[pos]
    }
    throw new Error('OutOfBounds');

  }

  max() {
    if(this.items.length != 0) {
      return this.items[this.items.length - 1]
    }
    throw new Error('EmptySortedList');
  }

  min() {
    if(this.items.length != 0) {
      return this.items[0]
    }
    throw new Error('EmptySortedList');
  }

  sum() {
    let sum = 0;
    for (ele of this.items) {
      sum += ele;
    }
    return sum
  }

  avg() {}
}

module.exports = SortedList;
