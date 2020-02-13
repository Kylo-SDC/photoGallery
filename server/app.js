const express = require('express');

const app = express();
const cors = require('cors');
const db = require('../database/models.js');


app.use(cors());

app.use(express.static('./public'));
app.use(express.json());

app.get('/api/photos/:restaurant_id', (req, res) => {
  db.gather(req.params.restaurant_id, (err, results) => {
    if (err) {
      console.log('error in app.get', err);
    } else {
      res.send(results);
    }
  });
});

app.get('/api/one_photo/:id', (req, res) => {
  const id = req.params.id;
  db.getOnePhoto(id, (err, photo) => {
    if (err) {
      console.error('error in getting one photo: ', err);
    } else {
      res.send(photo);
    }
  })
})

app.post('/api/add_photo', (req, res) => {
  const newRecord = req.body;
  db.createNewPhoto(newRecord, (err, newPhoto) => {
    if (err) {
      console.error('unable to create new record: ', err);
    } else {
      res.status(201);
    }
  })
})

app.put('/api/update_photo', (req, res) => {
  const id = req.body.id;
  const newImageURL = req.body.image;
  db.updateOnePhoto(id, newImageURL, (err, update) => {
    if (err) {
      console.error('unable to update photo: ', err);
    } else {
      res.status(200);
    }
  })
})

app.delete('/api/delete_record', (req, res) => {
  const id = req.body.id;
  db.deleteOnePhoto(id, (err, result) => {
    if (err) {
      console.error('unable to delete photo: ', err);
    } else {
      res.status(200);
    }
  })
})

module.exports = app;
