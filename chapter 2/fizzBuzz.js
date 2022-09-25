const fizzBuzz = (start, end) => {
  for (let i = start; i <= end; i++) {
    let word = ''
    if (i % 3 === 0) word += 'Fizz'
    if (i % 5 === 0) word += 'Buzz'
    console.log(`${i} -- ${word}`)
  }
}

fizzBuzz(1, 100)
