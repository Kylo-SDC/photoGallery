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

  getOnePhoto: (id, callback) => {
    const queryStr = `SELECT * FROM photos WHERE id = ${id}`;

    db.query(queryStr, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    })
  }
};
