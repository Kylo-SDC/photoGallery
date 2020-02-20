const client = require('./index.js');

module.exports = {
  getOnePhoto: (restaurantId, id, callback) => {
    const queryStr = `SELECT * FROM photos.image WHERE restaurantid = ${restaurantId} AND id = ${id}`;

    client.db.execute(queryStr, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  },

  createNewPhoto: (newRecord, callback) => {
    const queryStr = `INSERT INTO photos.image (restaurantid, id, date, image) VALUES (${newRecord.restaurantId}, ${newRecord.id}, '${newRecord.date}', '${newRecord.image}')`;

    client.db.execute(queryStr, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    })
  },

  getOneRestaurant: (id, callback) => {
    const queryStr = `SELECT * FROM photos.image WHERE restaurantid = ${id}`;

    client.db.execute(queryStr, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    })
  },

  updateOnePhoto: (restaurantId, id, imageURL, callback) => {
    const queryStr = `UPDATE photos.image SET image = '${imageURL}' WHERE restaurantid = ${restaurantId} AND id = ${id}`;

    client.db.execute(queryStr, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result)
      }
    })
  },

  deleteOnePhoto: (restaurantId, id, callback)  => {
    const queryStr = `DELETE FROM photos.image WHERE restaurantid = ${restaurantId} AND id = ${id}`

    client.db.execute(queryStr, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result)
      }
    })
  },
};
