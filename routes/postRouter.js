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
  { const id = req.params.id;
res.send(`Dettaglio del post con id ${id}`);
});

// store
router.post('/', (req,res) =>
{ const id = req.params.id;
res.send('Inserimento nuovo post');
});

// update (modifica totale)
router.put('/:id', (req, res) =>
{ const id = req.params.id;
res.send(`Modifica del post con id ${id}`)
});

// modify (modifica parziale)
router.patch('/:id', (req, res) =>
{ const id = req.params.id;
res.send(`Modifica del post con id ${id}`)
});

