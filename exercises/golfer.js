class Golfer  {
  constructor(obj) {
    obj = obj || {};
    this.name = obj.name;
    this.handicap = obj.handicap;
    this.frustration = 0;
  }
}

module.exports = Golfer;
