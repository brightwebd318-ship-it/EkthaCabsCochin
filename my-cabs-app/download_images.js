const fs = require('fs');
const https = require('https');
const path = require('path');

const dir = path.join(__dirname, 'src', 'premium vehicle gallery');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const vehicles = [
  { name: 'swift.jpeg', url: 'https://imgd.aeplcdn.com/1056x594/n/cw/ec/159087/swift-exterior-right-front-three-quarter-3.jpeg?isig=0&q=100' },
  { name: 'wagonr.jpeg', url: 'https://imgd.aeplcdn.com/1056x594/n/cw/ec/45691/wagonr-exterior-right-front-three-quarter-57.jpeg?isig=0&q=100' },
  { name: 'dzire.jpeg', url: 'https://imgd.aeplcdn.com/1056x594/n/cw/ec/45691/dzire-exterior-right-front-three-quarter-2.jpeg?isig=0&q=100' },
  { name: 'etios.jpeg', url: 'https://imgd.aeplcdn.com/1056x594/n/cw/ec/45033/etios-exterior-right-front-three-quarter-2.jpeg?isig=0&q=100' },
  { name: 'innova.jpeg', url: 'https://imgd.aeplcdn.com/1056x594/n/cw/ec/51435/innova-crysta-exterior-right-front-three-quarter-138.jpeg?isig=0&q=100' },
  { name: 'ertiga.jpeg', url: 'https://imgd.aeplcdn.com/1056x594/n/cw/ec/110731/ertiga-exterior-right-front-three-quarter-6.jpeg?isig=0&q=100' },
  { name: 'urbania.jpeg', url: 'https://imgd.aeplcdn.com/1056x594/n/cw/ec/134061/urbania-exterior-right-front-three-quarter.jpeg?isig=0&q=100' }
];

vehicles.forEach(vehicle => {
  const dest = path.join(dir, vehicle.name);
  const file = fs.createWriteStream(dest);
  https.get(vehicle.url, response => {
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`Downloaded ${vehicle.name}`);
    });
  }).on('error', err => {
    fs.unlink(dest, () => {});
    console.error(`Error downloading ${vehicle.name}: ${err.message}`);
  });
});
