const express = require('express');
const app = express();


app.use(express.urlencoded({extended: true}))
app.use(express.json())

const {getIndex} = require('./routes/index')
const {addEmp} = require('./routes/addEmp')

app.set('views', __dirname+'/views');
app.set('view engine', 'ejs')

app.get('/', getIndex)
app.get('/addEmp', addEmp)

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{console.log(`Server running on port ${PORT}`)})