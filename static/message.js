const message = (() => {
  let id = 0;
  return class {
    constructor() {
      this.id = ++id;
    }
  }

})()