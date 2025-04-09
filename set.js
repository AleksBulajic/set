class Set {
  constructor(list = []) {
    // Create a `values` property and set it equal to an empty array
    this.values = [];
    // Loop through the array and insert each item into the set
    for (let item of list) {
      this.insert(item);
    }
  }

  length() {
    // Return the length of the values property
    return this.values.length;
  }

  insert(val) {
    // If `val` is not in the `values` property, then push it in
    if (!this.has(val)) {
      this.values.push(val);
    }
  }

  remove(val) {
    // If `val` is in the `values` property, then remove it
    if (this.has(val)) {
      this.values = this.values.filter(item => item !== val);
    }
  }

  has(val) {
    // Return true if `val` is in `values`, false if it isn't
    return this.values.includes(val);
  }

  union(set) {
    // Return a new Set with the values from this Set and the Set passed in as a parameter
    const newSet = new Set(this.values);
    for (let val of set.values) {
      newSet.insert(val);
    }
    return newSet;
  }

  intersect(set) {
    // Return a new Set of the values that appear in both this Set and the Set passed in
    const newSet = new Set();
    for (let val of this.values) {
      if (set.has(val)) {
        newSet.insert(val);
      }
    }
    return newSet;
  }

  difference(set) {
    // Return a new Set of the values that only appear in one of the two sets
    const newSet = new Set();
    for (let val of this.values) {
      if (!set.has(val)) {
        newSet.insert(val);
      }
    }
    for (let val of set.values) {
      if (!this.has(val)) {
        newSet.insert(val);
      }
    }
    return newSet;
  }
}


