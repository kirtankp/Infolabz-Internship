const data = async (form) => {
    const date = form.date.value;

    let url = "https://data.covid19india.org/data.json"
    let Data = await (await fetch(url)).json()

    let found = false
    for (const i in Data["cases_time_series"]) {
        if (Data["cases_time_series"][i]["date"] === date) {
            document.getElementById("msg").innerHTML = ""
            document.getElementById("tableContain").innerHTML = "<tr><td>New Cases</td><td>" + Data["cases_time_series"][i]["dailyconfirmed"] + "</td></tr><tr><td>New Deaths</td><td>" + Data["cases_time_series"][i]["dailydeceased"] + "</td></tr>"
            found = true
            break
        }
    }
    if (!found) {
        document.getElementById("tableContain").innerHTML = ""
        document.getElementById("msg").innerHTML = "Date not found"
    }
}