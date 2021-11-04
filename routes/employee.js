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
        const fname = req.query.fname;
        const lname = req.query.lname;
        const salary = req.query.salary;
        const age = req.query.age;
        const department = req.query.department_id;

         dbCon.query("INSERT INTO employee (first_name, last_name, salary, age, department_id) VALUE(?,?,?,?,?)",
         [fname, lname, salary, age, department], (error, result, field)=>{
             if(error){
                 throw error
             }
             res.redirect('/')
         })

    },

    editEmpPage : (req,res)=>{
        console.log(req.params.id)

        dbCon.query('SELECT * FROM department' , (error, results, field)=>{
            if(error) throw error

            res.render('editEmp.ejs', {
                title : "Edit Employee",
                data : results,
                message: ''
            })
            })
    }


}