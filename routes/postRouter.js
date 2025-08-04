// importo express
const express = require('express');

// istanza della classe router di express
const router = express.Router();

// rotte

// index
router.get('/', (req, res) =>
{
  res.send('Elenco dei posts');
});

// show
router.get('/:id', (req,res) => 
  {
res.send(`Dettaglio del post con id ${id}`);
});