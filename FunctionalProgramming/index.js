// const conjoin = (flockX, flockY) => flockX + flockY;
// const breed = (flockX, flockY) => flockX * flockY;

// const flockA = 4;
// const flockB = 2;
// const flockC = 0;
// const result =
//     conjoin(breed(flockB, conjoin(flockA, flockC)), breed(flockA, flockB));
class Flock {
    constructor(n) {
      this.seagulls = n;
    }
  
    conjoin(other) {
      this.seagulls += other.seagulls;
      return this;
    }
  
    breed(other) {
      this.seagulls = this.seagulls * other.seagulls;
      return this;
    }
  }
  
  const flockA = new Flock(4);
  const flockB = new Flock(2);
  const flockC = new Flock(0);
  const result = flockA
    .conjoin(flockC)
    .breed(flockB)
    .conjoin(flockA.breed(flockB))
    .seagulls;
  // 32
console.log(result);
// 16