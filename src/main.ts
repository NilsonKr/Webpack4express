import * as express from 'express';
import { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
	res.send('Hello TypeScript Express');
});

app.listen(3000, () => {
	console.log('Magic Happens At http://localhost:3000');
});
