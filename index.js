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
    let a = 0;
    for (const ele of this.items) {
      a += ele;
    }
    return a;
  }

  avg() {
    if(this.items.length === 0) {
      throw new Error('EmptySortedList');
    }
    return this.sum()/(this.items.length);
  }
}

module.exports = SortedList;
