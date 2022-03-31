import fileStructure from "./src";
import cors from 'cors';
import bodyParser from "body-parser";
import express, {Request, Response} from "express";
import path from 'path';

const app = express();
const port = 4000;
``
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req:Request, res:Response) => {
    res.json(fileStructure);
})

app.get('/file', (req:Request, res:Response) => {
    const filePath = req.query.filepath as string;
    const absPath = path.join(__dirname, filePath);
    console.log(filePath, absPath)
    res.sendFile(absPath);
})

app.listen(port, () => console.log(`Listening to port ${port}`));