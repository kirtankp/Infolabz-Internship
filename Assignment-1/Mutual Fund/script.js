const load = async () => {
    let url = "https://api.mfapi.in/mf"
    let Data = await (await fetch(url)).json()

    document.getElementById("total").innerHTML = "Total Schemes: " + Object.keys(Data).length
}
load()

const details = async (form) => {
    const code = form.code.value
    let url = "https://api.mfapi.in/mf"
    let Data = await (await fetch(url)).json()

    if (code !== "") {
        document.getElementById("msg").innerHTML = ""
        let found = false
        for (const i in Data) {
            if (Data[i]["schemeCode"].toString() === code) {
                document.getElementById("msg").innerHTML = Data[i]["schemeName"]
                found = true
                break
            }
        }

        if (!found) {
            document.getElementById("msg").innerHTML = ""
            document.getElementById("msg").innerHTML = "Scheme Not Found"
        }
    } else {
        document.getElementById("msg").innerHTML = ""
        document.getElementById("msg").innerHTML = "Please Enter Scheme Code"
    }
}