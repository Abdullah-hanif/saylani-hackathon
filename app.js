



// firebase.auth().onAuthStateChanged((user) => {
//     if (user) {
//         window.location = "profile.html"
//     } else {

//     }
//   });
let register = () => {

    let username = document.getElementById("username");
    let phone = document.getElementById("phone");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let loaderText = document.getElementById("loaderText")
    let loader = document.getElementById("loader")
    loaderText.style.display = "none";
    loader.style.display = "block"
    let type = 'customer';

    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
        .then((res) => {

            firebase.database().ref(`users/${res.user.uid}`).set({
                username: username.value,
                email: email.value,
                password: password.value,
                type,
                uid: res.user.uid,
            })
                .then(() => {
                    let successDiv = document.getElementById("successDiv");
                    successDiv.style.display = "block";

                    successDiv.innerHTML = "User register succesfully"
                    username.value = "";
                    email.value = "";
                    password.value = ""
                    errorDiv.style.display = "none"
                    loaderText.style.display = "block";
                    loader.style.display = "none"
                    setTimeout(() => {
                        window.location = "login.html"
                    }, 2000)
                })
        })
        .catch((err) => {
            let errorDiv = document.getElementById("errorDiv");
            errorDiv.innerHTML = err.message;
            errorDiv.style.display = "block"
            loaderText.style.display = "block";
            loader.style.display = "none"
            successDiv.style.display = "none";
        })



}





//login method 

let login = () => {

    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let loaderText = document.getElementById("loaderText")
    let loader = document.getElementById("loader")
    loaderText.style.display = "block";
    loader.style.display = "block"
    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
        .then((res) => {
            console.log("user===>", res.user.uid)
            localStorage.setItem("uid", res.user.uid)
            let successDiv = document.getElementById("successDiv");
            successDiv.style.display = "block";
            successDiv.innerHTML = "User login succesfully"
            email.value = "";
            password.value = ""
            errorDiv.style.display = "none"
            loaderText.style.display = "block";
            loader.style.display = "none"
            setTimeout(() => {
                window.location = "profile.html"

            }, 1000)
        })
        .catch((err) => {
            let errorDiv = document.getElementById("errorDiv");
            errorDiv.innerHTML = err.message;
            errorDiv.style.display = "block"
            loaderText.style.display = "block";
            loader.style.display = "none"
            successDiv.style.display = "none";
        })
}





