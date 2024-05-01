const express = require('express');
const app = express();
const model = require('./models/usermodel');
const { name } = require('ejs');
const port = 3000;


app.set('view engine', 'ejs');
app.use(express.static('.'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.get('/', (req,res)=>{

    res.render('login');
})



app.get('/create', async (req,res)=>{

    let createdUser = await model.UserModel.create({

        username: "VIV",
        password: "1556%$%^dbs"
    })

    res.send(createdUser);
})

app.get('/update', async (req,res)=>{

    let updatedUser = await model.UserModel.findOneAndUpdate({
    
        username: "Vivek Rohtasvi", 
        password: "@rvHs536"
    });

    res.send(updatedUser);
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});