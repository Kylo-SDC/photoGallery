const db = require('./index.js');

module.exports = {
  gather: (restId, callback) => {
    const queryStr = `SELECT * FROM photos WHERE restaurant_id = ${restId}`;

    db.query(queryStr, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  },

  createNewPhoto: (newRecord, callback) => {
    const queryStr = `INSERT INTO photos (image, restaurant_id, date) VALUES ('${newRecord.image}', ${newRecord.restaurant_id}, '${newRecord.date}')`;

    db.query(queryStr, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    })
  },

  getOnePhoto: (id, callback) => {
    const queryStr = `SELECT * FROM photos WHERE id = ${id}`;

    db.query(queryStr, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    })
  },

  updateOnePhoto: (id, imageURL, callback) => {
    const queryStr = `UPDATE photos SET image = '${imageURL}' WHERE id = ${id}`;

    db.query(queryStr, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result)
      }
    })
  },

  deleteOnePhoto: (id, callback)  => {
    const queryStr = `DELETE FROM photos WHERE id = ${id}`

    db.query(queryStr, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result)
      }
    })
  },
};
