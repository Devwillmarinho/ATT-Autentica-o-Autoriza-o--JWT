const express = require('express');
const bodyParser = require('body-parser');

const authRoutes = require('./routes/auth.js');
const productRoutes = require('./routes/products.js');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Rotas de login...
app.use('/login', authRoutes);
app.use('/products', productRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
