const { firebase } = require('../../fbConfig')

exports.signup = (req, res) => {
    firebase.auth().createUserWithEmailAndPassword(req.body.email, req.body.password)
        .then(function () {
            firebase.auth().currentUser.getIdToken(true).then(function (idToken) {
                res.send(idToken)
                res.end()
            }).catch(function (error) {
                console.log(error)
            });
        }).catch(function (error) {
            //Handle error
        });
}

exports.login = (req, res) => {
    // const userInfo = {
    //     email: "example@exapmle.com",
    //     password: "example"
    // }
    firebase.auth().signInWithEmailAndPassword(/*userInfo.email, userInfo.password*/req.body.email, req.body.password)
        .then(function () {
            firebase.auth().currentUser.getIdToken(true).then(function (idToken) {
                res.send(idToken)
                res.end()
            }).catch(function (error) {
                //Handle error
            });
            // admin.auth().createCustomToken(uid)
            //     .then(function (customToken) {
            //         res.send(customToken)
            //         res.end()
            //     })
            //     .catch(function (error) {
            //         console.log('Error creating custom token:', error);
            //     });
        }).catch(function (error) {
            //Handle error
        });
}

exports.logout = (req, res) => {
    firebase.auth().signOut().then(function () {
        res.send(null)
        res.end()
    }).catch(function (error) {
        //Handle error
    });
}

exports.isAuth = (req, res) => {
    var user = firebase.auth().currentUser;
    if (user) {
        user.getIdToken(true).then(function (idToken) {
            res.send(idToken)
            res.end()
        }).catch(function (error) {
            // Handle error
        });
    } else {
        //Handle error
    }
}

exports.userBasedFunc = (req, res) =>{
    //logs user id
    console.log(req.user)
}