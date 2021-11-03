const dbCon = require("../connection")

module.exports = {
    addEmpPage : (req,res)=>{
        dbCon.query('SELECT * FROM department' , (error, results, field)=>{
            if(error) throw error

            res.render('addEmp.ejs', {
                title : "Add Employee",
                data : results,
                message: ''
            })
            })     
    },

    addEmp : (req,res)=>{
        const fname = req.body.fname;
        const lname = req.body.lname;
        const age = req.body.age;
        const salary = req.body.salary;
        const department = req.body.department;

        dbCon.query("INSERT INTO employee (first_name, last_name, salary, age, department_id) VALUE(?,?,?,?,?)",
        [fname, lname, salary, age, department], (error, result, field)=>{
            if(error){
                throw error
            }
            res.redirect('/')
        })

    }


}