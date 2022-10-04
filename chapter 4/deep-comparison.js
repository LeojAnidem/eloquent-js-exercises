const deepEqual = (compareObj, obj) => {
  const keysArr = [[], []]
  for (const key in compareObj) keysArr[0] = [...keysArr[0], key]
  for (const key in obj) keysArr[1] = [...keysArr[1], key]

  if (keysArr[0].length === keysArr[1].length) {
    for (let i = 0; i <= keysArr[0].length; i++) {
      const isSameKeys = keysArr[0][i] === keysArr[1][i]
      const isSameType = typeof compareObj[keysArr[0][i]] === typeof obj[keysArr[1][i]]
      const isSameValue = compareObj[keysArr[0][i]] === obj[keysArr[1][i]]
      const isObject = typeof compareObj[keysArr[0][i]] === 'object'

      if (isSameKeys && isSameType) {
        if (isObject) {
          const isDeepEqual = deepEqual(compareObj[keysArr[0][i]], obj[keysArr[1][i]])
          if (!isDeepEqual) return false
        } else if (!isSameValue) return false
      } else return false
    }
  } else return false
  return true
}

const obj = {
  here: {
    is: 'an'
  },
  object: 2
}

console.log(deepEqual(obj, { here: 1, object: 2 })) // → false
console.log(deepEqual(obj, { here: { is: 'an' }, object: 2 })) // → true
