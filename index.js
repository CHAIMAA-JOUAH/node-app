const express = require('express');
const app = express();

app.use(express.json());

let users = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com'
  },
  {
    id: 2,
    name: 'Jane Doe',
    email: 'jane@example.com'
  }
];

// Route pour obtenir tous les utilisateurs
app.get('/users', (req, res) => {
  res.json(users);
});

// Route pour obtenir un utilisateur par son ID
app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(user => user.id === userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'Utilisateur non trouvé' });
  }
});

// Route pour ajouter un nouvel utilisateur
app.post('/users', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json(newUser);
});

// Route pour mettre à jour les informations d'un utilisateur
app.put('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const updateUser = req.body;
  users = users.map(user => {
    if (user.id === userId) {
      return { ...user, ...updateUser };
    }
    return user;
  });
  res.json({ message: 'Utilisateur mis à jour avec succès' });
});

// Port d'écoute
const port = 3000;
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
