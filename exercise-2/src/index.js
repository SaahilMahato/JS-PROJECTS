let obj = {
    name: "Saahil Mahato",
    address: "Balkot, Bhanktapur",
    email: "saahilmahato72@gmail.com",
    interests: "coding, gaming",
    education: [
        {name: "Gyankunj", enrolledDate: 2001},
        {name: "V.S Niketan", enrolledDate: 2006},
        {name: "KUHS", enrolledDate: 2014},
        {name: "Kathmandu University", enrolledDate: 2017}
    ]
}

for (let i=0; i<obj.education.length; i++) {
    console.log(
        "Name: " + obj.education[i].name +
        ", Date: " + obj.education[i].enrolledDate
    )
}