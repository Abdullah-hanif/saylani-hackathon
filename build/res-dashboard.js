
// let uid = localStorage.getItem('uid');
// if(!uid){
//     window.location = "signup.html"
// }


firebase.auth().onAuthStateChanged((user) => {
    if (user) {
  
      var uid = user.uid;
      firebase.database().ref(`users/${uid}`).once('value',(data)=>{
        let username = document.getElementById("username")
        let password = document.getElementById("password")
        username.innerHTML = data.val().username;
        email.innerHTML = data.val().email
     console.log(data.val())
    })
    } else {
      window.location = "signup.html"
    }
  });
                                                     // using for get a UID
  
  
  // let userFormFirebase = new Promise((resolve, reject) => {
  //   firebase.auth().onAuthStateChanged((user) => {
  //     if (user) {
  //       resolve(user.uid)
  //     }
  //   });
  
  // })
  // let getUserId = async ()=>{
  //   let uid = await userFormFirebase;
  //   console.log("ye rahi uid",uid)
  // }
  // getUserId()
  // userFormFirebase
  // .then((uid)=>{
  //   console.log("ye rahi uid",uid)
  // })
  
  let logout = () => {
    firebase.auth().signOut()
      .then(() => {
        localStorage.removeItem("uid")
        window.location = "login.html"
      })
  }