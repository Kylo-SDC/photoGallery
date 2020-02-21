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
    if (numOfPhotos % 3 === 0) {
      return `baconmockup.com/${Math.round(Math.random() * 1000)}/${Math.round(Math.random() * 1000)}`
    } else {
      const randomNumber = Math.ceil(Math.random() * 50);
      const url = `https://dibsondinner.s3-us-east-2.amazonaws.com/dibsondinnerresize/photo-${randomNumber}.jpg`;
      return url;
    }
  };

  const fileWriter = fs.createWriteStream('/Users/zach/Desktop/HR_Github/photoGallery/photoGallery/photos.csv');
  let writing = true;
  let restaurantId = 0;
  let id = 0;
  let randomNumOfPhotos = 0;
  fileWriter.write('id,image,date,restaurantId\n')
  const csvGenerator = () => {
    do {
      let photo = {};
      if (randomNumOfPhotos === 0) {
        randomNumOfPhotos = Math.round(Math.random() * 10 + 10)
        restaurantId += 1;
      }
      randomNumOfPhotos -= 1
      const date = `${month[Math.floor(Math.random() * 12)]} ${Math.ceil(Math.random() * 30)} ${year[Math.floor(Math.random() * 4)]}`;
      photo.id = id;
      photo.image = generateImageUrl();
      photo.date = date;
      photo.restaurantId = restaurantId;
      id += 1;
      numOfPhotos -= 1;
      if (restaurantId >= 10000001) {
        fileWriter.end();
      } else {
        writing = fileWriter.write(`${photo.id},${photo.image},${photo.date},${photo.restaurantId}\n`)
      }
    } while (restaurantId <= 10000001 && writing);

    if (restaurantId <= 10000001) {
      fileWriter.once('drain', csvGenerator);
    }
    fileWriter.on('close', () => {
      process.exit();
    })
  }
  csvGenerator()
}

dataGenerator(200000000);

module.exports = dataGenerator;
