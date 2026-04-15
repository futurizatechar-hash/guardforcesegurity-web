import fs from 'fs';
import { PNG } from 'pngjs';

const data = fs.readFileSync('src/assets/icon-logo.png');
const png = PNG.sync.read(data);
console.log('RGB:', png.data[0], png.data[1], png.data[2]);
