const express = require('express');
const app = express();

const {getIndex} = require('./routes/index')
const {addEmp, addEmpPage ,editEmp , editEmpPage , delEmp} = require('./routes/employee')

app.use(express.urlencoded({ extended: false}));
app.use(express.json())

app.set('views', __dirname+'/views');
app.set('view engine', 'ejs')

app.get('/', getIndex)

app.get('/add', addEmpPage)
app.get('/insert', addEmp) //I'm dead here LOL

app.get('/edit:id', editEmpPage);
app.get('/put', editEmp )

app.get('/del:id', delEmp )

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{console.log(`Server running on port ${PORT}`)})