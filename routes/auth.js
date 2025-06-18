const express = require('express');
const jwt = require('jsonwebtoken');
const users = require('../users');

const router = express.Router();

router.post('/', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);

  if (!user) {
    return res.status(401).json({ message: 'Credenciais inválidas' });
  }

  const token = jwt.sign(
    { username: user.username, role: user.role },
    'secreto123',
    { expiresIn: '1h' }
  );

  res.json({ token });
});

module.exports = router;
