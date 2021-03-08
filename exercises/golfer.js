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

  playRound(course) {
    if (course.difficulty === 'hard') {
      this.frustration += 500;
    } else if (course.difficulty === 'moderate') {
      this.frustration += 100;
    }
  }
}

module.exports = Golfer;
