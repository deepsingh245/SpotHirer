const firebaseConfig = {
    apiKey: "AIzaSyD334gnK-h2pt1iEelmOl_nkLkA-Xh0Yx4",
    authDomain: "login-assignment-d56fc.firebaseapp.com",
    projectId: "login-assignment-d56fc",
    storageBucket: "login-assignment-d56fc.appspot.com",
    messagingSenderId: "1023026697690",
    appId: "1:1023026697690:web:10aaeab988cdda22985ce3",
    measurementId: "G-MM7C3WCS29"
  };

  firebase.initializeApp(firebaseConfig)
  const auth = firebase.auth()
  const database = firebase.database()

  function login(){
    email =document.getElementById("email").value
    password = document.getElementById("password").value

      // Validate input fields
  if (validate_email(email) == false || validate_password(password) == false) {
    alert('Email or Password is Outta Line!!')
    return
    // Don't continue running the code
  }
    auth.signinWithEmailAndPassword(email, password)
    .then(function() {
        var user = auth.currentUser
        var database_ref = database.ref()

        var user_data = {
            last_login : Date.now()
        }

        database_ref.child('users/' + user.uid).update(user_data)
        alert('Logged In ')

    })
    .catch(function(error){
        var error_code = error.error_code
        var error_message = error.message

        alert(error_message)
    })
  }