
var loggedIn = false;
var database = firebase.database();
//1.
const userEmail = document.getElementById('userEmail');
const userPassword = document.getElementById('userPassword');
const logIn = document.getElementById('logInBtn');
const logOut = document.getElementById('logOutBtn');




logIn.addEventListener('click', () => {
    const txtEmail = userEmail.value;
    const txtPassword = userPassword.value;
    const auth = firebase.auth();
    const signInUser = auth.signInWithEmailAndPassword(txtEmail, txtPassword);
    console.log("SIGNED IN");
});





//2.
// auth.signInWithEmailAndPassword(email, pass);

// //3.

function moveToDashboard() {
    window.location.href = "../html/dashboard.html";
}

firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
        //TODO: Future code for the dashboard will go here:
    loggedIn = true;
    window.location.href = "../html/dashboard.html";

    
    if (loggedIn) {
        // body2.addEventListener("load", func, false);
    }
        // writeUserData(currentUid, nameTxt, ageTxt, nameTxt, ageTxt, raceTxt, currentSchoolTxt, locationInput, schoolTypeTxt, schoolSizeTxt);
        
    } else {
        //TODO: Future code for the home page will go here:
        loggedIn = false;
    }
});

