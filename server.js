const express = require('express');
const app = express();

const {getIndex} = require('./routes/index')
const {addEmp, addEmpPage ,editEmp , editEmpPage} = require('./routes/employee')

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

app.set('views', __dirname+'/views');
app.set('view engine', 'ejs')

app.get('/', getIndex)

app.get('/add', addEmpPage)
app.post('/add', (req,res)=> res.json(req.body)) //I'm dead here LOL

app.get('/edit:id', editEmpPage);

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{console.log(`Server running on port ${PORT}`)})