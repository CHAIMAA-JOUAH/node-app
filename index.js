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

// Route to delete a user by ID
app.delete('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const index = users.findIndex(user => user.id === userId);
  if (index !== -1) {
    users.splice(index, 1);
    res.json({ message: 'Utilisateur supprimé avec succès' });
  } else {
    res.status(404).json({ message: 'Utilisateur non trouvé' });
  }
});

// Port d'écoute
const port = 3000;
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
