/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
  // 等差数列元素数量  糖果发放次数
  let p = Math.floor(Math.sqrt(2 * candies + 0.25) - 0.5)
  // 最后一份糖果数
  ramaining = candies - p * (p + 1) * 0.5
  // 发放轮数
  rows = Math.floor(p / num_people)
  // 不完整的一轮发放人数
  cols = p % num_people
  let d = new Array(num_people).fill(0)
  for (let i = 0; i < num_people; i++) {
    d[i] = (i + 1) * rows + num_people * (rows * (rows - 1) * 0.5)
    if (i < cols) {
      d[i] += i + 1 + num_people * rows
    }
  }
  d[cols] += ramaining
  return d
};

console.log(distributeCandies(29, 3))