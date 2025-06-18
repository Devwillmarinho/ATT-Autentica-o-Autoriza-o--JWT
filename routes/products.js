const express = require('express');
let products = require('../data/products');
const authenticateToken = require('../middleware/authenticateToken');
const authorizeRoles = require('../middleware/authorizeRoles');

const router = express.Router();

router.get('/', authenticateToken, (req, res) => {
  res.json(products);
});

router.post('/', authenticateToken, authorizeRoles('admin'), (req, res) => {
  const { name } = req.body;
  const newProduct = { id: Date.now(), name };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

router.delete('/:id', authenticateToken, authorizeRoles('admin'), (req, res) => {
  const { id } = req.params;
  products = products.filter(product => product.id != id);
  res.status(200).json({ message: 'Produto removido com sucesso' });
});

module.exports = router;
