const load = async () => {
    let url = "https://data.covid19india.org/data.json"
    let Data = await (await fetch(url)).json()

    var tableobj = document.getElementById("table")

    for (const i in Data["statewise"]) {
        const newRow = tableobj.insertRow()

        for (let j = 0; j < 3; j++) {
            newRow.insertCell(j)
        }

        // state, confirmed (delta confirmed), recovered (delta recovered)
        newRow.cells[0].innerHTML = Data["statewise"][i]["state"]
        newRow.cells[1].innerHTML = Data["statewise"][i]["confirmed"]+` (<span style="color: red;">+${Data["statewise"][i]["deltaconfirmed"]}</span>)`
        newRow.cells[2].innerHTML = Data["statewise"][i]["recovered"]+` (<span style="color: green;">+${Data["statewise"][i]["deltarecovered"]}</span>)`

    }
}
load()

