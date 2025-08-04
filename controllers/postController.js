// importo l'array dei posts
const posts = require('../data/posts.js');

// index
const index = (req, res) => {
res.json(posts);

};

// show
const show = (req, res) => {
const id= req.params.id;

const post = posts.find(item => item.id === id);

res.json(drink);

};

// store
const store = (req, res) => {
res.send("Nuovo post");

};

// update
const update = (req, res) => {
const id = parseInt(req.param.id);

res.send(`Modifica totale dei post con id ${id}`);

};

// modify
const modify = (req, res) => {
const id = parseInt(req.param.id);

res.send(`Modifica parziale dei post con id ${id}`);

};

// destroy
const destroy = (req, res) => {
const id = parseInt(req.param.id);

const post = posts.find(item => item.id === id);

posts.splice(post.indexOf(), 1);

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
}