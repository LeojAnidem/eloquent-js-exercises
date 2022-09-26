const min = (eval1, eval2) => {
  let minimun = 0
  eval1 < eval2
    ? minimun = eval1
    : minimun = eval2
  return minimun
}

console.log(min(0, 10))
console.log(min(0, -10))
