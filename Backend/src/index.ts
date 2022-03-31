import fs from 'fs';
import postOrderPrint from './helper';


const pathToDir:string = './pdfs';
const dir = fs.opendirSync(pathToDir);

const fileStructure = postOrderPrint(dir, pathToDir);

export default fileStructure;

