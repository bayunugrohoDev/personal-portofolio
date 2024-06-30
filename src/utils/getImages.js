import fs from 'fs';
import path from 'path';

export function getTechImages() {
  const directoryPath = path.join(process.cwd(), 'public/assets/img/client');
  const fileNames = fs.readdirSync(directoryPath);
  const imagePaths = fileNames.map(fileName => `/assets/img/client/${fileName}`);
  return imagePaths;
}
