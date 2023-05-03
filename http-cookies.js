const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser');
const app = express()
const PORT = 8080

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    //writing
    res.cookie('username', 'Bob')

    //read
    const cookie = req.cookies['username']
    console.log(cookie)
    res.render(`Homepage`, {cookie: cookie})
})

app.listen(PORT, () => {
    console.log("The port is running on: " + PORT)
})