const express = require('express');
const app = express();
const AWS_ACCESS_KEY = "AKIAIOSFODNN7EXAMPLE-SECRET-TEST-2026-TEST-SECRET"; // SECRET TEST - DOIT ÊTRE BLOQUÉ PAR GITLEAKS

app.get('/', (req, res) => {
  res.send('API DevSecOps - Projet 12 - Vulnérable intentionnellement');
});

app.get('/user', (req, res) => {
  const userId = req.query.id;
  res.send('User data: ' + userId);
});

app.listen(3000, () => console.log('App running on port 3000'));
  res.send('API DevSecOps - Projet 12 - Vulnérable intentionnellement');
});

app.get('/user', (req, res) => {
  const userId = req.query.id;
  res.send('User data: ' + userId);
});

app.listen(3000, () => console.log('App running on port 3000'));
