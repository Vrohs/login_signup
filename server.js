const express = require('express');
const app = express();
const port = 3000;


app.use((req,res,next) => {

  
    next()
})
app.use(express.json());
app.use(express.static('.')); 


app.get('/:rtn', (req,res) => {

    res.send('Helloooo')
    res.end()
})

app.get('/profile/:routename', (req,res)=>{

    res.send(`hi ${routename}`)
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
