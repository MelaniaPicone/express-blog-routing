// importo express
const express = require('express');

// variabile app che contiene istanza express
const app = express();

// definizione porta
const port = 3000;

// File statici
app.use(express.static('public'));

// definizione rotta base
app.get('/', (req, res) =>
{
  res.send("Il mio blog");
});

// Il server rimane in ascolto
app.listen(port,() => console.log(`Server in ascolto sulla porta ${port}`));

