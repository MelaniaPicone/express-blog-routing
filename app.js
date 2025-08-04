// importo express
const express = require('express');

// variabile app che contiene istanza express
const app = express();

// definizione porta
const port = 3000;

// definizione rotta base
app.get('/', (req, res) =>
res.console.log("Ciao"));

// Il server rimane in ascolto
app.listen(port,() => {`Server in ascolto sulla porta ${port}`});

// File statici
app.use(express.static('public'));