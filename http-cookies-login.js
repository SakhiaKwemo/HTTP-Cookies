const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser');
const app = express()
const PORT = 8080
const users = [
    {
        name: "Sakhia Kwemo", 
        email: "kwemos@gmail.com", 
        pass: "123"
    }, 
    {
        name: "Charlie", 
        email: "charlie@gmail.com", 
        pass: "charlierocks"
    },
    {
        name: "Bob", 
        email: "bobross@gmail.com", 
        pass: "ilovetopaint"
    }
]

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    console.log(users)
    const cookie = req.cookies['user']
    if(!cookie) {
        res.render('identification')
    }
    else {
        res.render('homepage', {cookie: cookie})
    }
})

app.get('/login', (req, res) => {
    res.render(`login`)
})

app.get('/signup', (req, res) => {
    res.render(`signup`)
})

// app.get('/hidden', (req, res) => {
//     const cookie = req.cookies['user']
//     res.render(`hidden`, {cookie: cookie})
// })

app.post('/login', (req, res) => {
    const {email, name, password} = req.body
    const user = users.find(e => {
        return e.name === name && e.email === email && e.pass === password
    }) 
    console.log("This is the user" + user)
    if(user) {
        res.cookie('user', req.body)
        res.redirect('/')
    }
    else {
        res.redirect('/login')
    }
})

app.post('/signup', (req, res) => {
    const {email, name, password} = req.body
    users.push({name:name, email: email, pass: password})
    users[email] = {name:name, email: email, pass: password}
    res.cookie('user', req.body)
    res.redirect('/')
})

app.post('/signout', (req, res) => {
    res.clearCookie('user')
    res.redirect('/')
})

app.listen(PORT, () => {
    console.log("The port is running on: " + PORT)
})