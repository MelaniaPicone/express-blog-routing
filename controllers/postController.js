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
// definizione id del nuovo oggetto
const newId = post[posts.length - 1].id +1;

// recupero dati del body della richiesta
const {title, content, image, tags} = req.body;

// nuovo oggetto
const newPost = {
id: newId,
title,
content,
image,
tags
};

// pusho nuovo oggetto
posts.push(newPost);

  res.status(201).json(newPost);

};

// update
const update = (req, res) => {
const id = parseInt(req.param.id);

// recupero dati passati dal body
const {
  title,
  content,
  image,
  tags
} = req.body

// recupero post con id passato come parametro
const post = post.find(item => item.id === id);

post.title = title;
post.content = content;
post.image = image;
post.tags = tags;

res.send(post);

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
};