const load = async () => {
    let url = "https://data.covid19india.org/data.json"
    let Data = await (await fetch(url)).json()
    // document.write(Data["cases_time_series"][0]["date"])

    var tableobj = document.getElementById("table")

    for (const i in Data["cases_time_series"]) {
        const newRow = tableobj.insertRow()

        for (let j = 0; j < 5; j++) {
            newRow.insertCell(j)
        }

        // date, dailyconfirmed, dailyrecovered, dailydeceased, totalconfirmed 

        if (Data["cases_time_series"][i]["dailyconfirmed"] >= 100000) {
            newRow.cells[0].innerHTML = Data["cases_time_series"][i]["date"]
            newRow.cells[1].innerHTML = Data["cases_time_series"][i]["dailyconfirmed"]
            newRow.cells[1].style.color = 'red'
            newRow.cells[2].innerHTML = Data["cases_time_series"][i]["dailyrecovered"]
            newRow.cells[3].innerHTML = Data["cases_time_series"][i]["dailydeceased"]
            newRow.cells[4].innerHTML = Data["cases_time_series"][i]["totalconfirmed"]
        } else {
            newRow.cells[0].innerHTML = Data["cases_time_series"][i]["date"]
            newRow.cells[1].innerHTML = Data["cases_time_series"][i]["dailyconfirmed"]
            newRow.cells[1].style.color = 'green'
            newRow.cells[2].innerHTML = Data["cases_time_series"][i]["dailyrecovered"]
            newRow.cells[3].innerHTML = Data["cases_time_series"][i]["dailydeceased"]
            newRow.cells[4].innerHTML = Data["cases_time_series"][i]["totalconfirmed"]
        }
    }
}
load()

