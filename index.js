import express from "express";
// I added these four lines, to get the __dirname
// to serve the index.html as the home page
import path from "path";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();
const port = 8080;


app.use('/public', express.static(path.join(__dirname, 'public')))
app.get('/', (req, res) => {
 //res.send('Welcome to my server!');
 res.sendFile(path.join(__dirname, '/index.html'));
});
app.listen(port, () => {
 console.log(`Server is running on port ${port}`);
});
