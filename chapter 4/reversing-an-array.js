const reverseArray = (arr) => {
  const copyArr = [...arr]
  for (let i = 0; i <= arr.length - 1; i++) {
    copyArr[i] = arr[arr.length - (i + 1)]
  }
  return copyArr
}

const reverseArrayInPlace = (arr) => {
  const copyArr = [...arr]
  for (let i = 0; i <= arr.length - 1; i++) {
    copyArr[i] = arr[arr.length - (i + 1)]
  }

  for (const element of copyArr) arr.pop(element)
  for (const element of copyArr) arr.push(element)
  return copyArr
}

console.log(reverseArray(['A', 'B', 'C']))

const arrayValue = ['a', 2, 3, 4, 5]
reverseArrayInPlace(arrayValue)
console.log(arrayValue)
