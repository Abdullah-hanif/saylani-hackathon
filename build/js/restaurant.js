
function addDish() {
var nameElement = document.getElementById('name');
var priceElement = document.getElementById('price');
var deliveryType = document.getElementById('deliveryType').value;
var category = document.getElementById('category').value;
var descriptionElement = document.getElementById('foodDescription')
var uid = localStorage.getItem('uid');
var price = null;
var description = null;
var name = null;
var foodImage = document.getElementById('foodImage')
console.log(foodImage.files[0])

nameElement.addEventListener('change', (e) => {
    name = e.target.value;
})

priceElement.addEventListener('change', (e) => {
    price = e.target.value;
})

descriptionElement.addEventListener('change', (e) => {
    description = e.target.value;
})
}
// async function addDish() {
//     await uploadImage(foodImage)
    // if (isValidData()) {
    //     await uploadImage(foodImage)
    //     firebase.database().ref(`Dishes/`).push({
    //         name,
    //         price,
    //         deliveryType,
    //         category,
    //         description,
    //         restaurantId: uid
    //     })
    //         .then((res) => {
    //             alert('Dish Add Successfully');
    //         })
    //         .catch((err) => {
    //             alert('Something went wrong');
    //         })
    // }
    // else {
    //     alert('Please fill form first');
    // }


// async function uploadImage(file) {
//     console.log(foodImage.file)
//     var uploadTask = firebase.storage().ref().child(`dishes/`).put(file);
//     uploadTask.on('state_changed', function (snapshot) {
//         var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//         // console.log('Upload is ' + progress + '% done');
//     }, function (error) {
//     }, function () {

//         uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
//             console.log("download url", downloadURL)
//         });
//     });
// }


function isValidData() {
    if (name === '' || name === ' ') {
        return false;
    }
    if (price === '' || price === ' ') {
        return false;
    }
    if (description === '' || description === ' ') {
        return false;
    }
    if (!uid) {
        return false;
    }
    return true;
}


// service firebase.storage {
//     match /b/{bucket}/o {
//       match /{allPaths=**} {
//         allow read, write: if request.auth != null;
//       }
//     }
//   }