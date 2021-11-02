const dbCon = require("../connection")

module.exports = {
    getIndex : (req,res)=>{
        dbCon.query('SELECT * FROM employee INNER JOIN department WHERE employee.department_id = department.department_id' , (error, results, field)=>{
            if(error) throw error

            res.render('index.ejs', {
                title : "Hello world",
                data : results
            })
            })
        
    }
}