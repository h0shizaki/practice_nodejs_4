const dbCon = require("../connection")

module.exports = {
    addEmp : (req,res)=>{
        dbCon.query('SELECT * FROM department' , (error, results, field)=>{
            if(error) throw error

            res.render('addEmp.ejs', {
                title : "Add Employee",
                data : results
            })
            })
        
    }
}