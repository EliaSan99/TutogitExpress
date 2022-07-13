const express = require('express');
const app = express();

//Settings 
app.set('puerto',7000);
//Herramientas intermedias (middleware)
app.use(require('./src/rutas/Requests.js'));//rutas
app.use(express.static("./src/recursos"));//Archivos estaticos 
app.listen(app.get('puerto'), () =>
{
    console.log("Servidor corriendo en el puerto: ", app.get('puerto'));
});
