const express = require('express');
const app = express();
const model = require('./models/usermodel');
const cookieParser = require('cookie-parser');
const port = 3000;


app.set('view engine', 'ejs');
app.use(express.static('.'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());



app.get('/', (req, res) => {

    res.render('login');
})


//  CRUD OPs
app.get('/create', async (req, res) => {

    let createdUser = await model.UserModel.create({

        username: "xyz sinha",
        password: "sinha@981"
    })

    res.send(createdUser);
})


app.get('/read', async (req, res) => {

    let readUser = await model.UserModel.find();

    res.send(readUser);
})


app.get('/update', async (req, res) => {


    let updatedUser = await model.UserModel.findOneAndUpdate({

        username: "Vivek Rohtasvi",
        password: "@rvHs536"
    });

    res.send(updatedUser);
})


app.get('/delete', async (req, res) => {

    let deletedUser = await model.UserModel.findOneAndDelete({ username: "xyz sinha" })

    res.send(deletedUser);
})



// Auth

app.get('/auth', (req, res)=>{

    console.log(req.cookies);
    res.cookie('name', 'viv');
    res.send('done'); 
})



app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});