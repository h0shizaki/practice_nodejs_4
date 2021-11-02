const mysql = require('mysql');

const dbCon = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'nodejsapi'
});

dbCon.connect( (error)=>{
    if(!error){
        console.log("CONNECT SUCCESS")
    }else{
        console.log("CONNECT FAILED")
        throw error
    }
})

module.exports = dbCon