const express = require('express')
const app = express()
const port = 8080
const fbAuth = require('./fbAuth')
const cors = require('cors');
app.use(cors());
app.use(express.json());

const {
    signup,
    login,
    logout,
    isAuth,
    userBasedFunc 
} = require('./api/auth/user')

app.post('/signup', signup);
app.post('/login', login);
app.get('/logout', logout);
app.get('/isAuth', isAuth);
app.get('/userBasedFunc', fbAuth, userBasedFunc);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))