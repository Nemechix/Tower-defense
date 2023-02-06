function table() {
  const table = document.createElement("table")
  const tbody = document.createElement("tbody")

  for (let xCells = 0; xCells < 20; xCells++) {
    const row = document.createElement("tr")

    row.classList.add(`row${xCells}`)

    for (let yCells = 0; yCells < 20; yCells++) {
      const cell = document.createElement("td")
      const cellText = document.createTextNode(``)

      cell.appendChild(cellText)
      row.appendChild(cell)
      cell.classList.add(`col${yCells}`)
    }
    tbody.appendChild(row)


  }
  table.appendChild(tbody)
  document.body.appendChild(table)
  table.setAttribute("border", "0")
  table.setAttribute(`id`, `board`)

}

table()

