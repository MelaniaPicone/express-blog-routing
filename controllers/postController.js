// importo l'array dei posts
const posts = require('../data/posts.js');

// index
const index = (req, res) => {
  // recupero parametri passati da query string
  const tag = req.query.tag;

  // definizione array da restituire
  const filteredPosts = posts;

  // controlliamo il valore di title: se diverso da undefined eseguo il filtraggio
  if (tag){
    filteredPosts = posts.filter(item => {item.tags.includes(tag)});
 }
res.json(posts);

};

// show
const show = (req, res) => {
const id= parseInt(req.params.id);

// recuper il post con l'id passato come parametro
const post = posts.find(item => item.id === id);

// verifico se il post non esiste
if (!post){
  return res.status(404).json({error: "404 pagina non trovata", messagge:"il post non è presente"})
};

res.json(post);

};

// store
const store = (req, res) => {
console.log(req.body);
res.send("Creazione nuovo post");

};

// update
const update = (req, res) => {
const id = parseInt(req.params.id);

res.send(`Modifica totale dei post con id ${id}`);

};

// modify
const modify = (req, res) => {
const id = parseInt(req.params.id);

res.send(`Modifica parziale dei post con id ${id}`);

};

// destroy
const destroy = (req, res) => {
const id = parseInt(req.params.id);

const post = posts.find(item => item.id === id);

posts.splice(post.indexOf(post), 1);

res.sendStatus(204);

};

// esporto

module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destroy
};