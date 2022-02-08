var conexionBd = require('../config/conexion');

module.exports={

    index:function (req, res) {

        conexionBd.query("SELECT * FROM libro", function (err, datos) {
            
            console.log(datos);
        });

        res.render('libros/index', { title: 'Express' });
    }
 

}