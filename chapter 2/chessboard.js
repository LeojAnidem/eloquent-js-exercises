const chessboardGenerator = (width, height) => {
  const chessPattern = '# '.repeat(width)
  let table = ''
  for (let i = 1; i <= height; i++) {
    i % 2 === 0
      ? table += `${chessPattern}\n`
      : table += ` ${chessPattern}\n`
  }
  console.log(table)
}

chessboardGenerator(4, 8)
