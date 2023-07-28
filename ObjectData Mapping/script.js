//values: newCases recovered death
var cases = {
    "ahmedabad": [1500, 1600, 2],
    "gandhinagar": [500, 200, 1],
    "bhavnagar": [700, 350, 2]
}

var tableobj = document.getElementById("table")
var totalRows = tableobj.rows.length

for (const i in cases) {
    const newRow = tableobj.insertRow()

    for (let j = 0; j < 4; j++) {
        newRow.insertCell(j)
    }

    newRow.cells[0].innerHTML = i
    newRow.cells[1].innerHTML = cases[i][0]
    newRow.cells[2].innerHTML = cases[i][1]
    newRow.cells[3].innerHTML = cases[i][2]
}
