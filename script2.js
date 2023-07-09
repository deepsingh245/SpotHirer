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

  function 