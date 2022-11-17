import express from 'express';
import dotenv from 'dotenv';
import helloRoute from './routes/helloRoute';

dotenv.config();

const app = express();
const port = 5000;

app.get('/', (req, res) => {
	res.send('App is running');
});

app.use('/api/hello', helloRoute);

app.listen(port, () => {
	console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
