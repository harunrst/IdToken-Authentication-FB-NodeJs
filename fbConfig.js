require("firebase/auth");
const firebase = require('firebase')
const admin = require('firebase-admin')
const serviceAccount = require(/*YOUR SERVICE ACCOUNT JSON PATH*/);

var firebaseConfig = {
    
    //YOUR FIREBASE CONFIG

};
firebase.initializeApp(firebaseConfig);
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "YOUR DATABASE URL"
});

module.exports = { firebase, admin };