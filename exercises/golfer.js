class Golfer  {
  constructor(obj) {
    obj = obj || {};
    this.name = obj.name;
    this.handicap = obj.handicap;
    this.frustration = 0;
  }

  calculateAvg(par)  {
    return `I usually shoot a ${par + this.handicap} on average.`
  }
}

module.exports = Golfer;
