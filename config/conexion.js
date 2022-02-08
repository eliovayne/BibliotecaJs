var mysql = require('mysql');
var conexionBd = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'bibliotecajs'
});
conexionBd.connect(
    (err)=>{
        if (!err) {
            console.log("conexion exitosa :) ....")
        } else {
            
            console.log("ERROR !! de conexion :( ........");
        } 
    }
);

module.exports=conexionBd;