const prepend = (val, res = null) => {
  return { value: val, rest: res }
}

const arrayToList = (arr) => {
  if (arr.length === 1) return prepend(arr[0])
  if (arr.length === 2) return prepend(arr[0], prepend(arr[1]))

  if (arr.length > 2) {
    const copyArr = [...arr]
    copyArr.shift()
    return prepend(arr[0], arrayToList(copyArr))
  }
}

const listToArray = (list) => {
  if (list.rest === null) return [list.value]
  else return [list.value, ...listToArray(list.rest)]
}

const nth = (list, index) => {
  return listToArray(list)[index] || 'No index found!'
}

const arr = [10, 20]

console.log(arrayToList(arr)) // → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList(arr))) // → [10, 20, 30]
console.log(nth(arrayToList(arr), 1)) // → 20
