var conexionBd = require('../config/conexion');
var libroModel = require('../model/libro');

module.exports={

    index:function (req, res) {

        libroModel.obtener(conexionBd, function (err, datos) {
            
            console.log(datos);
            res.render('libros/index', { title: 'Express', libros: datos });
        });
    },
    crear:function (req, res) {
        
        res.render('libros/crear');
    }
}