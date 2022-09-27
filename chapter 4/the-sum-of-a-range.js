const range = (start, end, step = 0) => {
  const arr = []

  if (step === 0) {
    start < end ? step = 1 : step = -1
  }

  if (step > 0) {
    for (let i = start; i <= end; i += step) arr.push(i)
  } else {
    for (let i = start; i >= end; i += step) arr.push(i)
  }

  return arr
}

// Reduce Solution:
// const sum = (arr) => arr.reduce((prev, val) => prev + val)

const sum = (arr) => {
  let result = 0
  for (const num of arr) result += num
  return result
}

console.log(range(1, 10))
console.log(range(5, 2, -1))
console.log(sum(range(1, 10)))
