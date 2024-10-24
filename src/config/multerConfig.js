import multer from 'multer';
import { extname, resolve } from 'path';

const rand = () => Math.floor(Math.random() * 1000 + 1000);

export default {
  fileFilter: (req, file, callback) => {
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
      return callback(new multer.MulterError('Extensão de arquivo inválida. O aqruivo deve ser PNG ou JPG.'));
    }

    return callback(null, true);
  },
  storage: multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, resolve(__dirname, '..', '..', 'uploads', 'images'));
    },
    filename: (req, file, callback) => {
      callback(null, `${Date.now()}_${rand()}${extname(file.originalname)}`);
    },
  }),
};
