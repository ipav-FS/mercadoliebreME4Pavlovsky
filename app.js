const express = require('express')
const app = express()
const port = 3030
const puerto = process.env.PORT ; 
const path = require('path');
console.log('Escuchando');
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, './views/login.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, './views/register.html'));
});

app.listen(puerto || 3030, function() {
    console.log("Servidor corriendo en el puerto 3030");
});
