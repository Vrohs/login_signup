const express = require('express');
const app = express();
const port = 3000;



app.set("view engine", "ejs")


app.use((req,res,next) => {

  
    next()
})


app.use(express.json());
app.use(express.static('./public'))

app.use(function errHandler(err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})




app.get('/', (req,res) => {

    res.render('login')
    res.end()
})

app.get('/products', (req,res) => {

    res.render('products')
    res.end()
})

app.get('/:rtn', (req,res) => {

    res.end()
})

app.get('/profile/:routename', (req,res)=>{

    res.send(`hi ${req.params.routename}`)
    res.end()
})


const USERS = {
    demoUser: 'demoPassword',
}


app.post('/login', (req, res) => {
    
    const { username, password } = req.body;
    
    if (USERS[username] && USERS[username] === password) {
    
        res.json({success: true});
    } 
    
    else {
    
        res.json({success: false});
    }
})

app.post('/signup', (req, res) => { 
    const { username, password } = req.body;
    if (!users[username]) {
        
        users[username] = password;
        res.json({success: true});
    } else {
        
        res.json({success: false, message: "Username is already taken."});
    }
});



app.listen(port, () => {

    console.log(`Server running at http://localhost:${port}`);
})



