const isEven = (val) => {
  let result = false

  if (val < 0) val *= -1

  if (val === 0 || val === 1) {
    val === 0
      ? result = true
      : result = false
  } else {
    result = isEven(val - 2)
  }

  return result
}

console.log(isEven(50))
console.log(isEven(75))
console.log(isEven(-1))
