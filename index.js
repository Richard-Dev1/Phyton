const express = require('express');
const fs = require('fs');
const app = express();
const port = 3005;


// Middleware per gestire dati JSON in entrata
app.use(express.json());

// Percorso per leggere la lista JSON dal file
app.get('/leggiLista', (req, res) => {

  fs.readFile('lista.json', 'utf8', (err, data) => {

    if (err) {
      console.error(err);
      res.status(500).send('Errore nella lettura della lista JSON.');
    } else {
      res.json(JSON.parse(data));
    }
  });
});


// Percorso per aggiungere un oggetto alla lista JSON
app.post('/aggiungi', (req, res) => {
  const newItem = req.body;

  fs.readFile('lista.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Errore nella lettura della lista JSON.');
      return;
    }

    const lista = JSON.parse(data);
    lista.push(newItem);

    fs.writeFile('lista.json', JSON.stringify(lista, null, 2), 'utf8', (err) => {
      if (err) {
        console.error(err);
        res.status(500).send('Errore nella scrittura della lista JSON.');
      } else {
        res.send('Oggetto aggiunto alla lista JSON con successo.');
      }
    });
  });
});

 

// Percorso per rimuovere un oggetto dalla lista JSON
app.post('/rimuovi', (req, res) => {
  const itemToRemove = req.body;

  fs.readFile('lista.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Errore nella lettura della lista JSON.');
      return;
    }

    let lista = JSON.parse(data);
    const index = lista.findIndex(item => item.id === itemToRemove.id);

    if (index !== -1) {
      lista.splice(index, 1);

      fs.writeFile('lista.json', JSON.stringify(lista, null, 2), 'utf8', (err) => {
        if (err) {
          console.error(err);
          res.status(500).send('Errore nella scrittura della lista JSON.');
        } else {
          res.send('Oggetto rimosso dalla lista JSON con successo.');
        }
      });

    } else {
      res.status(404).send('Oggetto non trovato nella lista JSON.');
    }
  });
});

 

app.listen(port, () => {
  console.log(`Server Express in ascolto sulla porta ${port}`);
});