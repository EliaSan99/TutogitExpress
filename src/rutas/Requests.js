const express = require('express'); //Modulo Externo.
const router = express.Router();     //Para manejar las rutas.
const path = require('path');       //Modulo interno.

var files = {root: path.join(__dirname, '../vistas')}; //Utilizada por el metodo sendFile.
router.get('/', (req, res) =>
{
 //res.send("peticion solucionada");
 res.sendFile("index.html", files);

});

router.get('/config', (req, res) =>
{
  //res.send(peticion solucionada)
  res.sendFile("config.html", files);
});

router.get('/repositorio', (req, res) =>
{
  //res.send(peticion solucionada)
  res.sendFile("repositorio.html", files);
});

router.get('/GCambios', (req, res) =>
{
  //res.send(peticion solucionada)
  res.sendFile("Gcambios.html", files);
});

router.get('/Gitignore', (req, res) =>
{
  //res.send(peticion solucionada)
  res.sendFile("Gitignore.html", files);
});

module.exports = router;