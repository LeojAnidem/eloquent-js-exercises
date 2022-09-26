const countChar = (str, evalStr) => {
  let numMatches = 0

  str = str.toUpperCase()
  evalStr = evalStr.toUpperCase()

  for (const char in str) {
    if (str[char] === evalStr) numMatches++
  }

  return numMatches
}

console.log(countChar('BBC', 'b'))
console.log(countChar('kakkerlak', 'k'))
