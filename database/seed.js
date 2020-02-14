const db = require('./index.js');
const fs = require('fs');

// const generate = () => {
//   const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
//   const year = ['2017', '2018', '2019', '2020'];
//   for (let i = 1; i < 101; i += 1) {
//     const numPhotos = Math.floor((Math.random() * 13) + 12);
//     for (let j = 1; j < numPhotos; j += 1) {
//       const date = `${month[Math.floor(Math.random() * 12)]} ${Math.ceil(Math.random() * 30)}, ${year[Math.floor(Math.random() * 4)]}`;

//       const randomNumber = Math.ceil(Math.random() * Math.floor(50));
//       const url = `https://dibsondinner.s3-us-east-2.amazonaws.com/dibsondinnerresize/photo-${randomNumber}.jpg`;
//       db.query(`INSERT INTO photos (image, restaurant_id, date) VALUES ( '${url}', ${i}, '${date}')`, (err, result) => {
//         if (err) {
//           console.log('there was an error', err);
//         }
//       });
//     }
//   }
// };

// generate();

const dataGenerator = (numOfPhotos) => {
  const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const year = ['2017', '2018', '2019', '2020'];
  const generateImageUrl = () => {
    return `baconmockup.com/${Math.round(Math.random() * 1000)}/${Math.round(Math.random() * 1000)}`
  };
  const fileWriter = fs.createWriteStream('photos.csv');
  let writing = true;

  fileWriter.write('image, date, restaurant_Id \n')
  const csvGenerator = () => {
    do {
      let photo = {};
      const date = `${month[Math.floor(Math.random() * 12)]} ${Math.ceil(Math.random() * 30)} ${year[Math.floor(Math.random() * 4)]}`;
      photo.image = generateImageUrl();
      photo.date = date;
      photo.restaurant_id = Math.round(Math.random() * 10000000);
      numOfPhotos -= 1;
      if (numOfPhotos < 0) {
        fileWriter.end();
      } else {
        writing = fileWriter.write(`${photo.image}, ${photo.date}, ${photo.restaurant_id}\n`)
      }
    } while (numOfPhotos > 0 && writing);

    if (numOfPhotos > 0) {
      fileWriter.once('drain', csvGenerator);
    }
    fileWriter.on('close', () => {
      process.exit();
    })
  }
  csvGenerator()
}

dataGenerator(10000000);

module.exports = dataGenerator;
