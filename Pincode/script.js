const pincodeData = async (form) => {
    let code = form.pincode.value

    let url = `https://api.postalpincode.in/pincode/${code}`
    let Data = await (await fetch(url)).json()

    if (Data[0].Status === "Success") {
        let pTag = document.getElementById("pincode details")
        pTag.innerHTML = ""
        for (const i in Data[0]["PostOffice"]) {
            let sTag = document.createElement("span")
            sTag.innerHTML = Data[0]["PostOffice"][i]["Name"]+"<br>"
            pTag.appendChild(sTag)
        }
    } else {
        document.getElementById("pincode details").innerHTML = "Pincode not found"
    }
}