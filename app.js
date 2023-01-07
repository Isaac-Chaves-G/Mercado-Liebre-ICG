const express = require ("express");
const app = express()
const path = require("path")


const publicFolderPath = path.resolve (__dirname, "./public");
app.use ( express.static (publicFolderPath))

//Levantar nuestro servidor
const port = process.env.PORT || 3066;
app.listen (port, () =>
console.log('Servidor corriendo en el puerto $(port)'));

app.get("/", (req, res) =>{
    let htmlPath = path.resolve(__dirname,"./views/home.html")
    res.sendFile(htmlPath)
}) 