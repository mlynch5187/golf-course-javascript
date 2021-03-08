class Golfer  {
  constructor(obj) {
    obj = obj || {};
    this.name = obj.name;
    this.handicap = obj.handicap;
  }
}

module.exports = Golfer;
