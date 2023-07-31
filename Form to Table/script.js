function send(form) {
    
    document.write("<Table border='1'>")
    document.write("<tr><td>Name</td><td>"+form.userName.value+"</td></tr>")
    document.write("<tr><td>Email</td><td>"+form.userEmail.value+"</td></tr>")
    document.write("<tr><td>Phone</td><td>"+form.userPhone.value+"</td></tr>")
    document.write("<tr><td>Address</td><td>"+form.userAddress.value+"</td></tr>")
    document.write("<tr><td>Gender</td><td>"+form.userGender.value+"</td></tr>")
    document.write("<tr><td>City</td><td>"+form.userCity.value+"</td></tr>")
    document.write("</Table>")

}