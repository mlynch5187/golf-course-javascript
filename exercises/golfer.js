class Golfer  {
  constructor(obj) {
    obj = obj || {};
    this.name = obj.name;
    this.handicap = obj.handicap;
    this.frustration = 0;
    this.confidence = 0;
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

  hitTheRange() {
    this.confidence += 10;
  }

  marvel(course)  {
    return `I love the ${course.features[0]} and ${course.features[1]} on this course!`
  }
}

module.exports = Golfer;
