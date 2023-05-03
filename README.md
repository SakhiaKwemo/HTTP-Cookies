# Lighthouse Labs | HTTP Cookies 

- [] What is a Cookie ? 
    - amazon/online shopping/social media 
    - key/value pair, like an object
    - writing/reading cookies
- [] Basic Login System Cookie Demo
    - http + testcookie
        - 2 ways to read cookies
        - 1 way to write cookies
    - http + testcookie + html
    - http + testcookie + ejs 
    - http + testcookie + login/logout


    ** BREAK ** 
    
    - http + testcookie + userDatabase
    - http + testcookie + logout
    - http + testcookie + sign up


# What is a Cookie ? 

```js
const obj = {
    key: value
}

obj[key]


const cookie = {
    key: value
}

//read
req.cookies('username')


//write
let value = "Sakhia"
res.cookies('username', value)


```

