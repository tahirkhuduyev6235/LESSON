let i
if (localStorage.getItem("i") == null) {
    i = 1
    this.localStorage.setItem("i", i)
} else {
    i.localStorage.setItem("i")
}
$("#Register").submit(function(e) {
    preventDefault()
})

document.getElementById("login-btn").addEventListener("click", function(e) {
    e.preventDefault()
    let user = document.getElementById("exampleInputName1").value
    let pass = document.getElementById("exampleInputPassword1").value
    let mail = document.getElementById("exampleInputEmail1").value
    let lengthUser = Number(localStorage.getItem("i"))

    for (let i = 0; i < lengthUser; i++) {
        let jsontxt = localStorage.getItem(`user${i}`)
        let myobj = JSON.parse(jsontxt)
        if (user === myobj.username && pass === myobj.password) {
            console.log("Ugurlu giris");
            break
        } else if (user === myobj.username && pass !== myobj.password) {
            alert(" parol sehvdir");
            break
        } else if (user !== myobj.username && pass === myobj.password) {
            let UserExist = false
        }
    }
    if (!UserExist) {
        alert(" ad sehvdir");
    }

})